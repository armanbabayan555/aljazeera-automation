class LivePage {

    // ----------------------------------- Locators ------------------------------------------------------------------

    player = '#vjs_video_3_html5_api';
    switchPlayerButton = '#liveStreamPlayerHelpButton';


    // ----------------------------------- Helper Methods -----------------------------------------------------------

    async open() {
        await actor().amOnPage('/live');
    }

    // ----------------------------------- Assertions ------------------------------------------------------------------

    async seePlayer() {
        await actor().seeElement(this.player);
    }

    async seeSwitchPlayerButton() {
        await actor().seeElement(this.switchPlayerButton);
    }

}

module.exports = new LivePage();
