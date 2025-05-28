class LivePage {

    // ----------------------------------- Locators ------------------------------------------------------------------

    player = '#vjs_video_3_html5_api';
    switchPlayerButton = '#liveStreamPlayerHelpButton';


    // ----------------------------------- Helper Methods -----------------------------------------------------------

    open() {
        return actor().amOnPage('/live');
    }

    // ----------------------------------- Assertions ------------------------------------------------------------------

    seePlayer() {
        return actor().seeElement(this.player);
    }

    seeSwitchPlayerButton() {
        return actor().seeElement(this.switchPlayerButton);
    }

}

module.exports = new LivePage();
