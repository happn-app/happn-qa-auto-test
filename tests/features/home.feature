Feature: Home Page Verification
  As a user
  I want to verify the home page elements
  So that I can ensure the app is working correctly

  Scenario: Verify tabbar and default selection
    Given l'application est lancée et j'attends 7 secondes
    Then I see the tabbbar
    Then The "Home" menu is selected by default

