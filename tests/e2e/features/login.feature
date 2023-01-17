Feature: Login

As a user, I want to be able to login to my account to start purchasing products.

Background: Login with valid credentials 
    Given the user is at Login page
    When the user enter valid credentials

Scenario: Attempt to login into website with valid credentials
    Then the user is in the home page

Scenario: Logout from the website
    Given the user is in the home page
    When the user opens navigation menu
    And the user select the logout option
    Then the user is in the login page
