// Learn more about configuring this file at <https://theintern.github.io/intern/#configuration>.
define({
  loaders: {
    'host-node': 'requirejs',
    'host-browser': 'node_modules/requirejs/require.js'
  },

  loaderOptions: {
    paths: {
      'agent': 'src/component'
    }
  },

  // Non-functional test suite(s) to run in each browser
  suites: ['./tests/unit'],

  // A regular expression matching URLs to files that should not be included in code coverage analysis
  excludeInstrumentation: /^(?:tests|node_modules)\//
});
