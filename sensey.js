$(function(){
		$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(400)  
	});
	});


	$(document).ready(function(){
	 
	$(window).scroll(function(){
	if ($(this).scrollTop() > 500) {
	$('.scrollup').fadeIn();
	} else {
	$('.scrollup').fadeOut();
	}
	});
	 
	$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
	}); 
	});


	$(function(){
		$('.slider').slick({
  			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			arrows: false,
			adaptiveHeight: true,
			cssEase: 'linear'
	});		  
	});

$('.left').click(function(){
  $('.slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.slider').slick('slickNext');
})


	$(function(){
		$('.slider-for').slick({
			slidesToShow: 1,
  			slidesToScroll: 1,
  			arrows: false,
  			fade: true,
			adaptiveHeight: true,
			cssEase: 'linear',
			asNavFor: '.slider-nav'
	});

		$('.slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			arrows: false,
			dots: true,
			centerMode: true,
			focusOnSelect: true
	});
	});


	$(function initMap() {
		var coordinates = {lat: 41.380087, lng: 2.172454},
		markerImg = 'Portfolio/pin-2.png',

        map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates,
          zoom: 14,
          disableDefaultUI: true,
          scrollwheel: false,
        });

        marker = new google.maps.Marker ({
        	position: coordinates,
        	map: map,
        	animation: google.maps.Animation.DROP,
        	icon: markerImg,
        	draggable: true,
        	title:"Drag me!"
        });
 		});

google.maps.event.addDomListener(window); 