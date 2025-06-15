import { Then, When, Given } from '@cucumber/cucumber';
import HomePage from '../pages/Homepage.js';

Given("l'application est lancée et j'attends 7 secondes", async function () {
  await browser.pause(7000);
});

// Tabbar verification steps
Then('I see the tabbbar', async function() {
    await HomePage.assertMenuTabs();
});

Then('The {string} menu is selected by default', async function(menu: string) {
    await HomePage.assertMenuSelected(menu);
});

// Login steps
Given('I am on the login page', async function() {
    // Implementation will be added in Login.page.ts
});

When('I enter my credentials', async function(dataTable) {
    // Implementation will be added in Login.page.ts
});

When('I submit the popup', async function() {
    // Implementation will be added in Login.page.ts
});

Then('I am well loged into application', async function() {
    // Implementation will be added in Login.page.ts
});

// Swipe page steps
Given('I am logged into the application', async function() {
    // This is a nested step that will use the login steps
    // Implementation will be added
});






