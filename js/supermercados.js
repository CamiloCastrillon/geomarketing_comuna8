//estilo 
function style_merca(feature){
	return{
		fillColor: '#F200FF',
		fillOpacity: 1,
		color: '',
		opacity: 0,
		weight: 0.8
	};
}

//carga la capa como geojson desde la gdb
var super_mercados = L.geoJSON();
$.post("php/cargar_supermercados.php",
		{
			peticion: 'cargar_supermercados',
		},function (data, status, feature)
		{
		if(status=='success')
		{
			super_mercados_2 = eval('('+data+')');
			var super_mercados = L.geoJSON(super_mercados_2, {
				style: style_merca,
				onEachFeature: oneachfeature,
			}).addTo(map);
			
	        super_mercados.eachLayer(function (layer) {
	          layer.setZIndexOffset(2000);
	        });
		}
	});