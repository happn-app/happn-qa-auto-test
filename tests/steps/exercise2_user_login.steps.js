// tests/steps/login.steps.js
const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const locatorsLogin = require('../locators/login.locators'); 
const locatorsPopUP = require('../locators/popup.locators'); 


When('the user enters email {string} and password {string}', async function (email, password) {
const emailInput = await this.driver.$(locatorsLogin.emailInput);
  const passwordInput = await this.driver.$(locatorsLogin.passwordInput);

  await emailInput.setValue(email);
  await passwordInput.setValue(password);
});

When('the user submits the login form', async function () {
const submitBtn = await this.driver.$(locatorsLogin.loginButton);
  await submitBtn.click();
   await this.driver.pause(10000);

});

Then('a success popup should appear', async function () {
  const successPopup = await this.driver.$(locatorsPopUP.successPopup);
  expect(await successPopup.isDisplayed()).to.be.true;
});

When('the user clicks {string} on the popup', async function (buttonText) {
  const okBtn = await this.driver.$(locatorsPopUP.okButton);
  await okBtn.click();
});

