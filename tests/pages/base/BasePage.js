class BasePage {
    constructor(path = '/') {
        this.path = path;
    }

    get I() {
        return inject().I;
    }

    async open() {
        await this.I.amOnPage(this.path);
    }

    async click(sel) {
        await this.I.click(sel);
    }

    async resize(w, h) {
        await this.I.resizeWindow(w, h);
    }

    async scrollTo(sel) {
        await this.I.scrollTo(sel);
    }

    async waitFor(sel) {
        await this.I.waitForVisible(sel);
    }

    async moveCursorTo(sel, OffsetX, OffsetY) {
        await this.I.moveCursorTo(sel, OffsetX, OffsetY);
    }

    async pressKey(key) {
        await this.I.pressKey(key);
    }
}

module.exports = BasePage;
