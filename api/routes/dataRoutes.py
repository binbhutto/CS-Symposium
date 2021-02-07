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

    @data.route("/latest/<event_number>",methods=["GET"])    #SET LATEST
    def set_latest(event_number):
        response = cluster.db.events.find_one({"event_number" : event_number})
        if response:
            response = cluster.db.events.update_one(
                        {"event_number" : event_number} ,
                        { "$set" : 
                            {
                                "latest" : not response["latest"]
                            }
                        }
            )
            if response:
                flash('Event updated successfully','success')
                return redirect(url_for('admin.event_page'))
            flash('Event cannot be updated','error')
            return redirect(url_for('admin.event_page'))


    @data.route("/event",methods=["POST"])     #ADD EVENTS
    def add_event():
        event_number = request.form.get("event-number")
        speaker = request.form.get("speaker")
        event_topic = request.form.get("event-topic")
        event_rg_date = request.form.get("event_rg_date")
        event_date = request.form.get("event-date")
        event_time = request.form.get("event-time")
        linkedin = request.form.get("linkedin")
        about_speaker = request.form.get("about-speaker")
        speaker_exp = request.form.get("speaker_exp")
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
                                "event_rg_date" : event_rg_date,
                                "event_date" : event_date,
                                "event_time" : event_time,
                                "speaker" : speaker,
                                "linkedin" : linkedin,
                                "about_speaker" : about_speaker,
                                "speaker_exp" : speaker_exp,
                                "avatar" : avatar,
                                "latest" : False
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
                        "event_rg_date" : event_rg_date,
                        "event_date" : event_date,
                        "event_time" : event_time,
                        "speaker" : speaker,
                        "linkedin" : linkedin,
                        "about_speaker" : about_speaker,
                        "speaker_exp" : speaker_exp,
                        "avatar" : avatar,
                        "latest" : False
                    }
            )
            if response:
                flash('Event added successfully','success')
                return redirect(url_for('admin.event_page'))
            flash('Event cannot be added','error')
            return redirect(url_for('admin.event_page'))

    return data
