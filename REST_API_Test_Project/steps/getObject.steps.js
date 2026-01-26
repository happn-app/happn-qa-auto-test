const { When } = require('@cucumber/cucumber');
const apiUtil = require('../utils/apiUtil');
const common = require('./common.steps');

When('I send a GET request to {string}', async function (endpoint) {
  const res = await apiUtil.get(endpoint);
  common.setResponse(res);
});

When('I send a GET request to {string} with query param ids {string}', async function (endpoint, ids) {
  const url = `${endpoint}?ids=${ids}`;
  const res = await apiUtil.get(url);
  common.setResponse(res);
});

When('I send a GET request to {string} for single object with id {string}', async function (endpoint, objectId) {
  const url = `${endpoint}/${objectId}`;
  try {
    const res = await apiUtil.get(url);
    common.setResponse(res);
  } catch (error) {
    if (error.response) {
      common.setResponse(error.response);
    } else {
      throw error;
    }
  }
});
