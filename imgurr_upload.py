import requests
import base64

encoded_string = ""
with open("C:\\Users\\CipherMan\\Desktop\\ubuntu_neofecth.PNG", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())

url = "https://api.imgur.com/3/image"
clientId = "546c25a59c58ad7"
payload = {'image': encoded_string}
files = [

]
headers = {
  'Authorization': 'Client-ID 546c25a59c58ad7'
}

response = requests.request("POST", url, headers=headers, data = payload, files = files).json()

print(response["data"]["link"])