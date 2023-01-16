module.exports = {
  src_folders: ["tests/e2e"],
  page_objects_path: ["tests/page-objects"],
  globals_path: "./globals.js",

  webdriver: {
    start_process: true,
    server_path: "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
    port: 9515,
  },

  test_settings: {
    default: {
      launch_url: "https://www.saucedemo.com",
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};
