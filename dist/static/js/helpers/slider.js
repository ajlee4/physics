"use strict";

$(document).ready(function () {
  $('.leaders-slider').slick({
    dots: true
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