$(function () {
	var sendQuery = function (query, format) {
		var url = 'https://www.googleapis.com/customsearch/v1element?';
		jQuery.getJSON(url, {
			key: 'AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY',
			rsz: 'filtered_cse',
			num: '10',
			hl: 'ru',
			prettyPrint: 'false',
			source: 'gcsc',
			gss: '.io',
			sig: '23952f7483f1bca4119a89c020d13def',
			cx: '000420937498810841983:v9zyg2gy-g0',
			q: 'site:vk.com м' + query + ' ' + format + ' inurl:?hash='
		}, function (json, textStatus) {
			var $container = $('.js-container');
			var results = _.map(json.results, function (item) {
				item.url = decodeURIComponent(item.url);
				return item;
			});
			json.results = results;
			var rendered = Mustache.render($('#searchItemTemplate').html(), json);
			$container.html(rendered);
		});
	};

	var options = {
		callback: function (value) {
			var format = $('.js-searchSelect').val();
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