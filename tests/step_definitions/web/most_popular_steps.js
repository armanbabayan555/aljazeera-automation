const MostPopularPage = require('../../pages/MostPopularPage');

Given('I am on the homepage', () => {
    return MostPopularPage.open();
});

When('I scroll to the "Most Popular" section', () => {
    return MostPopularPage.scrollToMostPopular();
});

Then('I see the "Most Popular" container', () => {
    return MostPopularPage.seeMostPopular();
});

Then('I see exactly {int} items in the "Most Popular" section', (count) => {
    return MostPopularPage.seeItemCount(count);
});

When('I click on the "Skip to Most Read" link in bypass block menu item', () => {
    return MostPopularPage.skipToMostRead();
});

Then('The URL contains {string}', (fragment) => {
    return MostPopularPage.seeUrlContains(fragment);
});
