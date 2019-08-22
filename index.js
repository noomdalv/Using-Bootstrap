$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 170) {
    $('.stickyBar').fadeIn();
  } else {
    $('.stickyBar').fadeOut();
  }
});
