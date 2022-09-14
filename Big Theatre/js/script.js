$(document).ready(function () {
    $('.menu__burger').click(function (event) {
        $('.menu__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');

    });
});

new Swiper('.image-slider', {
    effect: "cards",
    cardsEffect: {
        rotate: true,
        slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
      });
