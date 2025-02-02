const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      //setupNodeEvents(on, config) {
      // implement node event listeners here
      //baseUrl:
      viewportWidth: 1280, 
      viewportHeight: 720,
      defaultCommandTimeout: 6000,
      responseTimeout: 10000,
      retries: 1, 
      video: false,
      //},
  },
});
