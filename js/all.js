$(document).ready(function() {
    $('.menu-item').on('click', '.manu-item-link>li>a', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(this).find('.menu-item-arrow').slideToggle();
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
    });
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 3000,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    })
});