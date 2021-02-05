from flask import request,jsonify,Blueprint, redirect,url_for, flash, session
import os
from api import config
from passlib.hash import pbkdf2_sha256
from werkzeug.utils import secure_filename
from .ImageUploader import ImageUploader
import uuid
import jwt
import datetime
import requests
def construct_blueprint(cluster):
    data = Blueprint("data",__name__,url_prefix="/api")

    @data.route("/team",methods=["GET"])    #RETURNS ALL TEAM MEMBERS
    def get_team_all():
        response = cluster.db.team_members.find()
        output = []
        if response:
            for member in response:
                member_data = {
                    "name" : member["name"],
                    "rank" : member["rank"],
                    "dept" : member["dept"],
                    "rollno" : member["rollno"],
                    "email" : member["email"],
                    "about" : member["about"],
                    "github" : member["github"],
                    "linkedin" : member["linkedin"],
                    "avatar" : member["avatar"]
                }
                output.append(member_data)
            return jsonify({"status" : 200,"result": output})
        return jsonify({"status" : 404,"result": "no data"})

    @data.route("/event",methods=["POST"])     #ADD EVENTS
    def add_event():
        event_number = request.form.get("event-number")
        speaker = request.form.get("speaker")
        event_topic = request.form.get("event-topic")
        linkedin = request.form.get("linkedin")
        about_speaker = request.form.get("about-speaker")
        avatar = request.files["avatar"]

        # SECURING FILENAME 
        filename = secure_filename(avatar.filename)
        # UPLOAD DESTINATION
        filename = "{}\\upload\\{}".format(config.BASE_DIR,filename)
        avatar.save(filename)

        # IMAGE UPLOADER
        avatar = ImageUploader(filename)
        os.remove(filename)   # CLEARING FILE AFTER SUCCESSFULL UPLOAD
        response = cluster.db.events.find_one({"event_number" : event_number})
        if response:
            response = cluster.db.events.update_one(
                        {"event_number" : event_number} ,
                        { "$set" : 
                            {
                                "event_number" : event_number,
                                "event_topic" : event_topic,
                                "speaker" : speaker,
                                "linkedin" : linkedin,
                                "about_speaker" : about_speaker,
                                "avatar" : avatar
                            }
                        }
            )
            if response:
                flash('Event updated successfully','success')
                return redirect(url_for('admin.event_page'))
            flash('Event cannot be updated','error')
            return redirect(url_for('admin.event_page'))
        else:
            response = cluster.db.events.insert_one(
                    {
                        "event_number" : event_number,
                        "event_topic" : event_topic,
                        "speaker" : speaker,
                        "linkedin" : linkedin,
                        "about_speaker" : about_speaker,
                        "avatar" : avatar
                    }
            )
            if response:
                flash('Event added successfully','success')
                return redirect(url_for('admin.event_page'))
            flash('Event cannot be added','error')
            return redirect(url_for('admin.event_page'))

    @data.route("/news",methods=["GET"])     #FETCH NEWS
    def get_news():
        url = "https://techcrunch.com/wp-json/tc/v1/magazine?page=1&_embed=true&cachePrevention=0"
        headers={
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/json; charset=utf-8',
            'referer': 'https://techcrunch.com/',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.3'
        }
        response = requests.get(url,headers=headers)
        if response.status_code == 200:
            result = response.json()
            output = []
            for response in result: 
                desc = response["excerpt"]["rendered"]
                desc = desc[3:-5]
                data = {
                    "title" : response["title"]["rendered"],
                    "description" : desc,
                    "poster" : response["jetpack_featured_media_url"],
                    "original_link" : response["link"]
                }
                output.append(data)
            return jsonify({"status" : 200,"result" : output})
        return jsonify({"status" : 500,"message" : "Internal Server Error"})

    @data.route("/user/login",methods=['POST'])
    def user_login():
        if request.method == 'POST':
            username = request.form["username"]
            password = request.form["password"]
            response = cluster.db.users.find_one({"username" : username})
            if response:
                if(pbkdf2_sha256.verify(password,response["password"])):
                    jwt_encoded = jwt.encode({"username" : response["username"], "exp" : datetime.datetime.utcnow()+datetime.timedelta(days=1)},environ.get("SECRET_KEY"))
                    return jsonify({"status" : 200,"token" : str(jwt_encoded)})
                return jsonify({"status" : 200,"message" : "password is incorrect"})
            return jsonify({"status" : 200,"message" : "user name is not present"})
        return jsonify({"status" : 403,"message" : "Method is not allowed"})
    
    @data.route("/user/add",methods=['POST'])         #CREATE NEW USER
    def add_user():
        if request.method == 'POST':
            username = request.form["username"]
            upassword = request.form["upassword"]
            admin = request.form["admin"]
            apassword = request.form["apassword"]
            aresponse = cluster.db.admins.find_one({"username" : admin})
            if aresponse:
                if(pbkdf2_sha256.verify(apassword,aresponse["password"])):
                    hashed_pass = pbkdf2_sha256.hash(upassword)
                    response = cluster.db.users.insert_one({"username" : username, "password" : hashed_pass})
                    if response:
                        return jsonify({"status" : 200,"message" : "user added"})
                    return jsonify({"status" : 500,"message" : "user cannot be added"})
                return jsonify({"status" : 403,"message" : "admin password incorrect"})
            return jsonify({"status" : 403,"message" : "admin username incorrect"})
        return jsonify({"status" : 403,"message" : "Method is not allowed"})

    return data
