import os
import requests
from dotenv import load_dotenv

load_dotenv()

def fetch_call_details(call_id):
    url = f"https://api.vapi.ai/call/{call_id}"
    headers = {
        "Authorization": f"Bearer {os.getenv('VAPI_API_KEY')}"
    }
    response = requests.get(url, headers=headers)
    return response.json()

fetch_call_details("")

