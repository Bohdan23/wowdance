/* frameworks */
//=include ../../dist/bower_components/jquery/dist/jquery.js
//=include ../../dist/bower_components/moff/dist/moff.min.js

/* libs */
//=include lib/modernizr-custom.js

/* plugins */

/* separate */
//=include helpers/object-fit.js
//=include separate/global.js

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
	// depend: {
	// 	js: ['http://chat-domain.com/js/chat-api.js'],
	// 	css: ['http://chat-domain.com/css/chat.css']
	// },
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
		// depend: {
		// 	js: ['http://chat-domain.com/js/chat-api.js'],
		// 	css: ['http://chat-domain.com/css/chat.css']
		// },
		file: {
			js: ['s/js/components/js-texttrim.js']
		},

		beforeInclude: function() {},
	    afterInclude: function() {},
	    
		loadOnScreen: ['xs', 'sm', 'md', 'lg'],
		onWindowLoad: true
	});
}

if($('.c-footer__accordeon-text').length) {
	Moff.amd.register({
		id: 'readMore',
		// depend: {
		// 	js: ['http://chat-domain.com/js/chat-api.js'],
		// 	css: ['http://chat-domain.com/css/chat.css']
		// },
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
			js: ['bower_components/slick-carousel/slick/slick.min.js']
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