define([
  'intern!object',
  'intern/chai!assert',
  'ui-component'
], function (registerSuite, assert, Agent) {
  registerSuite({
    'name': 'App',
    'Agent': {
      'constructor': {
        name: 'constructor',
        'returns an object': function () {
          assert.typeOf(Agent, 'object');
        }
      }
    }
  });
});
