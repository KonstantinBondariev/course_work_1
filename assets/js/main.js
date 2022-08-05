$(document).ready(function () {
  $('.header-navbar__btn').click(function () {
    $(this).toggleClass('open');
    $('.header-navbar__list').toggleClass('open');
    $('.header-navbar__item').toggleClass('open');
  });
});