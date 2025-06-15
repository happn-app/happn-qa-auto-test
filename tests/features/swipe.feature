Feature: Swipe Page Verification
  Scenario: Verify swipe page elements
    Given l'application est lancée et j'attends 7 secondes
    When I selected the swipe tab
    Then The title "Swipe horizontal" is displayed
    And The description "Or swipe vertical to find what I'm hiding / ." is displayed
    And I see the carousel with 6 elements 