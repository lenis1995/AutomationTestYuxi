module.exports = {
  src_folders: ["tests/e2e/step_definitions"],
  page_objects_path: ["tests/e2e/page-objects"],
  globals_path: "./globals.js",

  webdriver: {
    start_process: true,
    server_path: "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
    port: 9515,
  },

  test_runner: {
    type: "cucumber",
    options: {
      feature_path: "tests/e2e/*/*.feature",
      auto_start_session: true,
    },
  },

  test_settings: {
    default: {
      launch_url: "https://www.saucedemo.com/",
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};
