const locators = require('../locators/login.locators');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async enterEmail(email) {
    const emailField = await this.driver.$(locators.emailInput);
    await emailField.setValue(email);
  }

  async enterPassword(password) {
    const passwordField = await this.driver.$(locators.passwordInput);
    await passwordField.setValue(password);
  }

  async submitLogin() {
    const loginBtn = await this.driver.$(locators.loginButton);
    await loginBtn.click();
  }
}

module.exports = LoginPage;
