//estilo
function style_barrios(feature){
	return{
		fillColor: '#E0F2F7',
		fillOpacity: 0.5,
		color: '#0000FF',
		opacity: 1,
		weight: 0.5
	};
}

//carga la capa como geojson desde la gdb
var barrios = L.geoJSON();
$.post("php/cargar_barrios.php",
	{
		peticion: 'cargar_barrios',
	},function (data, status, feature)
	{
	if(status=='success')
	{
		barrios2 = eval('('+data+')');
		var barrios = L.geoJSON(barrios2, {
			style: style_barrios,
			onEachFeature: oneachfeature,
		}).addTo(map);
        
        barrios.eachLayer(function (layer) {
          layer.setZIndexOffset(1000);
        });
	}
});