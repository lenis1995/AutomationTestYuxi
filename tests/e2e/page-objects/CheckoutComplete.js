const header = require("../page-objects/Header");

const elements = {
  successfulOrderHeader: ".complete-header",
  successfulOrderDescription: ".complete-text",
  backHomeButton: "button[name='back-to-products']",
};

const checkoutCompleteCommands = {
  verifyCheckoutCompletedPageTitle: function () {
    return this.expect
      .element(header.elements.pageTitle)
      .text.equals("CHECKOUT: COMPLETE!");
  },
  navigateBackToHome: function () {
    return this.expect
      .element("@backHomeButton")
      .to.be.visible.click("@backHomeButton");
  },
  verifySuccessfulOrder: function () {
    return this.expect
      .element("@successfulOrderHeader")
      .to.be.visible.and.text.equals("THANK YOU FOR YOUR ORDER")
      .expect.element("@successfulOrderDescription")
      .to.be.visible.and.text.equals(
        "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
      );
  },
};

module.exports = {
  url: function () {
    return `${this.api.launchUrl}/checkout-complete.html`;
  },
  elements: elements,
  commands: [checkoutCompleteCommands],
};
