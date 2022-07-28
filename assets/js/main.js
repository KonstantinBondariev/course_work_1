
$(document).ready(function () {

  $('.header-navbar__btn').on('click', function () {
    $(this).toggleClass('active');
    $('.header-navbar__list').toggleClass('active');
  });

});