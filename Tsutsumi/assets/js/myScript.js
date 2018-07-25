//Swiper
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
	   autoplay: {
    	delay: 5000,
  	},

        // Loop
        loop: true,
        loopAdditionalSlides: 2,
        loopedSlides: 2,
    }); 

//Mobile Menu Script
    jQuery(document).ready(function($) {
    	$( ".mobile-menu-icon-close").hide();
		$(".mobile-menu-icon").on('click', function() {
			$(".mobile-menu-icon").hide();
			$(".mobile-menu-icon-close").show();
			$("#top-menu-nav").slideToggle(200);
		});
		$(".mobile-menu-icon-close").on('click', function() {
			$(".mobile-menu-icon-close").hide();
			$(".mobile-menu-icon").show();
			$("#top-menu-nav").slideToggle(200);
		});

        //START Top Scroll
        var offset = 498;
        var duration = 300;
        $(window).scroll(function() {
 
            if ($(this).scrollTop() > offset) {
                $('.q-link').fadeIn(duration);
            } else {
            $('.q-link').fadeOut(duration);
            }
        });

        $('.q-link').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 'slow');
            return false;
        });
        //END Top Scroll
	});