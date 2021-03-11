// Vars
var stickyNav = $('#header');
stickyNav.data('top', stickyNav.offset().top);

// Initialisation
$(window).on('load', function() {
  //console.log('load');
});

// Re-initialisation au resize
$(window).on('resize orientationchange', function() {
  //console.log('resize');
});

$(window).on('scroll', function() {
  fixedNav();
});

$('[data-toggle=burger]').on('click tap', function(e) {
  e.preventDefault();
  stickyNav.toggleClass('is-opened');
});

function fixedNav() {
  if ($(window).scrollTop() > stickyNav.data('top')) {
    stickyNav.addClass('is-fixed');
  } else {
    stickyNav.removeClass('is-fixed');
  }
}
