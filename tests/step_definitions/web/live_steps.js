const LivePage = require('../../pages/LivePage');

Given('I am on the live page', () => {
    return LivePage.open();
});

Then('The video player is visible', () => {
    return LivePage.seePlayer();
});

Then('The "Switch Player" button is visible', () => {
    return LivePage.seeSwitchPlayerButton();
});