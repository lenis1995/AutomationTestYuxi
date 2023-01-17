const header = require("../page-objects/Header");

const elements = {
  shirtAddToCartButton: {
    selector: "(//div[@class='pricebar']//button)[3]",
    locateStrategy: "xpath",
  },
};

const homeCommands = {
  verifyHomePageTitle: function () {
    return this.expect
      .element(header.elements.pageTitle)
      .text.equals("PRODUCTS");
  },
  verifyHomeUrl: function () {
    return this.assert.urlContains("inventory");
  },
  addItemToCart: function () {
    return this.click("@shirtAddToCartButton");
  },
};

module.exports = {
  url: function () {
    return `${this.api.launchUrl}/inventory.html`;
  },
  elements: elements,
  commands: [homeCommands],
};
