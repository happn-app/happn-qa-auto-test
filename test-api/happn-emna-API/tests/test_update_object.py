from tests.pages.object_page import ObjectPage


def test_update_object():
    object_page = ObjectPage()


    created_object = object_page.create_object(
        name="ToUpdate",
        data={
            "country": "france",
            "who": "emna"
        }
    )

    object_id = created_object["id"]


    updated_object = object_page.update_object(
        object_id,
        name="UpdatedName",
        data={
            "country": "france",
            "who": "emna_updated"
        }
    )

    # verify fields
    assert updated_object["name"] == "UpdatedName", "names does not match : no update"
    assert updated_object["data"]["country"] == "france", "Country dooes not match: no updates"
    assert updated_object["data"]["who"] == "emna_updated", "Le who n'a pas été mis à jour"


    object_page.delete_object(object_id)
