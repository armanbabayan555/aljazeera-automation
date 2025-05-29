// Probably overkill, did the separation anyway in case our project gets more complex and requires more complex assertions
// I could, of course, merge the Assertions into BasePage, and expose a single API, but I tried to make it similar to what we did at Picsart
// A benefit would be better method chaining if a method needs to both perform and action and assert.

class Assertions {

    get I() {
        return inject().I;
    }

    async see(sel) {
        await this.I.seeElement(sel);
    }

    async dontSee(sel) {
        await this.I.dontSeeElement(sel);
    }

    async seeCount(sel, n) {
        await this.I.seeNumberOfElements(sel, n);
    }

    async urlContains(text) {
        await this.I.seeInCurrentUrl(text);
    }
}

module.exports = Assertions;
