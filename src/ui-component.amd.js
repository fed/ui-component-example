define('agent', ['jquery'], function ($) {
  var DEFAULTS = {
    colors: [
      '#F44336',
      '#E91E63',
      '#9C27B0',
      '#673AB7',
      '#3F51B5',
      '#2196F3',
      '#03A9F4',
      '#00BCD4',
      '#009688',
      '#4CAF50',
      '#8BC34A',
      '#CDDC39',
      '#FFEB3B',
      '#FFC107',
      '#FF9800',
      '#FF5722',
      '#795548',
      '#9E9E9E',
      '#607D8B'
    ]
  };

  var Agent = function ($element, options) {
    this.options = $.extend({}, DEFAULTS, options);
    this.$element = $element;

    this.changeColor = function () {
      var randomColor = this.options.colors[Math.floor(Math.random()*this.options.colors.length)];
      this.$element.css('background-color', randomColor);
      console.log('just clicked on the box :)');
    };

    this.$element.on('click', $.proxy(this.changeColor, this));
  };

  Agent.prototype = {};

  return Agent;
});
