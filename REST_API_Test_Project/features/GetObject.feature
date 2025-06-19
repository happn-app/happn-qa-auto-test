@SmokeTest
Feature: API Testing

Scenario: Get list of all objects
    When I send a GET request to "/objects"
    Then the response status code should be 200
    And the response should contain a non-empty list


Scenario: Get list of objects by IDs
  When I send a GET request to "/objects" with query param ids "1,2,3"
  Then the response status code should be 200
  And the response should contain a non-empty list

Scenario Outline: Get single object by ID
  When I send a GET request to "/objects" for single object with id "<objectId>"
  Then the response status code should be 200
  And the response should contain the object with id "<objectId>"

Examples:
  | objectId |
  | 1      |
  | 10     |
  | 13     |

  

   
