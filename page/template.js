define(['hogan'], function(Hogan) {
  var t = {
    /* jshint ignore:start */
    'ui-component' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"ui-component\">");t.b("\n" + i);t.b("    <div class=\"clickable\">Click me :)</div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }})
    /* jshint ignore:end */
  },
  r = function(n) {
    var tn = t[n];
    return function(c, p, i) {
      return tn.render(c, p || t, i);
    };
  };
  return {
    'ui-component' : r('ui-component')
  };
});