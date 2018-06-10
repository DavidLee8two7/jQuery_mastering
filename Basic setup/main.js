$('.fade, .fades, #fade, #fades').on('click', function() {
  $(this).toggleClass('red');
  $(this).fadeOut(3000);
});
