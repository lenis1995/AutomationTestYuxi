const header = require("../page-objects/Header");

const elements = {
  itemName: ".inventory_item_name",
  itemDescription: ".inventory_item_desc",
  itemPrice: ".inventory_item_price",
  itemQuantity: ".cart_quantity",
  removeItemButton: ".item_pricebar button",
  checkoutButton: "#checkout",
  cartItemContainer: ".cart_item",
};

const cartCommands = {
  verifyCartPageTitle: function () {
    return this.expect
      .element(header.elements.pageTitle)
      .text.equals("YOUR CART");
  },
  verifyCartUrl: function () {
    return this.assert.urlContains("cart");
  },
  verifyItemAddedToCart: function () {
    return this.expect
      .element("@itemName")
      .to.be.visible.expect.element("@itemDescription")
      .to.be.visible.expect.element("@itemPrice")
      .to.be.visible.and.text.contains("15.99")
      .expect.element("@itemQuantity")
      .to.be.visible.and.text.equals("1");
  },
  verifyItemRemovedFromCart: function () {
    return this.expect.element("@cartItemContainer").to.not.be.present;
  },
  proceedToCheckout: function () {
    return this.expect
      .element("@checkoutButton")
      .to.be.visible.click("@checkoutButton");
  },
  removeItemFromCart: function () {
    return this.expect
      .element("@removeItemButton")
      .to.be.visible.click("@removeItemButton");
  },
};

module.exports = {
  url: function () {
    return `${this.api.launchUrl}/cart.html`;
  },
  elements: elements,
  commands: [cartCommands],
};
