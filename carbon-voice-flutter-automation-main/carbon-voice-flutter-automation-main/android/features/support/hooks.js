'use strict';

const { Builder } = require("selenium-webdriver");
const { Before, After } = require("@cucumber/cucumber");

var createBrowserStackSession = function () {
  return new Builder().build();
}

Before(function (scenario, callback) {
  var world = this;
  world.driver = createBrowserStackSession();
  callback();
});

After(function (scenario, callback) {
  this.driver.quit().then(function () {
    callback();
  });
});
