import requests

TOKEN = "QkbpxH"

def Log(stack, level, package, message):
    url = "http://20.207.122.201/evaluation-service/logs"

    headers = {
        "Authorization": f"Bearer {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyczAxNjNAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDI0MCwiaWF0IjoxNzc3Njk5MzQwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZTdjYjJiOTktZjc4My00Y2RiLThkN2ItYmRiOWQ4MDRmNjRjIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicmlkZGhpIHNhaHUiLCJzdWIiOiIyODMxZmJmZC0yOWZhLTRkNDktYTc2My1jMWEyNTQ3YTFiOGMifSwiZW1haWwiOiJyczAxNjNAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJyaWRkaGkgc2FodSIsInJvbGxObyI6InJhMjMxMTAzMDAyMDA2OSIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjI4MzFmYmZkLTI5ZmEtNGQ0OS1hNzYzLWMxYTI1NDdhMWI4YyIsImNsaWVudFNlY3JldCI6IllCS3J6RUJhalFxUkZGVVYifQ.TNh2IXXmIqPcmdyX02qaDo7aC-8PA5S80u713JMu3Kw}",
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
