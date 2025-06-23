const locators = require('../locators/tabbar.locators');

class TabBarPage {
  constructor(driver) {
    this.driver = driver;
  }

  async getTab(tabName) {
    // Map the tabName to locator keys
    const locatorMap = {
      Home: locators.home,
      Swipe: locators.swipe,
      Webview: locators.webview,
      Login: locators.login,
      drag: locators.drag,
      forms: locators.forms,
      
    };

    const selector = locatorMap[tabName];
    if (!selector) {
      throw new Error(`No locator found for tab name: ${tabName}`);
    }
    return await this.driver.$(selector);
  }

  async areAllTabsVisible() {
    const tabNames = Object.keys({
      Home: true,
      Swipe: true,
      Webview: true,
      Login: true,
      drag: true,
      forms: true,
     
    });

    for (const tabName of tabNames) {
      const tab = await this.getTab(tabName);
      if (!await tab.isDisplayed()) {
        return false;
      }
    }
    return true;
  }

  async isTabSelected(tabName) {
    const tab = await this.getTab(tabName);
    const selected = await tab.getAttribute('selected');
    return selected === 'true';
  }
}

module.exports = TabBarPage;
