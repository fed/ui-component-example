define(['hogan'], function(Hogan) {
  var t = {
    /* jshint ignore:start */
    'component' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"ui-component\">");t.b("\n" + i);t.b("    <button>Heya ");t.b(t.t(t.f("name",c,p,0)));t.b("! Click me :)</button>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}),
    'usecases' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("useCases",c,p,1),c,p,0,13,158,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"use-case\">");t.b("\n" + i);t.b("      <h2>");t.b(t.v(t.f("title",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("      <p>");t.b(t.t(t.f("description",c,p,0)));t.b("</p>");t.b("\n" + i);if(t.s(t.f("data",c,p,1),c,p,0,109,139,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<component0",c,p,"        "));});c.pop();}t.b("  </div>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {"<component0":{name:"component", partials: {}, subs: {  }}}, subs: {  }})
    /* jshint ignore:end */
  },
  r = function(n) {
    var tn = t[n];
    return function(c, p, i) {
      return tn.render(c, p || t, i);
    };
  };
  return {
    'component' : r('component'),
    'usecases' : r('usecases')
  };
});