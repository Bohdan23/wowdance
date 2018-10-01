$(document).ready(function() {
	
	var popularOptions = {
			slidesToShow: 2,
			centerMode: false,
			infinite: false,
			prevArrow: '.control-popular-left',
			nextArrow: '.control-popular-right',
			speed: 600,
			cssEase: 'ease-in-out',
			responsive: [
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1.3,
						centerMode: false
					}
				}
			]
		};

	var oneSeasonPopularOptions = {
			slidesToShow: 4,
			centerMode: false,
			infinite: false,
			prevArrow: '.control-one-season-popular-left',
			nextArrow: '.control-one-season-popular-right',
			speed: 600,
			cssEase: 'ease-in-out',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						centerMode: true
					}
				},
				{
					breakpoint: 570,
					settings: {
						slidesToShow: 2,
						centerMode: true
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						centerMode: true
					}
				},
				{
					breakpoint: 350,
					settings: {
						slidesToShow: 1,
						centerMode: false
					}
				}
			]
		};

	var seasonsOptions = {
		slidesToShow: 5,
		prevArrow: '',
		infinite: false,
		nextArrow: '',
		speed: 600,
		cssEase: 'ease-in-out',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					vertical: true,
					verticalSwiping: false
				}
			}
		]
	}

	function initSlick() {
		if(window.innerWidth < 768) {
			if (!$('.popular-slider').hasClass('slick-initialized')) {
				$('.popular-slider').slick(popularOptions);
			}
		} else{
			if ($('.popular-slider').hasClass('slick-initialized')) {
				$('.popular-slider').slick('unslick');
			}
		}
	}

	function initSlickSeasons(elem, options) {
		$(elem).slick(options);
	}


	initSlick();
	initSlickSeasons('.seasone-5-slider', seasonsOptions, seasonsOptions.prevArrow = '.control-seasone5-left', seasonsOptions.nextArrow = '.control-seasone5-right');
	initSlickSeasons('.seasone-4-slider', seasonsOptions, seasonsOptions.prevArrow = '.control-seasone4-left', seasonsOptions.nextArrow = '.control-seasone4-right');
	initSlickSeasons('.seasone-3-slider', seasonsOptions, seasonsOptions.prevArrow = '.control-seasone3-left', seasonsOptions.nextArrow = '.control-seasone3-right');
	initSlickSeasons('.seasone-2-slider', seasonsOptions, seasonsOptions.prevArrow = '.control-seasone2-left', seasonsOptions.nextArrow = '.control-seasone2-right');
	initSlickSeasons('.seasone-1-slider', seasonsOptions, seasonsOptions.prevArrow = '.control-seasone1-left', seasonsOptions.nextArrow = '.control-seasone1-right');
	initSlickSeasons('.one-season-popular-slider', oneSeasonPopularOptions, seasonsOptions.prevArrow = '.control-seasone1-left', seasonsOptions.nextArrow = '.control-seasone1-right');
	$(window).resize(initSlick);


	var myScrollSlider = $('.seasons-list');
	var options = {
		slidesToShow: 4.3,
		infinite: false,
		swipeToSlide: true,
		slidesToScroll: 2,
		arrows: false
	};
	function slickControl() {
		var gW = $(window).outerWidth();
		if (gW >= 1025 && !myScrollSlider.hasClass('is-active')) {
			myScrollSlider.addClass('is-active').slick(options);
			myScrollSlider.on('wheel', (function(e) {
				e.preventDefault();

				if (e.originalEvent.deltaY < 0) {
					$(this).slick('slickPrev');
				} else {
					$(this).slick('slickNext');
				}
			}));
		} else if (gW < 1025){
			myScrollSlider.removeClass('is-active').slick('unslick');			
		}
	}
	$(window).on('resize', function() {
		slickControl();
	});
	setTimeout(function() {
		slickControl();
	})


	// (function() {
	// 	function scrollHorizontally(e) {
	// 		e = window.event || e;
	// 		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	// 		document.getElementById('seasons-list').scrollLeft -= (delta*30); //
	// 		e.preventDefault();
	// 	}
	// 	if (document.getElementById('seasons-list').addEventListener) {
	// 	// IE9, Chrome, Safari, Opera
	// 		document.getElementById('seasons-list').addEventListener("mousewheel", scrollHorizontally, false);
	// 	// Firefox
	// 		document.getElementById('seasons-list').addEventListener("DOMMouseScroll", scrollHorizontally, false);
	// 	} else {
	// 	// IE 6/7/8
	// 		document.getElementById('seasons-list').attachEvent("onmousewheel", scrollHorizontally);
	// 	}
	// })();
});
