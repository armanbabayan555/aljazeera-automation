const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/features/*.feature',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.aljazeera.com/',
      browser: 'chrome',
      windowSize: 'maximize',
      smartWait: 5000,
    }
  },
  include: {
    MostPopularPage: './tests/pages/MostPopularPage.js',
  },
  plugins: {
    allure: { enabled: true },

    gherkin: {
      features: './tests/features/*.feature',
      steps:    './tests/step_definitions/*.js'
    }
  },
  name: 'aljazeera-automation',
}
