const header = require("../page-objects/Header");

const elements = {
  finishPurchaseButton: "#finish",
  subtotalLabel: ".summary_subtotal_label",
  taxLabel: ".summary_tax_label",
  totalLabel: ".summary_total_label",
  paymentInfoLabel: ".summary_info_label:nth-child(1)",
  paymentInfoValueLabel: ".summary_value_label:nth-child(2)",
  shippingInfoLabel: ".summary_info_label:nth-child(3)",
  shippingInfoValueLabel: ".summary_value_label:nth-child(4)",
};

const checkoutCommands = {
  verifyCheckoutSecondStepPageTitle: function () {
    return this.expect
      .element(header.elements.pageTitle)
      .text.equals("CHECKOUT: OVERVIEW");
  },
  verifyCheckoutInfo: function () {
    return this.expect
      .element("@paymentInfoLabel")
      .to.be.visible.and.text.equals("Payment Information:")
      .expect.element("@paymentInfoValueLabel")
      .to.be.visible.and.text.equals("SauceCard #31337")
      .expect.element("@shippingInfoLabel")
      .to.be.visible.and.text.equals("Shipping Information:")
      .expect.element("@shippingInfoValueLabel")
      .to.be.visible.and.text.equals("FREE PONY EXPRESS DELIVERY!");
  },
  verifyPaymentSummaryInfo: function () {
    return this.assert
      .textContains("@subtotalLabel", "15.99")
      .assert.textContains("@taxLabel", "1.28")
      .assert.textContains("@totalLabel", "17.27");
  },
  verifyCheckoutSecondStepPageTitle: function () {
    return this.expect
      .element(header.elements.pageTitle)
      .text.equals("CHECKOUT: OVERVIEW");
  },
  navigateToCheckoutComplete: function () {
    return this.expect
      .element("@finishPurchaseButton")
      .to.be.visible.click("@finishPurchaseButton");
  },
};

module.exports = {
  url: function () {
    return `${this.api.launchUrl}/checkout-step-two.html`;
  },
  elements: elements,
  commands: [checkoutCommands],
};
