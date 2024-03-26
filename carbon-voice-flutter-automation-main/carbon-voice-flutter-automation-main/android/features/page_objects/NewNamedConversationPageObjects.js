'use strict';

//This is used to store the locators for app elements
module.exports = {

    PlayListButton: async function () {
        return '//android.view.View[@index="4"]';
    },
    PlusButton: async function () {
        return '//android.view.View[@content-desc="add-button"]';  
    },
    NewConversationButton: async function () {
        return '//android.view.View[@content-desc="New Conversation\nCreate either Named or Direct conversation."]';
    },
    NewNamedConversationButton: async function () {
        return '//android.view.View[@content-desc="Named Conversation\nOrganize around a topic. Add/remove people."]';
    },
    ChooseSpaceContinueButton: async function () {
        return '//android.view.View[@content-desc="Continue"]';
    },
    NewNamedConversationNameTextField: async function () {
        return '//android.widget.EditText[@index="2"]';
    },
    NewNamedNameContinueButton: async function () {
        return '//android.view.View[@content-desc="Continue"]';
    },
    NewNamedNameCreateButton: async function () {
        return '//android.view.View[@content-desc="Create New Conversation"]';
    },
    VerifyNewNamedNameCreated: async function () {
        return '//android.view.View[@content-desc="Welcome Esteban,\nstart a discussion by tapping the mic."]';
    }
};
