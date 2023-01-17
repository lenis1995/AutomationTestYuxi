Feature: Login

As a user, I want to be able to login to my account to start purchasing products.

Scenario Outline: Attempt to login into website with valid credentials
    Given the user is at Login page
    When the user enter valid <username> and <password>
    Then the user is in the home page

Examples: 
    | username      | password     |
    | standard_user | secret_sauce |
    | problem_user  | secret_sauce |

Scenario Outline: Logout from the website
    Given the user is at Login page
    And the user enter valid <username> and <password>
    When the user is in the home page
    And the user opens navigation menu
    And the user select the logout option
    Then the user is in the login page

Examples: 
    | username      | password     |
    | standard_user | secret_sauce |
    | problem_user  | secret_sauce |