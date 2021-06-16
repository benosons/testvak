(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        // Testimonial Slider
        $(".testimonial-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
        });
        
        // Popup Gallery
        $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        
        // Responsive Menu
        $("ul#navigation").slicknav({
            prependTo: ".responsive-menu-wrap"
        });
        
        // Section Animations
        new WOW().init();
        
        // Smooth Scroll
        var scroll = new SmoothScroll('a[href*="#"]');
        
        $('.counter').counterUp({
                delay: 10,
                time: 1500
            });
        
        // Show or hide the sticky footer button
        $(window).on( "scroll", function() {
            if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
                }
        });
        
        // Custom Scroll Spy
        $(window).on('scroll', function() {
            $('div[scroll-spy="true"]').each(function() {
                if($(window).scrollTop() >= $(this).offset().top-85) {
                    var id = $(this).attr('id');
                    $('.main-menu li a').parent('li').removeClass('active');
                    $('.main-menu li a[href="#'+ id +'"]').parent('li').addClass('active');
                }
            });
        });

    });
    
    jQuery(window).load(function(){
        jQuery(".chipsofic-slider-preloader-wrap, .chipsofic-site-preloader-wrap").fadeOut(500);
    });


}(jQuery));