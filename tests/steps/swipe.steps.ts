import { When, Then } from '@cucumber/cucumber';
import SwipePage from '../pages/SwipePage.ts';

When('I selected the swipe tab', async function() {
    await SwipePage.visitSwipe();
});

Then('The title {string} is displayed', async function(title: string) {
    await SwipePage.assertTitle();
});

Then('The description {string} is displayed', async function(description: string) {
    await SwipePage.assertDescription();
});

Then('I see the carousel with {int} elements', async function(count) {
    await SwipePage.assertCarousel(count);
}); 