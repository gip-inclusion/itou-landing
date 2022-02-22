// Require libraries
$ = require('jquery');
require('popper.js');
require('bootstrap');

// Vars
var stickyNav = $('#header');
const rootStyle = getComputedStyle(document.body);

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
  stickyNav.data('top', stickyNav.offset().top);
  stickyNav.toggleClass('is-opened');
}).on('keypress', function(e) {
  if ( e.which == 13 ) {
    e.preventDefault();
    stickyNav.data('top', stickyNav.offset().top);
    stickyNav.toggleClass('is-opened');
 }
});

$('.input-group .form-control').on('focus', function(e) {
  e.preventDefault();
  $(this).parent('.input-group').find('.input-group-text').css('border-color', rootStyle.getPropertyValue('--gray-800'));
});
$('.input-group .form-control').on('blur', function(e) {
  e.preventDefault();
  $(this).parent('.input-group').find('.input-group-text').css('border-color', rootStyle.getPropertyValue('--gray-600'));
});
