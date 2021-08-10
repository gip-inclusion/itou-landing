// Require libraries
$ = require('jquery');
require('popper.js');
require('bootstrap');

// Vars
var stickyNav = $('#header');
stickyNav.data('top', stickyNav.offset().top);

// Initialisation
$(window).on('load', function() {
  //console.log('load');
  $('[data-toggle="tooltip"]').tooltip();
});

// Re-initialisation au resize
$(window).on('resize orientationchange', function() {
  //console.log('resize');
});

$(window).on('scroll', function() {
  //console.log('scroll');
});

$('[data-toggle=burger]').on('click tap', function(e) {
  e.preventDefault();
  stickyNav.toggleClass('is-opened');
});
