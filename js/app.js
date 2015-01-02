$(function () {
	var sendQuery = function (query, format) {
		var url = 'https://www.googleapis.com/customsearch/v1element?';
		jQuery.getJSON(url, {
			key: 'AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY',
			rsz: 'filtered_cse',
			num: '6',
			hl: 'ru',
			prettyPrint: 'false',
			source: 'gcsc',
			gss: '.io',
			sig: '23952f7483f1bca4119a89c020d13def',
			cx: '000420937498810841983:v9zyg2gy-g0',
			q: 'site:vk.com ' + query + ' ' + format + ' inurl:?hash='
		}, function (json, textStatus) {
			var $container = $('.js-container');
			// console.log(json);
			var rendered = Mustache.render($('#searchItemTemplate').html(), json);
			$container.html(rendered);
		});
	};

	var getBookInfo = function (query) {
		var url = 'https://www.googleapis.com/books/v1/volumes?';
		jQuery.getJSON(url, {
			q: query
		}, function (json, textStatus) {
			// console.log(json.items[0].volumeInfo.title);
			_.each(json.items, function (item, k) {
				if (k <= 10) {
					console.log(item.volumeInfo.title);
				}
				// console.log(item.volumeInfo.title);
			});
		});
	};

	var options = {
		callback: function (value) {
			var format = $('.js-searchSelect').val();
			// getBookInfo(value);
			sendQuery(value, format);
		},
		wait: 300,
		highlight: true,
		captureLength: 2
	};

	$('.js-searchInput').typeWatch(options);
	$('.js-searchSelect').on('change', function (e) {
		var format = $(e.currentTarget).val();
		var query = $('.js-searchInput').val();

		if (query) {
			sendQuery(query, format);
		}
	});
});