(function(){
	function onScroll() {
	    if ($(window).scrollTop() > 200) {
	        $('.c-header').addClass('sticky');
	    } else {
	        $('.c-header').removeClass('sticky');
	    }
	}
	
	onScroll();
    $(document).on('scroll', onScroll);
})();