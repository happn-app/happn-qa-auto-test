import pytest
from tests.pages.object_page import ObjectPage


def test_object_does_not_exist():
    object_page = ObjectPage()
    non_existent_id = "999999"
    assert not object_page.validate_object_exists(non_existent_id), "object exists"
