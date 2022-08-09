$(document).ready(function () {
  $('.header-navbar__btn').click(function () {
    $(this).toggleClass('open');
    $('.header-navbar__list').toggleClass('open');
    $('.header-navbar__item').toggleClass('open');
  });
});

// $(document).ready(function () {
//   $('.header-navbar__btn').on('click', function () {
//     var click = $(this).data('clicks');
//     if (click % 2 == 1) {
//       $(this).toggleClass('open');
//       $('.header-navbar__list').toggleClass('open');
//       $('.header-navbar__item').toggleClass('open');
//     } else {
//       $('.header-navbar__item').toggleClass('close');
//     };
//     $(this).data('clicks', click + 1);
//   });
// });