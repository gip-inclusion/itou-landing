// Initialisation
$(window).on('load', function() {
  console.log('load');
});

// Re-initialisation au resize
$(window).on('resize orientationchange', function() {
  console.log('resize');
});

$(window).on('scroll', function() {
  console.log('scroll');
});
