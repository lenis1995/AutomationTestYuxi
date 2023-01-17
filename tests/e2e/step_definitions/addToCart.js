const { Then, When } = require("@cucumber/cucumber");

When(/^the user add item to the cart$/, () => {
  const homePage = browser.page.Home();
  return homePage.addItemToCart();
});

When(/^the user remove item from the cart$/, () => {
  const cartPage = browser.page.Cart();
  return cartPage.removeItemFromCart();
});

Then(/^the item cart indicator is displayed$/, () => {
  const headerSection = browser.page.Header();
  return headerSection.verifyItemAddedToCart();
});

Then(/^the product is correctly added to the cart$/, () => {
  const headerSection = browser.page.Header();
  const cartPage = browser.page.Cart();
  headerSection.navigateToCartPage();
  return cartPage.verifyCartUrl().verifyCartPageTitle().verifyItemAddedToCart();
});

Then(/^the item cart indicator is not displayed$/, () => {
  const headerSection = browser.page.Header();
  return headerSection.verifyItemRemovedFromCart();
});

Then(/^the product is correctly removed from the cart$/, () => {
  const cartPage = browser.page.Cart();
  return cartPage.verifyItemRemovedFromCart();
});
