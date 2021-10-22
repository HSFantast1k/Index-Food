$(function(){
    $('.slider__inner').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt="next"></button>',
    });
});