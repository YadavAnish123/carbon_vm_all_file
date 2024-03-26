const { When, Then } = require("@cucumber/cucumber");
var assert = require('chai').assert;
const { By, until } = require("selenium-webdriver");
const loginPageObjects = require('../page_objects/loginPageObjects');
const data = require('../../fixture/userData.json');
const timeout = 180000;

When(/^User launch and login to carbon voice android application through google account$/, async function () {
  try {
    await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.AllowNotificationButton())), 90000).click();
  }
  catch { }
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.ContinueWithGoogleButton())), timeout).click();
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.Webview())), timeout).click();
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.EmailField())), timeout).click();
  await this.driver.actions().sendKeys(data.googleEmailauto).perform();
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.NextButton())), timeout).click();
  //await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.NextButton())), timeout).click();
  await this.driver.sleep(7000);
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.GooglePasswordField())),15000).click();
  await this.driver.actions().sendKeys(data.googlePasswordauto).perform();
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.NextButton())), timeout).click();
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.IAgreeButton())), timeout).click();
  try {
    //await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SkipButton())), 15000);
   // await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SkipButton())), 15000).click();
   try{
    await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SkipButton())), 15000).click();
   }
   catch { }
   try{
    await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SkipButton())), 15000).click();
   }
   catch { }
   try{
    await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.NextButtonSplashScreen())), 15000).click();
   }
   catch { }
   try{
    await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SkipButton())), 15000).click();
   }
   catch { }
   // await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.DoneButton())), 15000).click();
  }
  catch { }
});

When(/^User launch and login to carbon voice android application through apple credentials$/, async function () {
  try {
    await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.AllowNotificationButton())), 90000).click();
  }
  catch { }
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.AppleIcon())), timeout).click();
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.AppleIdField())), timeout).click();
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.AppleIdField())), timeout).sendKeys(data.appleId);
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.AppleSignInIcon())), timeout).click();
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.ApplePasswordField())), timeout).click();
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.ApplePasswordField())), timeout).sendKeys(data.applePassword);
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.AppleSignInIcon())), timeout).click();
});

When(/^User launch and login to carbon voice android application through SSO$/, async function () {
  try {
    await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.AllowNotificationButton())), 90000).click();
  }
  catch { }
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SSOButton())), timeout).click();
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SSOEmailField())), timeout).click();
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SSOEmailField())), timeout).sendKeys(data.ssoEmail);
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.LogInButton())), timeout).click();
  try {
    //await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SSOPasswordField())), timeout);
    await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SSOPasswordField())), 15000).click();
    await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SSOPasswordField())), 15000).sendKeys(data.ssoPassword);
    await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SSOSignInButton())), timeout).click();
    try {
      try{ await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SkipButton())), 15000).click();
      }
      catch{ }
      try{ await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SkipButton())), 15000).click();
      }
      catch{ }
      try{ await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.NextButtonSplashScreen())), 15000).click();
      }
      catch{ }
      try{ await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.SkipButton())), 15000).click();
      }
      catch{ }
      //await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.DoneButton())), 15000).click();
    }
    catch { }
  }
  catch {
    assert.fail("Okta page didn't loaded successfully");
  }
});

Then(/^Verify user is logged in successfully$/, async function () {
  const el = await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.Welcomemessage())), timeout);
  assert.exists(el);
  await this.driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Login successfull"}}');
});