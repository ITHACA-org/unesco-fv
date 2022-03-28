mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VlcmN1c2d1byIsImEiOiJjbDFhZmxraGMwd2c2M2xwbTRkeGh3dTE4In0.d8dPbPli4djvVcORKflS4A';
var map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/guercusguo/cl1afebdi004o14phiw01d9uj', // style URL
	center: [8.001214,44.609173], // starting position
	zoom: 12 // starting zoom
	// pitch: 85,
	// bearing: 80,
});
// chapters on map
var chapters = {
	'il-paesaggio-percepito': {
		speed: 0.3,
		bearing: 0,
		center: [8.001214,44.609173],
		zoom: 12,
		pitch: 40
	},
	'castello-di-serralunga-dalba': {
		speed: 0.3,
		center: [8.001214, 44.609173],
		bearing: 0,
		zoom: 15,
		pitch: 40
	},
	'cappella-della-ss-madonna-delle-grazie': {
		bearing: 0,
		center: [7.944971, 44.628143],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'villanova': {
		bearing: 0,
		center: [8.35245, 44.77437],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'bric-noche': {
		bearing: 0,
		center: [8.316680, 44.796988],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'torre-dei-contini-a-canelli': {
		bearing: 0,
		center: [7.96339,44.61254],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'torre-dei-contini-a-canelli': {
		bearing: 0,
		center: [8.262922, 44.723898],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'bricco-crevacuore': {
		bearing: 0,
		center: [8.237972, 44.725278],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'chiesa-di-s-eusebio-fig-127': {
		bearing: 0,
		center: [8.428854, 45.017528],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'castello-comunale-falletti-di-barolo': {
		bearing: 0,
		center: [8.944039, 44.611090],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'i-punti-di-belvedere': {
		bearing: 0,
		center: [8.286041, 44.721840],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'belvedere-in-piazza-san-marco': {
		bearing: 0,
		center: [7.96339,44.61254],
		zoom: 12,
		speed: 0.3,
		pitch: 40
	},
	'belvedere-in-via-giachini': {
		bearing: 0,
		center: [7.96339,44.61254],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'belvedere-in-frazione-moleto': {
		bearing: 0,
		center: [8.371559, 45.052140],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'belvedere-in-piazza-castello': {
		bearing: 0,
		center: [7.934888, 44.637564],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'belvedere-in-via-castello-fig-26': {
		bearing: -170,
		center: [7.994053, 44.652928],
		zoom: 15,
		speed: 0.3,
		pitch: 85
	},
	'calanchi': {
		bearing: 0,
		center: [8.088661, 44.677595],
		zoom: 13,
		speed: 0.3,
		pitch: 40
	},
	'le-stagioni-nelle-langhe': {
		bearing: 0,
		center: [8.103748, 44.720217],
		zoom: 10,
		speed: 0.3,
		pitch: 40
	},
};

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
var fallbackImageUrl = '/../assets/markers/musei-marker.png';
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

var activeChapterName = 'il-paesaggio-percepito';
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
