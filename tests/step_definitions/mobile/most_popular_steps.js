const MostPopularPage = require('../../pages/MostPopularPage');

Given('I am on the homepage', () => {
    return MostPopularPage.open();
});
//
// When('I scroll to Most Popular', () => {
//     return MostPopularPage.scrollToMostPopular();
// });
//
// Then('I see the Most Popular container', () => {
//     return MostPopularPage.seeMostPopular();
// });
//
// Then('I see exactly {int} items in Most Popular', (count) => {
//     return MostPopularPage.seeItemCount(count);
// });

When('I activate Skip to Most Read', () => {
    return MostPopularPage.skipToMostRead();
});

Then('the URL should contain {string}', (fragment) => {
    return MostPopularPage.seeUrlContains(fragment);
});
