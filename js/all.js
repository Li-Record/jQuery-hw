$(document).ready(function() {

		// menu
    $('.menu-item').on('click', '.manu-item-link>li>a', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(this).find('.menu-item-arrow').slideToggle();
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
    });
    // swiper
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
    });
    // light box
    lightbox.option({
      'resizeDuration': 500,
      'wrapAround': false,
      'positionFromTop': 400,
      'showImageNumberLabel': false,
    });
    $('.goTop').click(function(event) {
    	/* Act on the event */
    	event.preventDefault();
    	$('html,body').animate({scrollTop: 0}, 500);
    });

});