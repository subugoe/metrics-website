// initialise foundation specific js
$(document).foundation();

// add target blank to links pointing to external URLs
$(document.links).filter(function() {
  return this.hostname != window.location.hostname;
}).attr({
    target: '_blank',
    rel: 'noopener'
  });

// js for the twitter feed on the homepage
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

// more twitter related js
twttr.ready(
  function (twttr) {
    twttr.widgets.createTimeline(
      {
        sourceType: 'profile',
        screenName: 'metrics_project'
      },
      document.getElementById('featurebox__content__twitter'), {
          tweetLimit: 3,
          chrome: ["noheader", "nofooter", "noborders", "transparent", "noscrollbar"]
      }
    );

    twttr.events.bind(
      'rendered',
      function (event) {
        $('#masonry-container').masonry({
          itemSelector: '.featurebox',
          transitionDuration: 0
        });
      }
    );

  }
);
