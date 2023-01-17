Feature: Purchase

As a user, I want to be able to buy products to use them.

Scenario Outline: Checkout an item in the Cart
    Given the user is at Login page
    And the user enter valid <username> and <password>
    And the user is in the home page
    And the user add item to the cart
    And the item cart indicator is displayed
    And the product is correctly added to the cart
    When the user proceed to checkout
    And fill out checkout information
    And validate the checkout details
    Then the successful order message is displayed

Examples: 
    | username      | password     |
    | standard_user | secret_sauce |
    | problem_user  | secret_sauce |