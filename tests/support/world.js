const { setWorldConstructor } = require('@cucumber/cucumber');
const { launchApp } = require('../utils/driverUtil');
const TabBarPage = require('../pages/tabBar.page');

class CustomWorld {
  constructor() {
    this.driver = null;
    this.tabBarPage = null;
  }

  async initApp() {
    const { driver, tabBarPage } = await launchApp();
    this.driver = driver;
    this.tabBarPage = tabBarPage;
  }

  async closeApp() {
    if (this.driver) {
      await this.driver.deleteSession();
      this.driver = null;
      this.tabBarPage = null;
    }
  }
}

setWorldConstructor(CustomWorld);
