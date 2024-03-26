'use strict';

const fs = require('fs');

const fetch = require('node-fetch');
const jq = require('node-jq');
const username = 'mechlintechnolog_RvQfYi';
const accessKey = 'RRVFsUuRfysxxZipmVh1';
const appId = 'Carbon_Android_App_vOJCBDYE';
const auth = Buffer.from(`${username}:${accessKey}`).toString('base64');
const url = `https://api-cloud.browserstack.com/app-automate/recent_apps/${appId}`;
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');
const dateTime = `${day}/${month}/${year}-${hours}:${minutes}:${seconds}`;

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${auth}`
  }
})
  .then(response => response.json())
  .then(json => {
    jq.run('.[0].app_url', json, { input: 'json' })
      .then(appUrl => {

        const yamlContent = `
userName: ${username}
accessKey: ${accessKey}
projectName: Carbon Voice Automation
name: Android Test
buildName: Android Execution ${dateTime}

source: node:appium-sample-sdk:v1.31.2

app: ${appUrl}

platforms:
  - deviceName: Samsung galaxy S23
    osVersion: 13.0
    platformName: android
browserstackLocal: false
debug: true
networkLogs: true
consoleLogs: errors 
interactiveDebugging: true
`
        fs.writeFileSync('browserstack.yml', yamlContent)
      })
      .catch(jqError => {
        console.error('Error in jq.run:', jqError);
      });
  })
  .catch(fetchError => {
    console.error('Error in fetch:', fetchError);
  });
