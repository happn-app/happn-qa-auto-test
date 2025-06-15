import { Given, When, Then } from '@cucumber/cucumber';
import SwipePage from '../pages/SwipePage.ts';

Given('I am on the Swipe page', async function () {
    await SwipePage.visitSwipe();
    await SwipePage.assertTitle();
});

When('I swipe vertically on the page', async function () {
    await SwipePage.performVerticalSwipe();
});

Then('I should see the easter egg message', async function () {
    await SwipePage.assertEasterEgg();
}); 