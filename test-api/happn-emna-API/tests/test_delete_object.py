import pytest
from tests.pages.object_page import ObjectPage


def test_delete_object():
    object_page = ObjectPage()

    created_object = object_page.create_object(
        name="ToDelete",
        data={
            "country": "france",
            "who": "emna"
        }
    )

    object_id = created_object["id"]

    assert object_page.validate_object_exists(object_id), "Good: object does exist"
    response = object_page.delete_object(object_id)
    assert response["message"] == f"Object with id = {object_id} has been deleted."
    assert not object_page.validate_object_exists(object_id), "error : object still exists"
