'use strict';

exports.config = {
  specs: [
    'test-wdio/*/*.js',
  ],

  maxInstances: 2,

  capabilities: [{
    browserName: 'firefox',
  }],

  sync: true,

  logLevel: 'silent',
  screenshotPath: 'test-wdio-error-shots',
  screenshotOnReject: true,

  baseUrl: 'http://localhost:8080/test-wdio/fixture',

  framework: 'mocha',

  reporters: [
    'spec',
  ],

  mochaOpts: {
    ui: 'bdd',
    compilers: [
      'js:babel-register',
    ],
    require: [
      'css-modules-require-hook/preset',
    ],
  },
};
