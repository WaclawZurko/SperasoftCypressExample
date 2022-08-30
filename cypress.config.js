const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  viewportWidth: 1600,
  viewportHeight: 900,
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'https://sperasoft.com/',
  },
})
