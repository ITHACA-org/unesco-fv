//Load of GeoJSON data
var geojson;
function addSource() {
	map.addSource('vitivinicoli_aree', {
		'type': 'geojson',
		'data': '/../assets/json/areas.geojson'
	});
	// Mapbox default DEM source
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
		'source': 'vitivinicoli_aree', // reference the data source
		'layout': {
			// Make the layer visible by default.
			'visibility': 'visible'
		},
		'paint': {
			'fill-color': [
				'match',
				['get', 'TIPO'],
				'Buffer zone',
				'#feebe2',
				'Core zone',
				'#f768a1',
				'#ccc'
			],
			//'fill-color': '#0080ff', // blue color fill
			'fill-opacity': 0.5
		}
	});
	// Add a black outline around the polygon.
	map.addLayer({
		'id': 'outline_area',
		'type': 'line',
		'source': 'vitivinicoli_aree',
		'layout': {
			// Make the layer visible by default.
			'visibility': 'visible'
		},
		'paint': {
			'line-color': '#000',
			'line-width': 1
		}
	});
map.addLayer({
	'id': 'sky',
	'type': 'sky',
	'paint': {
		'sky-type': 'atmosphere',
		'sky-atmosphere-sun': [0.0, 0.0],
		'sky-atmosphere-sun-intensity': 15
	}
});
// 3D properties
map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.2 });
// END of 3D properties
}
//END of addLayer
