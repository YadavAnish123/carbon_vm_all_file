const { When, Then } = require("@cucumber/cucumber");
var assert = require('chai').assert;
const { By, until } = require("selenium-webdriver");
const loginPageObjects = require('../page_objects/loginPageObjects');
const data = require('../../fixture/userData.json');

When(/^User launch and login to carbon voice ios application through google account$/, async function () {

});

Then(/^Verify user is logged in successfully$/, async function () {
  
});
