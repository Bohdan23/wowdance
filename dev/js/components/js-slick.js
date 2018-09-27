$(document).ready(function() {
	
	var popularOptions = {
			slidesToShow: 2,
			centerMode: false,
			infinite: false,
			prevArrow: '.control-popular-left',
			nextArrow: '.control-popular-right',
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
						centerMode: false
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
					slidesToScroll: 1,
					vertical: true,
					verticalSwiping: true
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

	$('.c-one-season__select').selectpicker();
	

	var myScrollSlider = $('.seasons-list');
	myScrollSlider.slick({
		slidesToShow: 4.3,
		infinite: true,
		centerMode: false,
		initialSlide: '1',
		focusOnSelect: true,
		slidesToScroll: 1,
		arrows: false
	});

	myScrollSlider.on('wheel', (function(e) {
	e.preventDefault();

	if (e.originalEvent.deltaY < 0) {
		$(this).slick('slickNext');
	} else {
		$(this).slick('slickPrev');
	}
	}));

});
