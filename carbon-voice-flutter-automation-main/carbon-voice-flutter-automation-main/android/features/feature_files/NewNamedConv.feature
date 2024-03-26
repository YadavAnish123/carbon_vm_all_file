
Feature: Create New Named Conversation

   Background: Create automated test for mobile application login through google account
    When User launch and login to carbon voice android application through google account
    Then Verify user is logged in successfully
   
   Scenario: Create a new named conversation
   When User press the create new named conversation button
   Then complete all the steps
   Then Verify that the conversation was created