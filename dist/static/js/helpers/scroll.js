"use strict";

var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.3;

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) {
    e.preventDefault();
    var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
    t = document.querySelector(hash).getBoundingClientRect().top, start = null;
    requestAnimationFrame(step);

    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
      window.scrollTo(0, r);

      if (r != w + t) {
        requestAnimationFrame(step);
      } else {
        location.hash = hash;
      }
    }
  }, false);
}

$(window).scroll(function () {
  var height = $(window).scrollTop();

  if (height > 50) {
    $('header').addClass('header-fixed');
    $('header-fixed').css('visibility', 'visible');
  } else {
    $('header').removeClass('header-fixed');
  }
});