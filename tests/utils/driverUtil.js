const { remote } = require('webdriverio');
const TabBarPage = require('../pages/tabBar.page');

async function launchApp() {
  const driver = await remote({
    path: '/wd/hub',
    port: 4725,
    capabilities: {
      platformName: 'Android',
      'appium:deviceName': 'emulator-5554',
      'appium:platformVersion': '16',
      'appium:automationName': 'UiAutomator2',
      'appium:app': '/Users/debdattadey/Desktop/test Happn/happn-qa-auto-test/apps/android.wdio.native.app.v1.0.8.apk',
      'appium:autoGrantPermissions': true,
    }
  });

  const tabBarPage = new TabBarPage(driver);

  return { driver, tabBarPage };
}

module.exports = { launchApp };
