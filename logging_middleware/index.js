import requests

TOKEN = "PASTE_YOUR_ACCESS_TOKEN"

def Log(stack, level, package, message):
    url = "http://20.207.122.201/evaluation-service/logs"

    headers = {
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "application/json"
    }

    data = {
        "stack": stack,
        "level": level,
        "package": package,
        "message": message
    }

    response = requests.post(url, json=data, headers=headers)
    print(response.json())
