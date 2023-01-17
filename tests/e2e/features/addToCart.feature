Feature: Add to cart

As a user, I want to be able to add products to the cart to buy them.

Scenario Outline: Add a product to the cart
    Given the user is at Login page
    And the user enter valid <username> and <password>
    When the user is in the home page
    And the user add item to the cart
    Then the item cart indicator is displayed
    And the product is correctly added to the cart

Examples: 
    | username      | password     |
    | standard_user | secret_sauce |
    | problem_user  | secret_sauce |

Scenario Outline: Remove an item from the cart
    Given the user is at Login page
    And the user enter valid <username> and <password>
    And the user is in the home page
    And the user add item to the cart
    And the item cart indicator is displayed
    And the product is correctly added to the cart
    When the user remove item from the cart
    Then the item cart indicator is not displayed
    And the product is correctly removed from the cart

Examples: 
    | username      | password     |
    | standard_user | secret_sauce |
    | problem_user  | secret_sauce |