/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'muscle',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    firebase: {
      // apiKey: 'AIzaSyClEU0LZZhbZG_A5ZpPnvdVlywSLCM0wa8',
      // authDomain: 'muscle-d6e33.firebaseapp.com',
      // databaseURL: 'https://muscle-d6e33.firebaseio.com',
      // storageBucket: 'muscle-d6e33.appspot.com'
      apiKey: "AIzaSyD7kJLbvj0McLwRztqNhAXaittAC9tJ9F0",
      authDomain: "muscle-36f5b.firebaseapp.com",
      databaseURL: "https://muscle-36f5b.firebaseio.com",
      projectId: "muscle-36f5b",
      storageBucket: "muscle-36f5b.appspot.com"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
