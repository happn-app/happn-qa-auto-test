@SmokeTest
Feature: Create Object API

  Scenario Outline: Create a new object successfully with different names
    Given I have a valid create object payload with name "<objectName>"
    When I send a POST request to "/objects" with the payload
    Then the response status code should be 200
    And the response body should contain the object name "<objectName>"

  Examples:
    | objectName             |
    | Apple MacBook Pro 16   |
    | Dell XPS 15            |
    | Lenovo ThinkPad X1     |
