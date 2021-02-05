import requests
import base64
from os import environ

def ImageUploader(avatar):
    encoded_string = ""
    with open(avatar, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())

    url = "https://api.imgur.com/3/image"
    # clientId = "546c25a59c58ad7"
    payload = {'image': encoded_string}
    files = [

    ]
    headers = {
    'Authorization': 'Client-ID {}'.format(environ.get("clientId"))
    }

    response = requests.request("POST", url, headers=headers, data = payload, files = files).json()

    return response["data"]["link"]