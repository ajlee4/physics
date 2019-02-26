"use strict";

$(window).scroll(function () {
  var height = $(window).scrollTop();

  if (height > 50) {
    $('header').addClass('header-fixed');
    $('header-fixed').css('visibility', 'visible');
  } else {
    $('header').removeClass('header-fixed');
  }
});