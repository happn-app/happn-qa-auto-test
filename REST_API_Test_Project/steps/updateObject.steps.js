const { Given, When } = require('@cucumber/cucumber');
const apiUtil = require('../utils/apiUtil');
const common = require('./common.steps');

Given('I have a valid update object payload with name {string} and price {float}', function (name, price) {
  this.payload = apiUtil.getUpdateObjectBody();

  this.payload.name = name;

  if (this.payload.data) {
    this.payload.data.price = price;
  } else {
    this.payload.data = { price: price };
  }
});

When('I send a PUT request to {string} with the payload', async function (endpoint) {
  try {
    const res = await apiUtil.patch(endpoint, this.payload);
    common.setResponse(res);
  } catch (error) {
    common.setResponse(error.response || error);
  }
});



