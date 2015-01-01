$(function () {
	var url = 'https://www.googleapis.com/customsearch/v1?';
	jQuery.getJSON(url, {
		key: 'AIzaSyDN-qbTTNWQOpapAax85GQvtIU4ZbzLHeA',
		cx: '000420937498810841983:v9zyg2gy-g0',
		q: 'site:vk.com+мир+кольцо+mobi+inurl:?hash=&oq=site:vk.com+мир+кольцо+mobi+inurl:?hash='
	}, function (json, textStatus) {
		console.log(json, textStatus);
	});

});