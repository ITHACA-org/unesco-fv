mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VlcmN1c2d1byIsImEiOiJjbDFhZmxraGMwd2c2M2xwbTRkeGh3dTE4In0.d8dPbPli4djvVcORKflS4A';
var map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/guercusguo/cl1afg1hs003y14o0cvmefqcc', // style URL
	center: [9.67,45.695], // starting position
	zoom: 11 // starting zoom
	// pitch: 85,
	// bearing: 80,
});
// chapters on map
var chapters = {
	'bergamo': {
		bearing: 0,
		center: [9.67, 45.695],
		zoom: 15,
		speed: 0.3,
		pitch: 20
	},
	'porta-santagostino': {
		center: [9.672277, 45.704041],
		bearing: 302,
		speed: 0.3,
		zoom: 17,
		pitch: 80
	},
	'porta-san-giacomo': {
		bearing: -38.40,
		center: [9.662943, 45.701316],
		zoom: 17,
		speed: 0.3,
		pitch: 75
	},
	'cannoniera-sangiovanni': {
		bearing: 0,
		center: [9.657776, 45.704050],
		zoom: 17,
		speed: 0.3,
		pitch: 40
	},
	'palazzo-podesta': {
		bearing: -60.09,
		center: [9.662627, 45.703990],
		zoom: 17,
		speed: 0.3,
		pitch: 40
	},
	'porta-santalessandro': {
		bearing: 104.71,
		center: [9.657841, 45.706489],
		zoom: 17,
		speed: 0.3,
		pitch: 40
	},
	'porta-sanlorenzo': {
		bearing: -156.16,
		center: [9.662822, 45.706621],
		zoom: 17,
		speed: 0.3,
		pitch: 60
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

var activeChapterName = 'bergamo';
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
