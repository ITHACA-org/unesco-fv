// Basemap switch
map.on('style.load', function() {
	addSource();
	addLayer();
});
function switchLayer(layer) {
	var layerId = layer.target.id;
	map.setStyle('mapbox://styles/guercusguo/' + layerId);
};
for (var i = 0; i < inputs.length; i++) {
	inputs[i].onclick = switchLayer; }
	// still incomplete
	// End of Basemap switch
	map.addControl(new mapboxgl.NavigationControl());

	// Return to map extent
	document.getElementById('fit').addEventListener('click', function () {
		map.fitBounds([
			[9.619919, 45.691942], // southwestern corner of the bounds
			[9.687452, 45.718120] // northeastern corner of the bounds
		]);
	});
	// END of Return to map extent
