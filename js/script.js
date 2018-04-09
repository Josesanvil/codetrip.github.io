/*global $, window, document, setTimeout, WOW, jQuery*/
$(document).ready(function () {

    'use strict';

    mixpanel.track("Page charged");
    
 
    // Smooth scrolling using jQuery easing
    
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
        
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 48)
            }, 1000, "easeInOutExpo");
            return false;
            }
        }
    });


    //Fact Counter + Text Count
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });


    //initialize Slick slider (testimonial slider)
    $("#testimonial-slider").slick({
        dots: false,
        infinite: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"> << </button>',
        nextArrow: '<button type="button" class="slick-next"> >> </button>',
        arrows: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }  
            }
        ]
    });

});


//preloader
$(window).on('load', function(){
    $("body").css("overflow","auto");
    $(".preloader").fadeOut(1000,function(){
        $(this).remove();
    });
});
