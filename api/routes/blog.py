from flask import Blueprint, request, jsonify

def create_blueprint(cluster):

    blog = Blueprint("blog",__name__,url_prefix="/blog")


    @blog.route("/<event_number>",methods=['GET'])
    def get_blog(event_number):
        response = cluster.db.events.find_one({"event_number" : event_number})
        
        event_data = {}
        if response:
            if response.get("blog_title",None) is not None:
                event_data = {
                        "event_number" : response["event_number"],
                        "event_topic" : response["event_topic"],
                        "event_rg_date" : response["event_rg_date"],
                        "event_date" : response["event_date"],
                        "event_time" : response["event_time"],
                        "speaker" : response["speaker"],
                        "linkedin" : response["linkedin"],
                        "reg_link" : response["reg_link"],
                        "about_speaker" : response["about_speaker"],
                        "speaker_exp" : response["speaker_exp"],
                        "avatar" : response["avatar"],
                        "blog_title" : response["blog_title"],
                        "blog_content" : response["blog_content"]
                }
                return jsonify({"status" : 200, "result" : event_data})
            
            event_data = {
                    "event_number" : response["event_number"],
                    "event_topic" : response["event_topic"],
                    "event_rg_date" : response["event_rg_date"],
                    "event_date" : response["event_date"],
                    "event_time" : response["event_time"],
                    "speaker" : response["speaker"],
                    "linkedin" : response["linkedin"],
                    "reg_link" : response["reg_link"],
                    "about_speaker" : response["about_speaker"],
                    "speaker_exp" : response["speaker_exp"],
                    "avatar" : response["avatar"],
            }
            return jsonify({"status" : 200, "result" : event_data})
        return jsonify({"status" : 404, "message" : "Event not found"})


    @blog.route('/add',methods=['POST'])      #ADD BLOG
    def add_blog():
        if request.method == 'POST':
            event_number = request.form.get("event_number")
            blog_title = request.form.get("blog_title")
            blog_content = request.form.get("blog_content")

            response = cluster.db.events.find_one({"event_number" : event_number})
            if response:
                check_update = cluster.db.events.update_one(
                {"event_number" : event_number},
                {"$set" : {
                    "blog_title" : blog_title,
                    "blog_content" : blog_content
                }})
                if check_update:
                    return jsonify({"status" : 200, "message" : "Blog Added"})
                return jsonify({"status" : 404, "message" : "Blog cannot be added"})
            return jsonify({"status" : 404, "message" : "Event cannot be found"})
        

    return blog