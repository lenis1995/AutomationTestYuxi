Feature: Add to cart

As a user, I want to be able to add products to the cart to buy them.

Background: Attempt to login into website with valid credentials
    Given the user is at Login page
    When the user enter valid credentials
    Then the user is in the home page

Scenario: Add a product to the cart
    When the user add item to the cart
    Then the item cart indicator is displayed
    And the product is correctly added to the cart

Scenario: Remove an item from the cart
    Given the user add item to the cart
    And the item cart indicator is displayed
    And the product is correctly added to the cart
    When the user remove item from the cart
    Then the item cart indicator is not displayed
    And the product is correctly removed from the cart
