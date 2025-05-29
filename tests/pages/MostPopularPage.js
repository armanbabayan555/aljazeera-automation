const BasePage = require('./base/BasePage');
const Assertions = require('./base/Assertions');

class MostPopularPage extends BasePage {
    constructor() {
        super('/');
        this.assert = new Assertions();
    }

    // ----------------------------------- Locators ------------------------------------------------------------------

    container = '#most-read-container';
    items = '#most-read-container .trending-articles__list > li';
    headerContainer = '.container--header';
    skipLink = 'a.bypass-block-link[href="#most-read-container"]';
    acceptAllCookies = '#onetrust-accept-btn-handler';

    // ----------------------------------- Helper Methods --------------------------------------------------------------

    async scrollToMostPopular() {
        await this.waitFor(this.container);
        await this.scrollTo(this.container);
    }

    async acceptCookies() {
        await this.click(this.acceptAllCookies);
    }

    async scrollToHeader() {
        await this.waitFor(this.headerContainer);
        await this.scrollTo(this.headerContainer);
    }

    async setViewport(width, height) {
        await this.resize(width, height);
    }

    // Scrolling to header, moving cursor to it and pressing tab to open bypass menu
    async skipToMostRead() {
        try {
            await this.assert.see(this.acceptAllCookies);
            await this.acceptCookies();
        } catch {
            console.log("'Accept Cookies' pop-up did not appear.")
        }
        await this.scrollToHeader();
        // x-offset used to move cursor to the most left position of the element, found by using getBoundingClientRect() on JS path
        await this.moveCursorTo(this.headerContainer, 1728, 0)
        await this.pressKey('Tab');
        await this.click(this.skipLink);
    }

    // ----------------------------------- Assertions ------------------------------------------------------------------

    async seeMostPopular() {
        await this.assert.see(this.container);
    }

    async dontSeeMostPopular() {
        await this.assert.dontSee(this.items);
    }

    async seeItemCount(n) {
        await this.assert.seeCount(this.items, n);
    }

    async seeUrlContains(fragment) {
        await this.assert.urlContains(fragment);
    }
}

module.exports = new MostPopularPage();
