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
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            grid: {
            rows: 2,
            fill: 'row',
            },
        },
         375: {
            slidesPerView: 1.3,
            grid: {
            rows: 2,
            fill: 'row',
            },
        },
        425: {
            slidesPerView: 1.15,
            grid: {
            rows: 2,
            fill: 'row',
            },
        },
        475: {
            slidesPerView: 1.3,
            grid: {
            rows: 2,
            fill: 'row',
            },
        },
        576: {
            slidesPerView: 1.8,
            grid: {
            rows: 2,
            fill: 'row',
            },
        },
        768: {
            slidesPerView: 2.5 ,
            grid: {
            rows: 2,
            fill: 'row',
            },
        },
        1440: {
            slidesPerView: 2.5,
            grid: {
            rows: 2,
            fill: 'row',
            },
        },
        1919: {
            slidesPerView: 4,
            grid: {
            rows: 2,
            fill: 'row',
            },
        }
    },
}); 

$(document).ready(function () {
    var scroll_pos = 0;
    $(window).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 100) {
            $(".header").css('background-color', 'rgba(51, 51, 51)');
        } else {
            $(".header").css('background-color', 'rgba(51, 51, 51,0)');
        }
    });
});