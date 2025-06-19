@SmokeTest
Feature: Update Object API

  Scenario Outline: Update an existing object successfully with different models
    Given I have a valid update object payload with name "<objectName>" and price <price>
    When I send a PUT request to "/objects/<objectId>" with the payload
    Then the response status code should be 200
    And the response body should contain the object name "<objectName>"

    Examples:
      | objectId | objectName           | price   |
      | 1        | Apple MacBook Pro 16 | 2049.99 |
      | 2        | Dell XPS 15          | 1599.99 |
      | 3        | Lenovo ThinkPad X1   | 1399.99 |
