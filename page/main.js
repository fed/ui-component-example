require.config({
  baseUrl: '.',
  paths: {
    jquery: '../node_modules/jquery/dist/jquery.min',
    hogan: '../node_modules/hogan.js/dist/hogan-3.0.2.min.amd',
    agent: '../src/ui-component.amd'
  }
});

requirejs(['jquery', 'agent'], function ($, agent) {
  console.log('heya, im working :)');
  agent($('.clickable'), {});
});
