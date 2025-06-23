const { Before, Then,} = require('@cucumber/cucumber');
const { expect } = require('chai');
const SwipePage = require('../pages/swipePage');

Before(function () {
  this.swipePage = new SwipePage(this.driver);
});


Then('the page title should be visible', async function () {
  const title = await this.swipePage.getPageTitle();
  expect(await title.isDisplayed(), 'Page title not visible').to.be.true;
});


Then('the carousel should display {int} cards with visible title and description', async function (expectedCount) {
  const cards = await this.swipePage.getAllCardsWithDetails(expectedCount);
  expect(cards.length, `Expected ${expectedCount} cards but found ${cards.length}`).to.equal(expectedCount);
});


Then('the Easter egg should be visible at the bottom of the page', async function () {
  const maxScrolls = 5;
  let isVisible = false;

  for (let i = 0; i < maxScrolls; i++) {
    const easterEgg = await this.swipePage.getEasterEgg();
    isVisible = await easterEgg.isDisplayed();
    if (isVisible) break;
await this.swipePage.scrollFromMiddleAfterDelay();
    await this.driver.pause(1000); 
  }
  expect(isVisible, 'Easter egg not visible after scrolling').to.be.true;
});
