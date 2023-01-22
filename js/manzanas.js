//estilo 
function style_manzanas(feature){
	return{
		fillColor: '#E6E0F8',
		fillOpacity: 0.3,
		color: '#380B61',
		opacity: 1,
		weight: 0.3
	};
}

//carga la capa como geojson desde la gdb
var manzanas = L.geoJSON();
$.post("php/cargar_manzanas.php",
		{
			peticion: 'cargar_manzanas',
		},function (data, status, feature)
		{
		if(status=='success')
		{
			manzanas2 = eval('('+data+')');
			var manzanas = L.geoJSON(manzanas2, {
				style: style_manzanas,
				onEachFeature: oneachfeature,
			}).addTo(map);

	        manzanas.eachLayer(function (layer) {
	          layer.setZIndexOffset(2000);
	        });
		}
	});