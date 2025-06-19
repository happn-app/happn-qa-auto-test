const locators = require('../locators/popup.locators');

class PopupPage {
  constructor(driver) {
    this.driver = driver;
  }

  async isVisible() {
    const popup = await this.driver.$(locators.successPopup);
    return await popup.isDisplayed();
  }

  async clickButton(buttonText) {
    const button = await this.driver.$(`//*[@text="${buttonText}"]`);
    await button.click();
  }
}

module.exports = PopupPage;
