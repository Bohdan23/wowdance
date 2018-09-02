function textTrim(elem, length) {
	$(elem).each(function(i, item) {
		var myTag = $(item).text();
		if (myTag.length > length) {
			var truncated = myTag.trim().substring(0, length) + "…";
			$(item).text(truncated);
		}
	})
}

textTrim('.c-series-list-item__info-name', 50)
