@SmokeTest
Feature: Delete an object

  Scenario Outline: Delete an object by ID
    When I send a DELETE request to "/objects/<id>"
    Then the response status code should be 200
    And the response body should contain message "Object with id = <id>, has been deleted."

  Examples:
    | id  |
    | 6   |
    | 7   |
    | 8   |
