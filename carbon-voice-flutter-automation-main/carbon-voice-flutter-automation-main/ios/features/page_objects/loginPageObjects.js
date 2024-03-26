'use strict';

//This is used to store the locators for app elements
module.exports = {
    AllowNotificationButton: async function () {
        return '//*[@text="Allow"]';
    },
    ContinueWithGoogleButton: async function () {
        return '//android.widget.ImageView[@content-desc="Continue with Google"]';
    },
    PhoneButton: async function () {
        return '//android.view.View[@index="8"]';
    },
    PhoneNumberField: async function () {
        return '//android.widget.EditText';
    },
    GetVerificationCodeButton: async function () {
        return '//android.view.View[@index="4"]';
    },
    ConfirmNumberText: async function (number) {
        return `//android.view.View[@content-desc="Confirm ${number}"]`;
    },
    NotificationBar: async function () {
        return '//*[@resource-id="android:id/content"]';
    },
    MessageBodyText: async function () {
        return '//*[@resource-id="android:id/message_text"]';
    },
    CompleteYourProfileHeader: async function () {
        return '//android.view.View[@content-desc="Complete your profile"]';
    },
    FirstNameField: async function () {
        return '//android.widget.EditText[@index="2"]';
    },
    LastNameField: async function () {
        return '//android.widget.EditText[@index="3"]';
    },
    ContinueButton: async function () {
        return '//android.view.View[@content-desc="Continue"]';
    },
    InviteCodeField: async function () {
        return '//android.widget.EditText[@index="5"]';
    },
    VerifyUserLoggedIn: async function () {
        return '//android.view.View[@content-desc="Are your contacts on Carbon Voice?"]';
    },
    Webview: async function () {
        return '(//android.webkit.WebView)[1]';
    },
    EmailField: async function () {
        return '//android.widget.TextView[@index="2"]';
    },
    NextButton: async function () {
        return '//android.widget.Button[@text="Next"]';
    },
    IAgreeButton: async function () {
        return '//android.widget.Button[@text="I agree"]';
    }
};
