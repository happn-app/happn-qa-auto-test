const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const apiUtil = require('../utils/apiUtil');
const common = require('./common.steps'); 

Given('I have a valid create object payload with name {string}', function (name) {
  this.payload = apiUtil.getCreateObjectBody();
  this.payload.name = name;
});

When('I send a POST request to {string} with the payload', async function (endpoint) {
  const res = await apiUtil.post(endpoint, this.payload);
  common.setResponse(res);
});

Then('the response body should contain the object name {string}', function (expectedName) {
  const res = common.getResponse();

  //to debug 
  console.log('Response body:', JSON.stringify(res.data, null, 2)); // pretty print JSON
  
  expect(res.data, 'Response body is empty or undefined').to.exist;
  
  expect(res.data).to.have.property('name', expectedName, 
    `Expected response body to contain object name "${expectedName}", but got "${res.data.name}"`);
});
