define(['jquery'], function ($) {
  var useCases = [];
  var generate = function (cb) {
    //if (typeof cb !== 'function') {
    //  return;
    //}

    $.getJSON('/model/tabs.json').done(function (data) {
      console.log('data is', data);
      //$.each(data, function (index, useCase) {
      //  useCases.push(useCase);
      //});
      //
      //cb(template.packages({ packages: packages }));
    });
  };

  return {
    generate: generate
  };
});
