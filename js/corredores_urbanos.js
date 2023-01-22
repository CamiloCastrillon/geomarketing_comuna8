//estilo 
function style_cu(feature){
	return{
		fillColor: '#000437',
		fillOpacity: 1,
		color: '',
		opacity: 0,
		weight: 0.8
	};
}

//carga la capa como geojson desde la gdb
var corredores_urbanos = L.geoJSON();
$.post("php/cargar_corredores_urbanos.php",
		{
			peticion: 'cargar_corredores_urbanos',
		},function (data, status, feature)
		{
		if(status=='success')
		{
			cu2 = eval('('+data+')');
			var corredores_urbanos = L.geoJSON(cu2, {
				style: style_cu,
			}).addTo(map);

	        corredores_urbanos.eachLayer(function (layer) {
	          layer.setZIndexOffset(2000);
	        });
		}
	});