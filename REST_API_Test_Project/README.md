# REST API Test Project

## Overview

This project contains automated API tests written using **Cucumber.js**, **Chai**, and **Axios** to validate the behavior of a RESTful API. The tests cover creating, updating, and deleting objects via HTTP requests.

Currently, the tests run against the public API at [`https://api.restful-api.dev`](https://api.restful-api.dev). Due to limitations of this public API, **update (PUT/PATCH) operations on existing objects return HTTP 405 (Method Not Allowed)**. 

## Features Tested

- Creating objects via `POST /objects`
- Deleting objects via `DELETE /objects/:id`
- Attempting updates via `PUT /objects/:id` (currently not supported by the target API 405)
- Validation of HTTP response codes and response bodies

## Project Structure

- `features/` — Cucumber feature files defining test scenarios in Gherkin syntax.
- `steps/` — Step definitions implementing the test steps.
- `utils/apiUtil.js` — Utility module for making HTTP requests using Axios.
- `testData/` — JSON payload files for creating and updating objects.
- `package.json` — Project dependencies and scripts.

## Prerequisites

- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)

## Setup

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd rest-api-test

## Run tests by tag 

npm run test:smoke


## Run Tests Directly with Cucumber CLI
npx cucumber-js --require steps/**/*.js --tags @SmokeTest


## Run All Tests
npm test

