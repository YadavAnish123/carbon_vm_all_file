# node-appium-app-browserstack

This repository demonstrates how to run Appium NodeJS tests on BrowserStack App Automate.

### Requirements

1. Node.js

    - If not installed, install Node.js from [here](https://nodejs.org/en/download/)

    - Ensure you have node & npm installed by running `node -v` & `npm -v`

### Install the dependencies


To install the dependencies run the following command in the project's base directory :


- Open `Android` or in `ios` folder

 Change the folder by using `cd android` or `cd ios`  and then Run the command `npm install`

 It start downloading all of the dependencies which are required to run appium selenium and browserstack 

User can view all new dependencies under `package-lock.json` file for newly added dependencies.

### Folder structure and usage
 

 In the android/ios folder one can see the `features` folder and there are subchild folders are added under the same: 

 1. Page_objects
 2. Step_definitions
 3. support
 4. utils

1. in page_object foder one can see the xpath locators are exported in `module.export` and this class will be used by passing file in the `stepdefinition` folder classes. 

2. in `step definition` user can see the files where steps are defined. each function is passed using BDD framework in `When` `And` and `Then` clause using gherkin language. 

3. in support one can pass custom hooks and .env file which is used to specify different environments are used while running application on different environment.


### Run your first test :


1. Open `Android` or in `ios` folder in terminal by using command `cd android` for android run and `cd ios ` for ios app run

2. Run command `npm run login-test`

This command is passed in the `package.json` file  in the `debug`script section under folder structure "../android/pacakge.json" and one can pass the key and value pair and specify the file in this format 

For Example

`"sample-test": "browserstack-node-sdk cucumber-js features/favorites.feature",`

3. After running the command it will show progress in terminal and it start uploading the app in the `upload app` under BrowserStack App automate Dashboard. 

4. User can access the runtime, test execution results, and debugging information such as video recording, network logs on [App Automate dashboard](https://app-automate.browserstack.com/dashboard)

---

### Run your all testcases at once

1. To run all testcases at once, user need to open the terminal. 

2. User need to Run command `npm run test`

This command is passed in the `package.json` file  in the `debug`script section and one can pass the key and value pair and specify the file in this format `"test": "browserstack-node-sdk cucumber-js features/*.feature",

- This command will start running all test cases for Android and IOS at once. Once All test cases are finished, then it will provide result summary for all testcases.
`
- You can access the test execution results, and debugging information such as video recording, network logs on [App Automate dashboard](https://app-automate.browserstack.com/dashboard)
