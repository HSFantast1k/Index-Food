$(function(){
    $('.categories__tab').on('click', function(a){
        a.preventDefault();
        $('.categories__tab').removeClass('categories__tab--active');
        $(this).addClass('categories__tab--active')

        $('.categories__tabs-content').removeClass('categories__tabs-content--active');
        $($(this).attr('href')).addClass('categories__tabs-content--active');



    });



    $('.slider__inner').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt="next"></button>',
        responsive: [
            {
                breakpoint: 521,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });
});