const axios = require('axios');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://api.restful-api.dev';

async function get(endpoint) {
  return await axios.get(BASE_URL + endpoint);
}

async function post(endpoint, data) {
  return await axios.post(BASE_URL + endpoint, data);
}

function getCreateObjectBody() {
  const filePath = path.join(__dirname, '../testData/createObject.json');
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

function getUpdateObjectBody() {
  const filePath = path.join(__dirname, '../testData/updateObject.json');
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

async function put(endpoint, data) {
  return await axios.put(BASE_URL + endpoint, data);
}

async function patch(endpoint, data) {
  return await axios.patch(BASE_URL + endpoint, data);
}

async function del(endpoint) {
  return await axios.delete(BASE_URL + endpoint);
}

module.exports = {
  get,
  post,
  put,  
  patch, 
  delete: del ,
  getCreateObjectBody,
  getUpdateObjectBody
};


