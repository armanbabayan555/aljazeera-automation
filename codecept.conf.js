const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.aljazeera.com',
      smartWait: 5000,
      browser: "chrome",
      browserVersion: '137.0.7151.41',
      keepBrowserState: true,
      keepCookies: true,
      restart: true,
      windowSize: "maximize",
      timeouts: {
        "script": 60000,
        "page load": 10000
      }
    }
  },
  include: {
    MostPopularPage: './tests/pages/MostPopularPage.js',
    LivePage: './tests/pages/LivePage.js'
  },
  gherkin: {
    features: ["./tests/features/web/*.feature", "./tests/features/mobile/*.feature"],
    steps: ['./tests/step_definitions/web/most_popular_steps.js', "./tests/step_definitions/mobile/most_popular_steps.js", "./tests/step_definitions/web/live_steps.js"],
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
  },
  name: 'aljazeera-automation',
};