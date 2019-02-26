"use strict";

$(function () {
  var Accordion = function Accordion(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    var links = this.el.find('.mobile__nav__link');
    links.on('click', {
      el: this.el,
      multiple: this.multiple
    }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    var $this = $(this);
    var $next = $this.next();
    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    }

    ;
  };

  var accordion = new Accordion($('#accordion'), false);
});
var subMenu = $('.submenu');
$('#burger').click(function () {
  subMenu.css('display', 'none');
});