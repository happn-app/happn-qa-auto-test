import { Given } from '@wdio/cucumber-framework'

Given('Debug', async function() {
    await driver.debug()
})

Given('I wait {int} seconds', async function(timeout: number) {
    await driver.pause(timeout)
})
