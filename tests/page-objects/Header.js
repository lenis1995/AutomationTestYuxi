const elements = {
  pageTitle: ".title",
  hamburgerButton: "#react-burger-menu-btn",
  cartButton: "#shopping_cart_container .shopping_cart_link",
  itemsBadge: ".shopping_cart_badge",
  logoutButton: "#logout_sidebar_link",
};

const headerCommands = {
  verifyItemAddedToCart: function () {
    return this.expect
      .element("@itemsBadge")
      .to.be.visible.and.text.equals("1");
  },
  verifyItemRemovedFromCart: function () {
    return this.expect.element("@itemsBadge").to.not.be.present;
  },
  logout: function () {
    return this.expect
      .element("@hamburgerButton")
      .to.be.visible.click("@hamburgerButton")
      .expect.element("@logoutButton")
      .to.be.visible.click("@logoutButton");
  },
  navigateToCartPage: function () {
    return this.expect
      .element("@cartButton")
      .to.be.visible.click("@cartButton");
  },
};

module.exports = {
  elements: elements,
  commands: [headerCommands],
};
