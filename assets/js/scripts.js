/**
 *	@package	 Loyalé - HTML5 Template - version 1.0
 *	@copyright	 Copyright (C) 7Studio 2016 - seventhemes.com  All rights reserved.
 *	@license	 https://themeforest.net/licenses/terms/regular
**/

(function ($) {
'use strict';
	$(document).ready(function () {
		
		// Home page carousel
		$('.slide-image').imagesLoaded( { background: true }, function () {
			
			// hide preloader when images are loaded
			$('.carousel-preloader').addClass('complete');
			
			// run BS carousel with basic options
			$('#st-slider').carousel({
			  interval: 4000,
			  pause: false,
			  wrap: true,
			  keyboard: true
			});
			
			// variable for progress bar
			var $progressbar = $('.carousel-progress');
			
			// start CSS animated progress bar by adding active class
			$progressbar.addClass('active');
			
			// on carousel slide change event
			$('#st-slider').on('slide.bs.carousel', function () { 
				
				// toggle active class to rerun CSS progress bar
				$progressbar.removeClass("active").delay(1).queue(function () {
					$(this).addClass("active").dequeue();
				});
				
			});
		});
		
		// Tabs
		$('ul.tabs').each(function (){
			
			// for each set of tabs find active tab & and its associated content
			var $active, $content, $links = $(this).find('a');
			
			// use the first link as active tab
			$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
			$active.addClass('active');

			$content = $($active[0].hash);
			$content.addClass('active');
			
			// hide inactive tabs 
			$links.not($active).each(function () {
				$(this.hash).hide().removeClass('active');
			});
			
			// bind the click event
			$(this).on('click', 'a', function () {
				$active.removeClass('active');
				$content.removeClass('active').hide();
				
				// update the variables with new link and content
				$active = $(this);
				$content = $(this.hash);
				
				// make the tab active
				$active.addClass('active');
				$content.addClass('active').show();
				return false;
			});
		});
		
		// Toggle panels
		$('.toggle-panel').each(function () {
			
			// get height of panel container
			var h = $(this).height();
			
			// set height so we can animate it in CSS3
			// add active class to active panel
			if ($(this).hasClass('active')) {
				$(this).height(h);
			} else {
				// add class 'no-height' to hide remaining panels
				$(this).height(h).addClass('no-height');
			}
		});
		
		// bind the click event
		$('.toggle-header').on('click', 'a', function () {
			
			// remove active class for header and panel
			$(this).parent().toggleClass('active');
			var $panel = $(this).parent().next('.toggle-panel');
			
			if ( $panel.hasClass('active') ) {
				$panel.removeClass('active');
			}
			
			// toggle 'no-height' class for the panel
			$panel.toggleClass('no-height');
			return false;
		});
		
		// To-top button	
		var btn = $('.totop');
		
		// hide button
		$(btn).hide();
		
		// fade in button on scroll
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$(btn).fadeIn();
			} else {
				// fade out on top of the page
				$(btn).fadeOut();
			}
		});
		
		// custom js easing fuction for animation
		$.easing.customEasing = function (p, x) {
			return Math.pow(p, x && x[0] || 4);
		};
		
		// bind the click event
		$(btn).on('click', function () {
			$('html, body').animate({
				scrollTop: 0
			}, 500, 'customEasing');
			return false;
		});
		
		// Clone main menu and append to mobile container
		$('.main-nav .menu').clone().appendTo('.mobile-nav');
		
		// clone footer and apend after mobile menu
		$('.main-sidebar .footer').clone().appendTo('.mobile-overlay');
		
		// activate mobile menu on click
		$('.mobile-toggle').each(function () {
			$(this).on('click', function () {
				$('.mobile-overlay').toggleClass('active');
				$('.site').toggleClass('hidden');
				$('html, body').animate({ scrollTop: 0 }, 0);
				return false;
			});
		});
		
	});
})(jQuery);

(function ($) {
'use strict';
	$( window ).on('load', function () {
		
		// find main container for isotope
		var $container = $('#isotope-container');
		
		// create isotope layout
		$container.isotope();	
		
		// bind the click event
		$('#filters a').on('click', function () {
			
			// get filters from filters nav to sort elements
			var selector = $(this).attr('data-option-value');
			$container.isotope({
				filter: selector
			});
			
			// leave selected element
			var $this = $(this);
			if ( $this.hasClass('selected') ) {
			  return false;
			}
			
			// change selected class
			var $optionSet = $this.parents('.option-set');
			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');
			return false;
		});
	});
})(jQuery);

