/**
 *	@package	 Loyalé - HTML5 Template - version 1.0
 *	@copyright	 Copyright (C) 7Studio 2016 - seventhemes.com  All rights reserved.
 *	@license	 https://themeforest.net/licenses/terms/regular
**/

(function ($) {
'use strict';
	$(document).ready(function() {
		// Google Maps
		var latlng = new google.maps.LatLng(48.8610191,2.341487700000016); // Change Lat & Lng to your own location
		var title = 'Loyale Restaurant'; // Change marker title
		
		// Map styles
		var styles = [{
			featureType: "all",
			stylers: [
				{ hue: '#d6c0a3' },
				{ saturation: -80 },
				{ lightness: 0 },
				{ invert_lightness: false }
			]
		}];
		
		// Map options 
		var mapOptions = {
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: latlng,
			panControl: true,
			zoomControl: true,
			scaleControl: false,
			mapTypeControl: true,
			streetViewControl: true,
			overviewMapControl: false,
			zoom: 19,
			scrollwheel: false,
			draggable: true	};

		var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
		
		// assign map option and styles to the map
		map.setOptions({styles: styles});
		
		// map marker
		var marker = new google.maps.Marker ({
			position: latlng,
			map: map,
					icon: 'assets/images/interface/map-marker.png',
					title: title
		});
		
		// Contact form validation
		$('#contact').validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			},
			messages: {
				name: {
					required: "name field is required",
					minlength: "your name must consist of at least 2 characters"
				},
				email: {
					required: "email field is required"
				},
				message: {
					required: "message field is required"
				}
			},
			
			// AJAX submit handler
			submitHandler: function (form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"contact.php",
					
					// show success messagge and disable inputs on success
					success: function() {
						$('#contact :input').attr('disabled', 'disabled');
						$('#success').removeClass('hide');
					},
					// show error message
					error: function() {
						$('#error').removeClass('hide');
					}
				});
			}
		});
	});
})(jQuery);