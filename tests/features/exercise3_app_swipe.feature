@smokeTest
Feature: Validate Swipe page content

  Scenario: Validate Swipe page elements and carousel items
    Given the app is launched
    When the user navigates to the "Swipe" tab
    Then the page title should be visible
    Then the carousel should display 6 cards with visible title and description
    And the Easter egg should be visible at the bottom of the page
   