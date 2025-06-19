@smokeTest
Feature: User Login

  Scenario: User should be able to login successfully
    Given the app is launched
    When the user navigates to the "Login" tab 
    And the user enters email "qa@happn.fr" and password "12345678"
    And the user submits the login form
    Then a success popup should appear
    When the user clicks "OK" on the popup
