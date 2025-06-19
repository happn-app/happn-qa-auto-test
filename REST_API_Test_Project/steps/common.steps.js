
const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

let response;

function setResponse(res) {
  response = res;
}

function getResponse() {
  return response;
}

// Step to check HTTP status code
Then('the response status code should be {int}', function (expectedStatus) {
  expect(response).to.not.be.undefined;
  expect(response.status).to.equal(expectedStatus);
});

// Step to check non-empty list in response body
Then('the response should contain a non-empty list', function () {
  expect(response).to.not.be.undefined;
  expect(response.data).to.be.an('array', 'Response data is not an array');
  expect(response.data.length, 'Response list is empty').to.be.greaterThan(0);
});

// Step to check object with specific id in response body
Then('the response should contain the object with id {string}', function (expectedId) {
  expect(response).to.not.be.undefined;
  if (response.status === 404) {
    throw new Error(`Object with id ${expectedId} not found (404)`);
  }
  expect(response.status).to.equal(200);
  expect(response.data).to.be.an('object');
  expect(response.data.id.toString()).to.equal(expectedId);
});

// Step to check object with specific name in response body
Then('the response should contain the object with name {string}', function (expectedName) {
  expect(response).to.not.be.undefined;
  expect(response.data).to.have.property('name', expectedName);
});

module.exports = {
  setResponse,
  getResponse,
};
