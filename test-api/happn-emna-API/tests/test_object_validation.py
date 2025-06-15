import pytest
import requests
from tests.pages.object_page import ObjectPage

BASE_URL = "https://api.restful-api.dev/objects"


def test_get_objects_fields():
    response = requests.get(BASE_URL)
    assert response.status_code == 200, "error"
    objects = response.json()
    assert isinstance(objects, list)

    for obj in objects[:10]:  # check will be done on only 10 first objects
        print(f"\n Analyse de l'objet ID={obj.get('id')}")

        # Verify ID
        try:
            int(obj["id"])
            print("Good:  Valid ID")
        except (ValueError, TypeError):
            pytest.fail(f" error :  ID issue in object: {obj.get('id')}")

        # Verify name
        if isinstance(obj.get("name"), str) and obj["name"].strip() != "":
            print(f"Good Valid name \"{obj['name']}\"")
        else:
            pytest.fail(f" error : invalid name in object : {obj.get('name')}")

        # Verify Data
        data = obj.get("data")
        if isinstance(data, dict) and len(data) > 0:
            print(f" ok , there's data : {data}")
        elif data is None:
            print("No data ")
        elif isinstance(data, dict) and len(data) == 0:
            print("Data is empty")
        else:
            print(f"Data's format not as expected : {data}")


