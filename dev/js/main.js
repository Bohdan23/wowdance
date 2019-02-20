/* frameworks */
//=include ../../dist/bower_components/jquery/dist/jquery.js
//=include ../../dist/bower_components/moff/dist/moff.min.js

/* libs */
//=include lib/modernizr-custom.js

/* plugins */

/* separate */
//=include helpers/object-fit.js
//=include separate/global.js
//=include ../../dist/bower_components/bootstrap/js/dist/util.js
//=include ../../dist/bower_components/popper.js/dist/umd/popper.js
//=include ../../dist/bower_components/bootstrap/js/dist/dropdown.js

/* components */
// components/js-header.js
// components/js-texttrim.js
//=include components/js-preloader.js

// the main code

window.moffConfig = {
	// Website CSS breakpoints.
	// Default values from Twitter Bootstrap.
	// No need to set xs, because of Mobile first approach.
	breakpoints: {
		xs: 480,
		sm: 768,
		md: 992,
		lg: 1200
	},
	loadOnHover: true,
	cacheLiveTime: 2000
};

Moff.amd.register({
	id: 'header',
	file: {
		js: ['s/js/components/js-header.js']
	},

	beforeInclude: function() {},
		afterInclude: function() {},
		
	loadOnScreen: ['xs', 'sm', 'md', 'lg'],
	onWindowLoad: true
});

if($('.c-series-list-item__info-name').length) {
	Moff.amd.register({
		id: 'texttrim',
		file: {
			js: ['s/js/components/js-texttrim.js']
		},

		beforeInclude: function() {},
			afterInclude: function() {},
			
		loadOnScreen: ['xs', 'sm', 'md', 'lg'],
		onWindowLoad: true
	});
}

if ($('.js-line-clamp').length) {
	Moff.amd.register({
		id: 'line_clamp',
		depend: {
			js: ['s/js/lib/line-clamp.js']
		},
		file: {
			js: ['s/js/components/js-line-clamp.js']
		},
		loadOnScreen: ['xs', 'sm', 'md', 'lg'],
		onWindowLoad: true
	});
}

if($('.c-footer__accordeon-text').length) {
	Moff.amd.register({
		id: 'readMore',
		file: {
			js: ['s/js/components/js-read-more.js']
		},

		beforeInclude: function() {},
			afterInclude: function() {},
			
		loadOnScreen: ['xs', 'sm', 'md', 'lg'],
		onWindowLoad: true
	});
}

if($('.slider-init').length) {
	Moff.amd.register({
		id: 'slick',
		depend: {
			js: ['bower_components/slick-carousel/slick/slick.min.js'],
			css: ['bower_components/slick-carousel/slick/slick.css']
		},
		file: {
			js: ['s/js/components/js-slick.js']
		},

		beforeInclude: function() {},
			afterInclude: function() {},
			
		loadOnScreen: ['xs', 'sm', 'md', 'lg'],
		onWindowLoad: true
	});
}


$('.player-video__descr-link').click(function() {
	$('.player-video__descr').toggleClass('player-video__descr_active');
	$('.player-video__descr-link_max').toggleClass('player-video__descr-link_max-active');
	$('.player-video__descr-link_min').toggleClass('player-video__descr-link_min-active');
	$('.player-video__descr').toggleClass('active');
});


$(document).ready(function(){
	$('.seasons-list__item').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.seasons-list__item').removeClass('current');
		$('.seasons-video-container').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})


if($('.scroll-init').length) {
	Moff.amd.register({
		id: 'scroll',
		depend: {
			js: ['bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'],
			css: ['bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css']
		},
		file: {
			js: ['s/js/components/js-scroll.js']
		},

		beforeInclude: function() {},
			afterInclude: function() {},
			
		loadOnScreen: ['xs', 'sm', 'md', 'lg'],
		onWindowLoad: true
	});
}