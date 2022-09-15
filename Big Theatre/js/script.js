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
      
new Swiper('.image-slider1', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    initialSlide: 0,
}); 

new Swiper('.image-slider2', {
    spaceBetween: 140,
    slidesPerView: 4,
    grid: {
    rows: 2,
    fill: 'row',
  },
}); 