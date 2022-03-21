mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VlcmN1c2d1byIsImEiOiJja3B6aXJzYm0xcWZyMndwOWI2b295cnZxIn0.jCqUuQI8LcYDxVSJpJfM-Q';
var map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/guercusguo/ckqc3h3i600gu18pgwzh0qpjt', // style URL
	center: [8.39015,45.05038], // starting position
	zoom: 12 // starting zoom
	// pitch: 85,
	// bearing: 80,
});
// chapters on map
var chapters = {
	'il-paesaggio-costruito': {
		bearing: 0,
		center: [7.943968, 44.611059],
		zoom: 12,
		speed: 0.3,
		pitch: 40
	},
	'castello-dei-marchesi-falletti': {

		center: [7.943968, 44.611059],
		bearing: 0,
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'azienda-marchesi-di-barolo': {

		bearing: 0,
		center: [7.940581, 44.611374],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'castello-di-grinzane-cavour': {

		bearing: 0,
		center: [7.994750, 44.653156],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'crutin': {

		bearing: 0,
		center: [8.227214, 44.739353],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'crotin-del-teatro-fig-121b': {

		bearing: 0,
		center: [8.227214, 44.739353],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'infernot': {

		bearing: 0,
		center: [8.432688, 45.018543],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'infernot-in-via-montecauto': {

		bearing: 0,
		center: [8.428067, 45.019332],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'infernot-via-umberto': {

		bearing: 0,
		center: [8.387873, 45.032471],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'infernot-in-frazione-moleto-14': {

		bearing: 0,
		center: [8.370377, 45.051644],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'infernot-chiesa-madonna-delle-grazie': {

		bearing: 0,
		center: [8.390717, 45.085242],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'azienda-vitivinicola-fontanafredda': {

		bearing: 0,
		center: [7.986855, 44.638491],
		zoom: 12,
		speed: 0.3,
		pitch: 40
	},
	'azienda-agricola-teobaldo-cappellano-fig-57': {

		bearing: 0,
		center: [7.983701, 44.636546],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'museo-ratti-dei-vini-di-alba': {

		bearing: 0,
		center: [7.954487, 44.636819],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'cantina-renato-ratti-fig-59': {

		bearing: 0,
		center: [7.954615, 44.636061],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'enoteca-regionale-del-barbaresco': {

		bearing: -170,
		center: [8.080878, 44.725176],
		zoom: 15,
		speed: 0.3,
		pitch: 85
	},
	'azienda-gaja-fig-83': {

		bearing: 0,
		center: [8.00689, 44.726001],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'cantina-del-glicine-fig-88': {

		bearing: 0,
		center: [8.103748, 44.720217],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'museo-delle-contadinerie-e-delle-stampe-antiche-bersano': {

		bearing: 0,
		center: [8.360526, 44.773005],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'tenuta-aluffi-fig-102': {

		bearing: 0,
		center: [8.275145, 44.783591],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'cantina-sociale-di-vinchio-e-vaglio-serra': {

		bearing: 0,
		center: [8.329741, 44.806592],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'cantine-gancia': {

		bearing: 0,
		center: [8.287880, 44.715232],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'cantine-bosca': {

		bearing: 0,
		center: [8.285196, 44.720387],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
	'cantine-contratto': {

		bearing: 0,
		center: [8.284230, 44.721722],
		zoom: 15,
		speed: 0.3,
		pitch: 40
	},
};

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
var fallbackImageUrl = '/../assets/markers/infernot-marker.png';
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

var activeChapterName = 'il-paesaggio-costruito';
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
