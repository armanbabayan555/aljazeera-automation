class MostPopularPage {

    // ----------------------------------- Locators ------------------------------------------------------------------


    container = '#most-read-container';
    items = '#most-read-container .trending-articles__list > li';
    headerContainer = '.container--header';
    skipLink = 'a.bypass-block-link[href="#most-read-container"]';
    acceptAllCookies = '#onetrust-accept-btn-handler';

    // ----------------------------------- Helper Methods -----------------------------------------------------------

    async open() {
        await actor().amOnPage('/');
    }

    async scrollToMostPopular() {
        await actor().waitForVisible(this.container);
        await actor().scrollTo(this.container);
    }

    async acceptCookies() {
        await actor().click(this.acceptAllCookies);
    }

    async scrollToHeader() {
        await actor().waitForVisible(this.headerContainer);
        await actor().scrollTo(this.headerContainer);
    }

    async setViewport(width, height) {
        await actor().resizeWindow(width, height);
    }

    async pressTab(times = 3) {
        for (let i = 0; i < times; i++) {
            await actor().pressKey('Tab');
        }
    }

    async skipToMostRead() {
        try {
            await actor().seeElement(this.acceptAllCookies);
            await this.acceptCookies();
        } catch {
            console.log("'Accept Cookies' pop-up did not appear.")
        }
        await actor().refreshPage();
        await this.scrollToHeader();
        await this.pressTab(3);
        await actor().click(this.skipLink);
    }

    // ----------------------------------- Assertions ------------------------------------------------------------------

    async seeMostPopular() {
        await actor().seeElement(this.container);
    }

    async dontSeeMostPopular() {
        await actor().dontSeeElement(this.items);
    }

    async seeItemCount(n) {
        await actor().seeNumberOfElements(this.items, n);
    }

    async seeUrlContains(fragment) {
        await actor().seeInCurrentUrl(fragment);
    }
}

module.exports = new MostPopularPage();
