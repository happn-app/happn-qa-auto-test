Feature: Login Functionality
  Scenario: Successful login with valid credentials
    Given l'application est lancée et j'attends 7 secondes
    And je clique sur le menu "Login"
    When I enter my credentials
      | email         | password  |
      | qa@happn.fr   | 12345678  |
    And I submit the popup 