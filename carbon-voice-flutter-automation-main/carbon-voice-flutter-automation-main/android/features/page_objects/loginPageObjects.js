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
    SkipNotificationsButton: async function () {
        return '//android.view.View[@index="1"]';
    },
    AppAllowNotificationsButton: async function () {
        return '//android.view.View[@content-desc="Yes, Notify Me"]';
    },
    SkipNotificationsLaterButton: async function () {
        return '//android.view.View[@index="7"]';
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
    GooglePasswordField: async function () {
        return '//*[@resource-id="password"]';
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
    NextButtonSplashScreen: async function () {
        return '//android.view.View[@content-desc="Next"]';
    },
    IAgreeButton: async function () {
        return '//android.widget.Button[@text="I agree"]';
    },
    AppleIcon: async function () {
        return '//android.widget.ImageView[@index="9"]';
    },
    AppleIdField: async function () {
        return '//*[@resource-id="account_name_text_field"]';
    },
    ApplePasswordField: async function () {
        return '//*[@resource-id="password_text_field"]';
    },
    AppleSignInIcon: async function () {
        return '//*[@resource-id="sign-in"]';
    },
    SSOButton: async function () {
        return '//android.view.View[@content-desc="SSO"]';
    },
    SSOEmailField: async function () {
        return '//android.widget.EditText[@index="2"]';
    },
    LogInButton: async function () {
        return '//android.view.View[@content-desc="Log In"]';
    },
    oktaText: async function() {
        return "//*[@resource-id='signin-container']";
    },
    SSOPasswordField: async function () {
        return '//android.widget.EditText[@index="4"]';
    },
    SSOSignInButton: async function () {
        return '//*[@resource-id="okta-signin-submit"]';
    },
    SkipButton: async function () {
        return '//android.view.View[@content-desc="Skip"]';
    },
    DoneButton: async function () {
        return '//android.view.View[@content-desc="Done"]';
    },
    Welcomemessage: async function() {
        return '//android.view.View[@content-desc="Esteban, use playlists to catch up quickly."]';
    }, 
    HomeTab: async function() {
        return '//android.view.View[@content-desc="Home Tab 1 of 3"]';
        
    }
};
