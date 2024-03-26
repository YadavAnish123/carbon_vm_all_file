const { Given, Then } = require('cucumber');
const assert = require('assert');
const { Builder, By } = require('browserstack-webdriver');

Given('I am on the BrowserStack homepage', async function () {
  this.driver = await new Builder()
    .usingServer('YOUR_BROWSERSTACK_URL') // Replace with your BrowserStack URL
    .withCapabilities({
      'browserstack.user': 'anishkumar_rUSVk3',
      'browserstack.key': 'rsRvs8VKxZsQV4qUrfKt',
      browserName: 'chrome',
      browserVersion: 'latest',
      os: 'Windows',
      os_version: '10',
      resolution: '1920x1080',
    })
    .build();

  await this.driver.get('https://www.browserstack.com/');
});

Then('I should see the title {string}', async function (expectedTitle) {
  const actualTitle = await this.driver.getTitle();
  assert.strictEqual(actualTitle, expectedTitle);
  await this.driver.quit();
});
