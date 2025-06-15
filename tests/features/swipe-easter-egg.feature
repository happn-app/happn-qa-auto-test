Feature: Swipe Page Easter Egg
  As a user
  I want to discover the easter egg by swiping vertically
  So that I can see the hidden message

  Scenario: Discover easter egg by vertical swipe
    Given I am on the Swipe page
    When I swipe vertically on the page
    Then I should see the easter egg message 