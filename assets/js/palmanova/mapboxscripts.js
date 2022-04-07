// Basemap switch
map.on('style.load', function() {
	addMarkers();
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
			[13.287429,45.895421], // southwestern corner of the bounds
			[13.335665,45.915662] // northeastern corner of the bounds
		]);
	});
	// END of Return to map extent
