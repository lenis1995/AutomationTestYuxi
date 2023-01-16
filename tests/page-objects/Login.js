const elements = {
  username: "#user-name",
  password: "#password",
  submitButton: "#login-button",
};

const loginCommands = {
  fillOutLoginForm: function (username, password) {
    return this.waitForElementVisible("@username")
      .waitForElementVisible("@password")
      .setValue("@username", username)
      .setValue("@password", password)
      .click("@submitButton");
  },
};

module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  elements: elements,
  commands: [loginCommands],
};
