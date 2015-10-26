require.config({
  baseUrl: '.',
  paths: {
    jquery: '../node_modules/jquery/dist/jquery.min',
    lodash: '../node_modules/lodash/index',
    hogan: '../node_modules/hogan.js/dist/hogan-3.0.2.min.amd',
    agent: '../src/component'
  }
});

requirejs(['jquery', 'template', 'agent'], function ($, template, agent) {
  $.getJSON('/model/viewmodel.json').done(function (data) {
    $('#use-cases-container').html(template.usecases({ useCases: data.useCases }));

    $.each($('.ui-component button'), function (index, element) {
      new agent($(element), {});
    });
  });
});
