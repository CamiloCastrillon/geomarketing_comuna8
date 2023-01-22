//agregar mini mapa
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

var minimap = new L.Control.MiniMap(carto_light,
	{
		toggleDisplay: true,
		minimized: false,
		position: "bottomleft"
	}).addTo(map);
	
	//agrega escala
	new L.control.scale({imperial: false}).addTo(map);