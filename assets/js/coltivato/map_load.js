mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VlcmN1c2d1byIsImEiOiJja3B6aXJzYm0xcWZyMndwOWI2b295cnZxIn0.jCqUuQI8LcYDxVSJpJfM-Q';
var map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/guercusguo/ckqc3h3i600gu18pgwzh0qpjt', // style URL
	center: [7.943968,44.611059], // starting position
	zoom: 12 // starting zoom
	// pitch: 85,
	// bearing: 80,
});
// chapters on map
var chapters = {
	'il-paesaggio-coltivato': {
		bearing: 0,
		center: [7.943968, 44.611059],
		zoom: 13,
		speed: 0.3,
		pitch: 20
	},
	'ciabot': {
		center: [7.937603, 44.640647],
		bearing: 0,
		speed: 0.3,
		zoom: 16,
		pitch: 0
	},
	'vigna-cannubi-barolo': {
		bearing: 0,
		center: [7.949250, 44.620095],
		zoom: 16,
		speed: 0.3,
		pitch: 40
	},
	'vigneti': {
		bearing: 0,
		center: [7.993373, 44.652052],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'coltivazione-a-girapoggio': {
		bearing: 0,
		center: [8.080785, 44.722119],
		zoom: 16,
		speed: 0.3,
		pitch: 40
	}
};

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
var fallbackImageUrl = '/../assets/markers/ciabot-marker.png';
// Chapter-scrolling: On every scroll event, check which element is on screen
window.onscroll = function () {
	var chapterNames = Object.keys(chapters);
	for (var i = 0; i < chapterNames.length; i++) {
		var chapterName = chapterNames[i];
		if (isElementOnScreen(chapterName)) {
			setActiveChapter(chapterName);
			break;
		}
	}
};

var activeChapterName = 'il-paesaggio-coltivato';
function setActiveChapter(chapterName) {
	if (chapterName === activeChapterName) return;

	map.flyTo(chapters[chapterName]);

	document.getElementById(chapterName).setAttribute('class', 'active');
	document.getElementById(activeChapterName).setAttribute('class', '');

	activeChapterName = chapterName;
}

function isElementOnScreen(id) {
	var element = document.getElementById(id);
	var bounds = element.getBoundingClientRect();
	return bounds.top < window.innerHeight && bounds.bottom > 0;
}
// End of chapter-scrolling
