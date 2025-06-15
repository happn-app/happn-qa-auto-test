import { Given, When } from '@cucumber/cucumber';
import { LoginPage, loginPage } from '../pages/LoginPage.ts';

const loginPage = new LoginPage();
Given('je clique sur le menu "Login"', async function () {
  console.log('STEP: je clique sur le menu "Login"');
  await loginPage.visitLogin();
});

When('I enter my credentials', async function (dataTable) {
  const credentials = dataTable.hashes()[0];
  await loginPage.login(credentials['email'], credentials['password']);
});

When('I submit the popup', async function () {
  await loginPage.submitPopup();
}); 