const { When, Then } = require("@cucumber/cucumber");
var assert = require('chai').assert;
const { By, until } = require("selenium-webdriver");
const NewNamedConversationPageObjects = require('../page_objects/NewNamedConversationPageObjects');
const data = require('../../fixture/userData.json');

When(/^User press the create new named conversation button$/, async function () {
  await this.driver.wait(until.elementLocated(By.xpath(NewNamedConversationPageObjects.PlusButton())),15000).click();
  await this.driver.sleep(3000);
  await this.driver.wait(until.elementLocated(By.xpath(NewNamedConversationPageObjects.NewConversationButton())),15000).click();
  await this.driver.sleep(3000);
  await this.driver.wait(until.elementLocated(By.xpath(NewNamedConversationPageObjects.NewNamedConversationButton())),15000).click();
  await this.driver.sleep(3000);
});

Then(/^complete all the steps$/, async function () {
  await this.driver.wait(until.elementLocated(By.xpath(NewNamedConversationPageObjects.ChooseSpaceContinueButton())),15000).click();
  await this.driver.wait(until.elementLocated(By.xpath(NewNamedConversationPageObjects.NewNamedConversationNameTextField())),15000).sendKeys(data.NameConversationName);
  await this.driver.wait(until.elementLocated(By.xpath(NewNamedConversationPageObjects.NewNamedNameContinueButton())),15000).click();
  await this.driver.wait(until.elementLocated(By.xpath(NewNamedConversationPageObjects.NewNamedNameCreateButton())),15000).click();
  await this.driver.sleep(3000);
});

Then(/^Verify that the conversation was created$/, async function () {
  const el = await this.driver.wait(until.elementLocated(By.xpath(NewNamedConversationPageObjects.VerifyNewNamedNameCreated())), 60000);
  assert.exists(el);
  await this.driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "New Named Conversation Pass"}}');
});
