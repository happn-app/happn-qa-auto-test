const { Given, After, setDefaultTimeout, When } = require('@cucumber/cucumber');
const { launchApp } = require('../utils/driverUtil');
const TabBarPage = require('../pages/tabBar.page');
const SwipePage = require('../pages/swipePage');

setDefaultTimeout(100000);

let driver;
let tabBarPage;
let swipePage;

Given('the app is launched', async function () {
  try {
    const result = await launchApp();
    driver = result.driver;
    tabBarPage = result.tabBarPage;
    swipePage = new SwipePage(driver);

    this.driver = driver;
    this.tabBarPage = tabBarPage;
    this.swipePage = swipePage; // <-- create swipePage here with driver!

  } catch (err) {
    console.error('Error launching app:', err);
    throw err;
  }
});


When('the user navigates to the {string} tab', async function (tabName) {
  const tab = await this.tabBarPage.getTab(tabName);
  await tab.click();
});

After(async function () {
  if (driver) {
    await driver.deleteSession();
  }
});

module.exports = {
  getDriver: () => driver,
  getTabBarPage: () => tabBarPage,
  getSwipePage: () => swipePage
};

