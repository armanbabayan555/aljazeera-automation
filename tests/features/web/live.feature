Feature: Live Functionality (Web)

  Background:
    Given I am on the live page

  @desktop
  Scenario: "Video Player" appears on desktop
    Then The video player is visible

  @desktop
  Scenario: "Switch Player" appears on desktop
    Then The "Switch Player" button is visible