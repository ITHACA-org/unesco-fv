mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VlcmN1c2d1byIsImEiOiJjbDFhZmxraGMwd2c2M2xwbTRkeGh3dTE4In0.d8dPbPli4djvVcORKflS4A';
var map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/guercusguo/cl1afg1hs003y14o0cvmefqcc', // style URL
	center: [10.683333,45.433333], // starting position
	zoom: 12 // starting zoom
	// pitch: 85,
	// bearing: 80,
});
// chapters on map
var chapters = {
	'peschiera': {
		speed: 0.3,
		bearing: 0,
		center: [10.683333,45.433333],
		zoom: 18,
		pitch: 40
	},
	'porta-verona': {
		speed: 0.3,
		center: [10.696375, 45.440037],
		bearing: 0,
		zoom: 18,
		pitch: 40
	},
	'bastione-san-marco': {
		bearing: -108,
		center: [10.697409,45.439715],
		zoom: 16,
		speed: 0.3,
		pitch: 60
	},
	'bastione-querini': {
		bearing: 0,
		center: [10.694137, 45.4388830],
		zoom: 18,
		speed: 0.3,
		pitch: 40
	},
	'piazza-san-marco': {
		bearing: 0,
		center: [10.693838, 45.438672],
		zoom: 17,
		speed: 0.3,
		pitch: 40
	},
	'ponte-dei-voltoni': {
		bearing: 270,
		center: [10.696637,45.438609],
		zoom: 19,
		speed: 0.3,
		pitch: 70
	},
	'porta-brescia': {
		bearing: 50,
		center: [10.692078, 45.438131],
		zoom: 18,
		speed: 0.3,
		pitch: 80
	}
};

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
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

var activeChapterName = 'peschiera';
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
