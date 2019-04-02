$(document).ready(function() {
    if ($('.c-series-list-item__info-name').length) {
        $('.c-series-list-item__info-name').each(function(i, item) {
            var item = $(this).get(0);
            $clamp(item, {clamp: 2});
        });
    }

    if ($('.player-list-name').length) {
        $('.player-list-name').each(function(i, item) {
            var item = $(this).get(0);
            $clamp(item, {clamp: 2});
        });
    }
});