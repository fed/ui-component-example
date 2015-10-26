define('agent', ['jquery', 'lodash'], function ($, _) {
  var DEFAULTS = {
    colors: [
      '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5',
      '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50',
      '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
      '#FF5722', '#795548', '#9E9E9E', '#607D8B', '#474747'
    ]
  };

  var Agent = function ($element, options) {
    this.options = $.extend({}, DEFAULTS, options);
    this.$element = $element;
    this.$element.on('click', $.proxy(this.changeColor, this));

  };

  Agent.prototype = {
    changeColor: function () {
      this.$element.css('background-color', this.getRandomColor());
    },

    getRandomColor: function () {
      return this.options.colors[Math.floor(Math.random() * this.options.colors.length)];
    }
  };

  return Agent;
});
