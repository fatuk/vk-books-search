$(function () {
	/*var url = 'https://www.googleapis.com/customsearch/v1?';
	jQuery.getJSON(url, {
		key: 'AIzaSyDN-qbTTNWQOpapAax85GQvtIU4ZbzLHeA',
		cx: '000420937498810841983:v9zyg2gy-g0',
		q: 'site:vk.com+мир+кольцо+mobi+inurl:?hash=&oq=site:vk.com+мир+кольцо+mobi+inurl:?hash='
	}, function (json, textStatus) {
		console.log(json, textStatus);
	});*/


	var url = 'https://www.googleapis.com/customsearch/v1element?';
	jQuery.getJSON(url, {
		key: 'AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY',
		rsz: 'filtered_cse',
		num: '1',
		hl: 'ru',
		prettyPrint: 'false',
		source: 'gcsc',
		gss: '.io',
		sig: '23952f7483f1bca4119a89c020d13def',
		cx: '000420937498810841983:v9zyg2gy-g0',
		q: '%D0%BE%D0%BD%D0%B5%D0%B3%D0%B8%D0%BD',
		sort: '',
		googlehost: 'www.google.com',
		oq: '%D0%BE%D0%BD%D0%B5%D0%B3%D0%B8%D0%BD'
	}, function (json, textStatus) {
		console.log(json, textStatus);
	});
});