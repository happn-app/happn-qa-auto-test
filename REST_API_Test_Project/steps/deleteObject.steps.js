const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const apiUtil = require('../utils/apiUtil');
const common = require('./common.steps');

When('I send a DELETE request to {string}', async function (endpoint) {
  const res = await apiUtil.delete(endpoint);
  common.setResponse(res);
});

Then('the response body should contain message {string}', function (expectedMessage) {
  const res = common.getResponse();
  expect(res.data).to.have.property('message', expectedMessage);
});
