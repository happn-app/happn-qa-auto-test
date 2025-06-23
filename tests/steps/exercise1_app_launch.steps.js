const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { getDriver, getTabBarPage } = require('./common.steps');

Then('all 6 tab bar buttons should be visible', async function () {
  const tabBarPage = getTabBarPage();
  const allVisible = await tabBarPage.areAllTabsVisible();
  expect(allVisible).to.be.true;
});

Then('the {string} tab should be selected', async function (tabName) {
  const tabBarPage = getTabBarPage();
  const isSelected = await tabBarPage.isTabSelected(tabName);
  expect(isSelected).to.be.true;
});

