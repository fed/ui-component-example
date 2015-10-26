define([
  'intern!object',
  'intern/chai!assert',
  'agent'
], function (registerSuite, assert, Agent) {
  registerSuite({
    'name': 'Component',
    'Agent': {
      'constructor': {
        name: 'constructor',
        'returns a function': function () {
          assert.typeOf(Agent, 'function');
        }
      }
    }
  });
});
