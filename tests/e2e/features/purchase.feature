Feature: Purchase

As a user, I want to be able to buy products to use them.

Background: Attempt to login into website with valid credentials
    Given the user is at Login page
    When the user enter valid credentials
    Then the user is in the home page

Scenario: Checkout an item in the Cart
    Given the user add item to the cart
    And the item cart indicator is displayed
    And the product is correctly added to the cart
    When the user proceed to checkout
    And fill out checkout information
    And validate the checkout details
    Then the successful order message is displayed
