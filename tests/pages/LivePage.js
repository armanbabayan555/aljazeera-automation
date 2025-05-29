const BasePage = require('./base/BasePage');
const Assertions = require('./base/Assertions');

class LivePage extends BasePage {
    constructor() {
        super('/live');
        this.assert = new Assertions();
    }

    // ----------------------------------- Locators --------------------------------------------------------------------

    player = '.aj-video-player';
    switchPlayerButton = '#liveStreamPlayerHelpButton';

    // ----------------------------------- Assertions ------------------------------------------------------------------

    async seePlayer() {
        await this.assert.see(this.player);
    }

    async seeSwitchPlayerButton() {
        await this.assert.see(this.switchPlayerButton);
    }

}

module.exports = new LivePage();
