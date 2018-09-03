$(document).ready(function() {
	function initSlick(elem, breakpoint) {
		if(window.innerWidth < 768) {
			if (!$('.c-series-list__wrapper-popular').hasClass('slick-initialized')) {
				$('.c-series-list__wrapper-popular').slick({
					slidesToShow: 2,
					centerMode: true,
					prevArrow: '.slick-control-left',
					nextArrow: '.slick-control-right',
					responsive: [
						{
							breakpoint: 530,
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
							breakpoint: 370,
							settings: {
								slidesToShow: 1,
								centerMode: false
							}
						}
					]
				});
			}
	    } else{
	    	if ($('.c-series-list__wrapper-popular').hasClass('slick-initialized')) {
	        	$('.c-series-list__wrapper-popular').slick('unslick');
	    	}
	    }
	}

	initSlick();
	$(window).resize(initSlick);
});