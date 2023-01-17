const header = require("../page-objects/Header");

const elements = {
  firstName: "#first-name",
  lastName: "#last-name",
  postalCode: "#postal-code",
  submitButton: "#continue",
  cancel: "#cancel",
};

const checkoutCommands = {
  fillCheckoutForm: function (firstName, lastName, postalCode) {
    return this.expect
      .element("@firstName")
      .to.be.visible.expect.element("@lastName")
      .to.be.visible.expect.element("@postalCode")
      .to.be.visible.setValue("@firstName", firstName)
      .setValue("@lastName", lastName)
      .setValue("@postalCode", postalCode)
      .click("@submitButton");
  },
  verifyCheckoutFirstStepPageTitle: function () {
    return this.expect
      .element(header.elements.pageTitle)
      .text.equals("CHECKOUT: YOUR INFORMATION");
  },
};

module.exports = {
  url: function () {
    return `${this.api.launchUrl}/checkout-step-one.html`;
  },
  elements: elements,
  commands: [checkoutCommands],
};
