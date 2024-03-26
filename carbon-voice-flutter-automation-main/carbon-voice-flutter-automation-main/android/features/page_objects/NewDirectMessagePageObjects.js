'use strict';

//This is used to store the locators for app elements
module.exports = {

    PlusButton: async function () {
        return '//android.view.View[@content-desc="add-button"]';  
    },
    NewConversationButton: async function () {
        return '//android.view.View[@content-desc="New Conversation\nCreate either Named or Direct conversation."]';
    },
    NewDirectMessageButton: async function () {
        return '//android.view.View[@content-desc="Direct Message\nPrivate Conversations with a fixed set of people."]';
    },
    SelectContactButton: async function () {
        return '//android.widget.ImageView[@content-desc="E\nEsteban Salvatierra"]';
    },
    DoneButton: async function () {
        return '//android.view.View[@content-desc="Done"]';
    },
    DirectMessageCreateButton: async function () {
        return '//android.view.View[@content-desc="Create New Conversation"]';
    },
    VerifyNewNamedNameCreated: async function () {
        return '//android.view.View[@content-desc="Esteban Salvatierra\nPersonal  •  2 members"]';
    }
};
