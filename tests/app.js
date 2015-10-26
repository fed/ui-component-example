define([
  'intern!object',
  'intern/chai!assert',
  'component'
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
