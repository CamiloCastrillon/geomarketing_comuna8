//agrega mapa base
var map = L.map('map',
{
	zoom: 15
}).setView([3.447247066898089, -76.50529548475001], 12); //inserta un papa en el div

var mapabase = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
	{
		maxZoom: 16,
		minZoom: 14,
		attribution: '©OpenStreetMap, ©CartoDB'
	});

mapabase.addTo(map);

