
Feature: Create New Direct Message

   Background: Create automated test for mobile application login through google account
    When User launch and login to carbon voice android application through google account
    Then Verify user is logged in successfully
   
   Scenario: Create a new direct message
   When User press the create new direct message button
   Then Complete all the steps
   Then Verify that the direct message was created