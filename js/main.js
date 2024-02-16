 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

 // Hide Burger Menu on each nav-item click on mobile screen
function HideburgerMenu() {
	const icons = document.getElementById('portfolio-nav');
	icons.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function() {
	var scrollLinks = document.querySelectorAll('.scroll_to_about');

	scrollLinks.forEach(function(scrollLink) {
		scrollLink.addEventListener('click', function(e) {
			e.preventDefault(); // This prevents the default behavior i.e reloading of anchor tag
			var targetId = this.getAttribute('href');
			var targetSection = document.querySelector(targetId);

			// Scroll smoothly to the target section
			if (targetSection) {
				targetSection.scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
	});
});

window.addEventListener('scroll', function() {
	var scrollTop = document.documentElement.scrollTop;
	var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrollProgress = (scrollTop / scrollHeight) * 100;

	var progressBar = document.querySelector('.progress_bar');
	progressBar.style.width = scrollProgress + '%';
});

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#portfolio-loader').length > 0) {
				$('#portfolio-loader').removeClass('show');
			}
		}, 600);
	};
	loader();

	// Scrollax
   $.Scrollax();

   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.portfolio-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#portfolio-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#portfolio-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 1000, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	// $('#dropdown04').on('show.bs.dropdown', function () {
	//   console.log('show');
	// });

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.portfolio_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .portfolio-counter, .portfolio-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('portfolio-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 4000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.portfolio-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('portfolio-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .portfolio-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn portfolio-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft portfolio-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight portfolio-animated');
							} else {
								el.addClass('fadeInUp portfolio-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

})(jQuery);

