import { Given } from '@wdio/cucumber-framework'
import { Before } from '@cucumber/cucumber';
import { browser } from '@wdio/globals';

Given('Debug', async function() {
    await driver.debug()
})

Given('I wait {int} seconds', async function(timeout: number) {
    await driver.pause(timeout)
})

Given('l\'application est lancée et j\'attends 7 secondes', async function() {
    await browser.pause(7000);
});

Before(async function () {
  await browser.pause(7000);
});
