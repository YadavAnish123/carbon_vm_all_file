const { When, Then } = require("@cucumber/cucumber");
var assert = require('chai').assert;
const { By, until } = require("selenium-webdriver");
const NewDirectMessagePageObjects = require('../page_objects/NewDirectMessagePageObjects');
const data = require('../../fixture/userData.json');

When(/^User press the create new direct message button$/, async function () {
  await this.driver.wait(until.elementLocated(By.xpath(NewDirectMessagePageObjects.PlusButton())),15000).click();
  await this.driver.sleep(3000);
  await this.driver.wait(until.elementLocated(By.xpath(NewDirectMessagePageObjects.NewConversationButton())),15000).click();
  await this.driver.sleep(3000);
  await this.driver.wait(until.elementLocated(By.xpath(NewDirectMessagePageObjects.NewDirectMessageButton())),15000).click();
  await this.driver.sleep(3000);
});

Then(/^Complete all the steps$/, async function () {
  await this.driver.wait(until.elementLocated(By.xpath(NewDirectMessagePageObjects.SelectContactButton())),15000).click();
  await this.driver.wait(until.elementLocated(By.xpath(NewDirectMessagePageObjects.DoneButton())),15000).click();
  await this.driver.wait(until.elementLocated(By.xpath(NewDirectMessagePageObjects.DirectMessageCreateButton())),15000).click();
  await this.driver.sleep(3000);
});

Then(/^Verify that the direct message was created$/, async function () {
  const el = await this.driver.wait(until.elementLocated(By.xpath(NewDirectMessagePageObjects.VerifyNewNamedNameCreated())),60000);
  assert.exists(el);
  await this.driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "New Direct Message Pass"}}');
});
