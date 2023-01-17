const elements = {
  username: "#user-name",
  password: "#password",
  submitButton: "#login-button",
  logo: ".login_logo",
};

const loginCommands = {
  fillOutLoginForm: function (username, password) {
    return this.expect
      .element("@username")
      .to.be.visible.setValue("@username", username)
      .expect.element("@password")
      .to.be.visible.setValue("@password", password)
      .click("@submitButton");
  },
  verifyLoginUrl: function () {
    return this.expect.url().equals(this.api.launchUrl);
  },
  verifyLoginLogoIsVisible: function () {
    return this.expect.element("@logo").to.be.visible;
  },
};

module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  elements: elements,
  commands: [loginCommands],
};
