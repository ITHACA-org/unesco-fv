//Load of GeoJSON data
var geojson;
function addSource() {
	map.addSource('peschiera', {
		'type': 'geojson',
		'data': '/../assets/json/PS_core_buffer.geojson'
	});
	map.addSource('mapbox-dem', {
		'type': 'raster-dem',
		'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
		'tileSize': 512,
		'maxzoom': 14
	});
} //END of addSource

// List of added layers; rendering and symbology of GeoJSON data.
function addLayer() {
	map.addLayer({
		'id': 'fill_area',
		'type': 'fill',
		'source': 'peschiera', // reference the data source
		'layout': {
			// Make the layer visible by default.
			'visibility': 'visible'
		},
		'paint': {
			'fill-color': [
				'match',
				['get', 'zona'],
				'buffer',
				'#5ab4ac',
				'core',
				'#d8b365',
				'#ccc'
			],
			'fill-opacity': 0.05
		}
	});
	// Add a black outline around the polygon.
	map.addLayer({
		'id': 'outline_area',
		'type': 'line',
		'source': 'peschiera',
		'layout': {
			// Make the layer visible by default.
			'visibility': 'visible'
		},
		'paint': {
			'line-color': [
				'match',
				['get', 'zona'],
				'buffer',
				'#5ab4ac',
				'core',
				'#d8b365',
				'#ccc'
			],
			'line-width': 4
		}
	});
	map.addLayer({
		'id': 'sky',
		'type': 'sky',
		'paint': {
			'sky-opacity': [
				'interpolate',
				['linear'],
				['zoom'],
				0,
				0,
				5,
				0.3,
				8,
				1
			],
			// set up the sky layer for atmospheric scattering
			'sky-type': 'atmosphere',
			// explicitly set the position of the sun rather than allowing the sun to be attached to the main light source
			'sky-atmosphere-sun': getSunPosition(),
			// set the intensity of the sun as a light source (0-100 with higher values corresponding to brighter skies)
			'sky-atmosphere-sun-intensity': 5
		}
	});
	// 3D properties
	map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.2 });
	// END of 3D properties
}
//END of addLayer

// update the `sky-atmosphere-sun` paint property with the position of the sun based on the selected time
// the position of the sun is calculated using the SunCalc library
function updateSunPosition(sunPos) {
	map.setPaintProperty('sky', 'sky-atmosphere-sun', sunPos);
}

// Get list of SunCalc's default sun positions
// for the current time and location
const sunPositions = SunCalc.getTimes(
	Date.now(),
	map.getCenter().lat,
	map.getCenter().lng
);
// set up event listeners for the buttons to update
// the position of the sun for times of the day
const sunTimeLabels = document.querySelectorAll(
	'#sun input',
	'#getlocal'
);
for (const label of sunTimeLabels) {
	label.addEventListener('click', () => {
		const sunPos =
		label.id === 'getlocal'
		? getSunPosition(new Date())
		: getSunPosition(sunPositions[label.id]);
		updateSunPosition(sunPos);
	});
}

function getSunPosition(date) {
	const center = map.getCenter();
	const sunPos = SunCalc.getPosition(
		date || Date.now(),
		center.lat,
		center.lng
	);
	const sunAzimuth = 180 + (sunPos.azimuth * 180) / Math.PI;
	const sunAltitude = 90 - (sunPos.altitude * 180) / Math.PI;
	return [sunAzimuth, sunAltitude];
}
