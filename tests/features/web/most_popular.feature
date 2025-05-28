Feature: Most Popular Section (Web)

  Background:
    Given I am on the homepage

  @desktop
  Scenario: "Most Popular" section appears on desktop
    When I scroll to the "Most Popular" section
    Then I see the "Most Popular" container

  @desktop
  Scenario: "Most Popular" section has 10 posts
    Then I see exactly 10 items in the "Most Popular" section

  @desktop
  Scenario: "Skip to Most Read" link works
    When I click on the "Skip to Most Read" link in bypass block menu item
    Then The URL contains "#most-read-container"
