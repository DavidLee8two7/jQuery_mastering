$('#btn_main').on('click', function() {
  alert($('.dope').text());
});

$('h2').css('color', 'red');

$('button').on('click', function() {
  $('p').addClass('random');
  $(this).addClass('random');
});
