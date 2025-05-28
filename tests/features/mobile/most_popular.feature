Feature: Most Popular Section (Mobile)

  Background:
    Given I am on the homepage

  @mobile
  Scenario: "Most Popular" is hidden on mobile
    Given Viewport is set to 430x932
    Then The "Most Popular" container is not visible