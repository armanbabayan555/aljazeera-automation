const MostPopularPage = require('../../pages/MostPopularPage');

Given('I am on the homepage', () => {
    return MostPopularPage.open();
});

Given('Viewport is set to {int}x{int}', (width, height) => {
    return MostPopularPage.setViewport(width, height)
});

Then('The "Most Popular" container is not visible', () => {
    return MostPopularPage.dontSeeMostPopular();
});
