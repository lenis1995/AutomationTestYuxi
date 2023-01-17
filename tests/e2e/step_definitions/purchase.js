const { Then, When } = require("@cucumber/cucumber");

When(/^the user proceed to checkout$/, () => {
  const cartPage = browser.page.Cart();
  return cartPage.proceedToCheckout();
});

When(/^fill out checkout information$/, () => {
  const checkoutPage = browser.page.CheckoutFirstStep();
  return checkoutPage
    .verifyCheckoutFirstStepPageTitle()
    .fillCheckoutForm("lenis", "alejo", "05147");
});

When(/^validate the checkout details$/, () => {
  const checkoutPage = browser.page.CheckoutSecondStep();
  return checkoutPage
    .verifyCheckoutSecondStepPageTitle()
    .verifyCheckoutInfo()
    .verifyPaymentSummaryInfo()
    .navigateToCheckoutComplete();
});

Then(/^the successful order message is displayed$/, () => {
  const checkoutPage = browser.page.CheckoutComplete();
  return checkoutPage
    .verifyCheckoutCompletedPageTitle()
    .verifySuccessfulOrder();
});
