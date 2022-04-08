mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VlcmN1c2d1byIsImEiOiJjbDFhZmxraGMwd2c2M2xwbTRkeGh3dTE4In0.d8dPbPli4djvVcORKflS4A';
var map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/guercusguo/cl1afebdi004o14phiw01d9uj', // style URL
	center: [13.316944,45.9], // starting position
	zoom: 12 // starting zoom
	// pitch: 85,
	// bearing: 80,
});
// chapters on map
var chapters = {
	'palmanova': {
		bearing: 0,
		center: [13.316944, 45.9],
		zoom: 14,
		speed: 0.3,
		pitch: 0
	},
	'porta-cividale': {
		center: [13.315168, 45.907329],
		bearing: 0,
		zoom: 17,
		speed: 0.3,
		pitch: 40
	},
	'porta-udine': {
		bearing: 0,
		center: [13.304792, 45.907853],
		zoom: 17,
		speed: 0.3,
		pitch: 40
	},
	'acquedotto-veneziano-e-cascatella': {
		bearing: 0,
		center: [13.304350, 45.908229],
		zoom: 17,
		speed: 0.3,
		pitch: 40
	},
	'porta-aquilea': {
		bearing: 0,
		center: [13.309667, 45.901473],
		zoom: 17,
		speed: 0.3,
		pitch: 40
	},
	'piazza-grande': {
		bearing: 0,
		center: [13.309893, 45.905404],
		zoom: 17,
		speed: 0.3,
		pitch: 40
	},
	'stendardo': {
		bearing: 0,
		center: [13.309893, 45.905404],
		zoom: 19,
		speed: 0.3,
		pitch: 40
	},
	'palazzo-del-provveditore-generale': {
		bearing: 0,
		center: [13.311293, 45.902797],
		zoom: 17,
		speed: 0.3,
		pitch: 40
	},
	'loggia-della-gran-guardia': {
		bearing: 0,
		center: [13.308978, 45.904984],
		zoom: 17,
		speed: 0.3,
		pitch: 40
	},
	'finale-palmanova': {
		bearing: 0,
		center: [13.316944,45.9],
		zoom: 12,
		speed: 0.3,
		pitch: 0
	}
};

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
var fallbackImageUrl = '/../assets/markers/stendardo.svg';
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

var activeChapterName = 'palmanova';
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
