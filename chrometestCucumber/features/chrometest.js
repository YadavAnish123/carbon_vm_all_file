const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


let driver;
Given('the Chrome browser is installed', async function () {
  // You can add any setup steps here, or assume Chrome is already installed.
});


When('I open the Chrome browser', async function () {
  // Set up Chrome options if needed
  const chromeOptions = new chrome.Options();

  // Create a new WebDriver instance
  driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

  // Navigate to a website or perform other actions if needed
  driver.get('https://google.com');
});

Then('the Chrome browser should be launched successfully', async function () {
  // You can add verification steps here, such as checking the browser title or URL
  const title = await driver.getTitle();
  console.log('Opened Chrome browser with title:', title);
  // Close the browser after verification
});
