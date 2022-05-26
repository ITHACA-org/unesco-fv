mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VlcmN1c2d1byIsImEiOiJjbDFhZmxraGMwd2c2M2xwbTRkeGh3dTE4In0.d8dPbPli4djvVcORKflS4A';
var map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/guercusguo/cl1afg1hs003y14o0cvmefqcc', // style URL
	center: [7.96339,44.61254], // starting position
	zoom: 12 // starting zoom
	// pitch: 85,
	// bearing: 80,
});
// chapters on map
var chapters = {
	'langa-barolo': {
		duration: 7000,
		bearing: 0,
		center: [7.96339,44.61254],
		zoom: 13,
		speed: 0.6,
		pitch: 40
	},
	'castello-cavour': {
		duration: 7000,
		bearing: 0,
		center: [7.9940737,44.6523347],
		zoom: 15,
		speed: 0.6,
		pitch: 40
	},
	'colline-barbaresco': {
		duration: 7000,
		bearing: 0,
		center: [8.085396,44.719634],
		zoom: 13,
		speed: 0.6,
		pitch: 40
	},
	'canelli-spumante': {
		duration: 7000,
		center: [8.247222,44.740324],
		bearing: 0,
		zoom: 12,
		speed: 0.6,
		pitch: 40
	},
	'nizza-barbera': {
		duration: 7000,
		bearing: 0,
		center: [8.30319,44.79613],
		zoom: 12,
		speed: 0.6,
		pitch: 40
	},
	'monferrato-infernot': {
		duration: 7000,
		bearing: 0,
		center: [8.39015,45.05038],
		zoom: 12,
		speed: 0.6,
		pitch: 40
	},
};

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
var fallbackImageUrl = '/../assets/markers/pink-marker.png';
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

var activeChapterName = 'langa-barolo';
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
