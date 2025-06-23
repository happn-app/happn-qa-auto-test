const locators = require('../locators/swipe.locators');


class SwipePage {
  constructor(driver) {
    this.driver = driver;
  }

  async getPageTitle() {
    return await this.driver.$(locators.pageTitle);
  }

  async getPageDescription() {
    return await this.driver.$(locators.pageDescription);
  }


  async getEasterEgg() {
    return await this.driver.$(locators.easterEgg);
  }

async getCardTitle(cardElement) {
  return await cardElement.$(locators.carouselItemTitle);
}

async getCardDescription(cardElement) {
    return await cardElement.$(locators.carouselItemDescription);
  }


  async scrollFromMiddleAfterDelay() {
  // Wait 10 seconds before starting the scroll
  await this.driver.pause(10000);

  const windowSize = await this.driver.getWindowSize();
  const startX = Math.floor(windowSize.width / 2);
  const startY = Math.floor(windowSize.height / 2);   // Middle of the screen vertically
  const endY = Math.floor(windowSize.height * 0.2);   // Scroll up to 20% from the top

  await this.driver.touchAction([
    { action: 'press', x: startX, y: startY },
    { action: 'wait', ms: 500 },
    { action: 'moveTo', x: startX, y: endY },
    { action: 'release' }
  ]);
}

// Scroll vertically to bottom of screen
  async scrollToBottom() {
      await this.driver.pause(10000);

    const { width, height } = await this.driver.getWindowSize();
    const startX = width / 2;
    const startY = height * 0.8;
    const endY = height * 0.2;

    await this.driver.touchPerform([
      { action: 'press', options: { x: startX, y: startY } },
      { action: 'wait', options: { ms: 500 } },
      { action: 'moveTo', options: { x: startX, y: endY } },
      { action: 'release' }
    ]);
  }

async swipeLeftOnCard(cardElement) {
  // Get card element location and size
  const location = await cardElement.getLocation();
  const size = await cardElement.getSize();

  // Calculate startX and startY as center of the card element
  const startX = Math.floor(location.x + size.width * 0.9);  // near right edge for better swipe
  const startY = Math.floor(location.y + size.height / 2);

  // End position (slide left by 50% of card width)
  const endX = Math.floor(location.x + size.width * 0.1);
  const endY = startY;

  // Perform the swipe
  await this.driver.touchPerform([
    { action: 'press', options: { x: startX, y: startY } },
    { action: 'wait', options: { ms: 300 } },
    { action: 'moveTo', options: { x: endX, y: endY } },
    { action: 'release' }
  ]);
  await this.driver.pause(1000);
}
  

async getAllCardsWithDetails(expectedCount) {
  const cards = [];

  // Scroll to bottom first
  await this.scrollToBottom();
  await this.driver.pause(1000);

  for (let i = 0; i < expectedCount; i++) {
    const card = await this.driver.$(locators.cardItems);

    // Check title and description on this card
    const titleElement = await card.$(locators.carouselItemTitle);
    const descElement = await card.$(locators.carouselItemDescription);

    const titleVisible = await titleElement.isDisplayed();
    const descVisible = await descElement.isDisplayed();

    if (!titleVisible) throw new Error(`Card ${i + 1} title not visible`);
    if (!descVisible) throw new Error(`Card ${i + 1} description not visible`);

    const titleText = await titleElement.getText();
    const descText = await descElement.getText();

    console.log(`Card ${i + 1} Title: ${titleText}`);
    console.log(`Card ${i + 1} Description: ${descText}`);

    cards.push(card);

    if (i < expectedCount - 1) {
      await this.swipeLeftOnCard(card);
      await this.driver.pause(1000); // wait for animation
    }
  }

  return cards;
}
}
module.exports = SwipePage;



