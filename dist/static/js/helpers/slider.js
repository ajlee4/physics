"use strict";

$(document).ready(function () {
  $('.main-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    fade: true
  });
});
$('.news-slider').slick({
  dots: true,
  mobileFirst: true,
  responsive: [{
    breakpoint: 767,
    settings: 'unslick'
  }]
});