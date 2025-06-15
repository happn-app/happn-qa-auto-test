import requests

class ObjectPage:
    BASE_URL = "https://api.restful-api.dev/objects"

    def __init__(self):
        self.session = requests.Session()

    def create_object(self, name="TestObject", data=None):
        if data is None:
            data = {
                "country": "france",
                "who": "emna"
            }
        
        payload = {
            "name": name,
            "data": data
        }
        
        response = self.session.post(self.BASE_URL, json=payload)
        response.raise_for_status()
        return response.json()

    def get_object(self, object_id):
        response = self.session.get(f"{self.BASE_URL}/{object_id}")
        response.raise_for_status()
        return response.json()

    def update_object(self, object_id, name=None, data=None):
        current_object = self.get_object(object_id)
        
        if name:
            current_object["name"] = name
        if data:
            current_object["data"] = data
            
        response = self.session.put(f"{self.BASE_URL}/{object_id}", json=current_object)
        response.raise_for_status()
        return response.json()

    def delete_object(self, object_id):
        response = self.session.delete(f"{self.BASE_URL}/{object_id}")
        response.raise_for_status()
        return response.json()

    def validate_object_exists(self, object_id):
        try:
            response = self.session.get(f"{self.BASE_URL}/{object_id}")
            return response.status_code == 200
        except requests.exceptions.RequestException:
            return False 