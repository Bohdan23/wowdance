$(document).ready(function() {
	var $body = $('body');
	$body
		.on('click', '.js-collapse .clickToOpen', function(event){
			var th = $(this),
				th_collapse = th.closest('.js-collapse'),
				th_content = th_collapse.find('.js-collapse-content');
            th_collapse.toggleClass('js-collapse_opened');
            if (th_collapse.hasClass('js-collapse_opened')) {
            	$('.c-footer__read-more-btn').text('Свернуть');
                th
                    .closest('.js-collapse-wrap')
                    .find('.js-collapse-content')
                    .not(th_content)
                    .stop(true,true).slideUp('800');
                th_content.stop(true,true).slideDown('800', function(){
                    if ($(window).width() > 1006) {
                        $('html,body').animate({scrollTop:th_collapse.offset().top - 5}, 800, 'swing');
                    }
                });
            } else {
            	$('.c-footer__read-more-btn').text('Читать полностью');
                th
					.closest('.js-collapse')
					.find('.js-collapse-content')
					.stop(true,true).slideUp('800');
			}
		});
});

