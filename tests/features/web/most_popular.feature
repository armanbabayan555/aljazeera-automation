Feature: Most Popular Section

  Background:
    Given I am on the homepage

  @desktop
  Scenario: “Most Popular” appears on desktop
    When I scroll to Most Popular
    Then I see the Most Popular container

  @desktop
  Scenario: “Most Popular” has 10 posts
    Then I see exactly 10 items in Most Popular

  @mobile
  Scenario: “Most Popular” is hidden on mobile
    Given I set viewport to 430x932
    Then I do not see the Most Popular container

  @desktop
  Scenario: Skip-to-Most-Read link works
    When I activate Skip to Most Read
    Then the URL should contain "#most-read-container"
