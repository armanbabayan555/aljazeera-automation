class MostPopularPage {

    // ----------------------------------- Locators ------------------------------------------------------------------


    container = '#most-read-container';
    items = '#most-read-container .trending-articles__list > li';
    headerContainer = '.container--header';
    skipLink = 'a.bypass-block-link[href="#most-read-container"]';
    acceptCookies = '#onetrust-accept-btn-handler';

    // ----------------------------------- Helper Methods -----------------------------------------------------------

    open() {
        return actor().amOnPage('/');
    }

    scrollToMostPopular() {
        actor().waitForVisible(this.container)
        return actor().scrollTo(this.container);
    }

    setViewport(width, height) {
        return actor().resizeWindow(width, height);
    }

    skipToMostRead() {
        if (actor().seeElement(this.acceptCookies)) {
            actor().click(this.acceptCookies)
        }
        actor().refreshPage();
        actor().scrollTo(this.headerContainer);
        actor().pressKey('Tab');
        actor().pressKey('Tab');
        actor().pressKey('Tab');
        return actor().click(this.skipLink);
    }

    // ----------------------------------- Assertions ------------------------------------------------------------------

    seeMostPopular() {
        return actor().seeElement(this.container);
    }

    dontSeeMostPopular() {
        return actor().dontSeeElement(this.items);
    }

    seeItemCount(n) {
        return actor().seeNumberOfElements(this.items, n);
    }

    seeUrlContains(fragment) {
        return actor().seeInCurrentUrl(fragment);
    }
}

module.exports = new MostPopularPage();
