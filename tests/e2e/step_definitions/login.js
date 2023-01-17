const { Given, Then, When } = require("@cucumber/cucumber");

Given(/^the user is at Login page$/, () => {
  const loginPage = browser.page.Login();
  return loginPage.navigate().maximizeWindow();
});

When(/^the user enter valid credentials$/, () => {
  const loginPage = browser.page.Login();
  return loginPage.fillOutLoginForm("standard_user", "secret_sauce");
});

When(/^the user opens navigation menu$/, () => {
  const headerSection = browser.page.Header();
  return headerSection.openNavigationMenu();
});

When(/^the user select the logout option$/, () => {
  const headerSection = browser.page.Header();
  return headerSection.clickLogout();
});

Then(/^the user is in the home page$/, () => {
  const homePage = browser.page.Home();
  return homePage.verifyHomePageTitle().verifyHomeUrl();
});

Then(/^the user is in the login page$/, () => {
  const loginPage = browser.page.Login();
  return loginPage.verifyLoginUrl().verifyLoginLogoIsVisible();
});
