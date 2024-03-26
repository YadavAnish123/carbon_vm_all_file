const { describe, it } = require('node:test');
let webdriver=require('selenium-webdriver');
let driver;
describe("CorssBrowsertesting Suite 1", async function(){
    it('Google Test 1',async function(){
        await driver.get('https://google.com');
        console.log("title of the website is"+await driver.getTitle());
    })

    it('Google Test 1',async function(){
        await driver.get('https://www.bing.com');
        console.log("title of the website is"+await driver.getTitle());
    })

    it('Google Test 1',async function(){
        await driver.get('https://www.yahoo.com');
        console.log("title of the website is"+await driver.getTitle());
    })
})