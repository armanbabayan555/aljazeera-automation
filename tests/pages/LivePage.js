class LivePage {

    // ----------------------------------- Locators ------------------------------------------------------------------

    player = '.aj-video-player';
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
