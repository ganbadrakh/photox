$(document).ready(() => {
  $('.nav-button').click(() => {
    $('.nav-button').toggleClass('change');
  });
  $(window).scroll(function() {
    const position = $(this).scrollTop();
    if (position >= 200) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  });
});
