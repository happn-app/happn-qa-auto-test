@smokeTest
Feature: App Launch - Tab Bar Initialization

  @smokeTest
  Scenario: All 6 tab bar buttons should be visible when app launches

    Given the app is launched
    Then all 6 tab bar buttons should be visible
    Then the "Home" tab should be selected
