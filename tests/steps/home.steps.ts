import { Then } from '@cucumber/cucumber';
import { browser } from '@wdio/globals';
import HomePage from '../pages/Homepage.ts';

// Tabbar verification steps
Then("I see the tabbbar", async function () {
  await HomePage.assertMenuTabs();
});

Then("The {string} menu is selected by default", async function (menu) {
  await HomePage.assertMenuSelected(menu);
});






