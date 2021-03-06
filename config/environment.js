/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-weekend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'connect-src': "'self' 'https://cors-anywhere.herokuapp.com",
    },

    fastboot: {
      hostWhitelist: ['emberweekend.com', 'ember-weekend.herokuapp.com', /^localhost:\d+$/]
    }
  };

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = { enabled: false };
    ENV.apiHost = 'http://localhost:4000';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiHost = 'https://ember-weekend-api.herokuapp.com';
  }

  return ENV;
};
