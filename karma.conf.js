var path = require('path');

module.exports = function (config) {
  config.set({

    basePath: '',
    plugins: [
      require('karma-webpack'),
      'karma-jasmine',
      'karma-clear-screen-reporter',
      'karma-mocha-reporter',
      'karma-chrome-launcher'
    ],

    frameworks: ['jasmine'],

    webpack: {
      resolve: {
        root: [path.join(__dirname, 'app')]
      },

      module: {
        loaders: [
          { test: /\.jsx?$/, loader: 'babel' },
          { test: /\.scss?$/, loaders: ['style', 'css', 'sass'] },
          { test: /\.css?$/, loaders: ['style', 'css'] }
        ]
      }
    },

    webpackServer: {
      noInfo: true
    },

    files: ['test/test.js'],

    preprocessors: {
      'test/test.js': ['webpack']
    },

    reporters: ['clear-screen', 'mocha'],

    mochaReporter: {
      output: 'minimal'
    },

    colors: true,
    watch: true,
    logLevel: config.LOG_WARN,
    browsers: ['Chrome'],
    singleRun: false

  })
};
