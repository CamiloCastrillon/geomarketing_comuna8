//rangos de color
function getColor(d){
	return 	d > 180 ? '#5EFF00':  //180-240 poblacion alta
			d > 119 ? '#FFEA00':  //119-180 poblacion media
			d > 57  ? '#FFAB37':  //58-119  baja
					  '#FFFFFF';
}

//estilo para los rangos de color
function style_manzanas_geo(feature){
	return{
		fillColor: getColor(feature.properties.pob_media),
		fillOpacity: 1,
		color: ' ',
		opacity: 0,
		weight: 0.1
	};
}

function style_manzanas_geo_hidden(feature){
	return{
		fillColor: getColor(feature.properties.pob_media),
		fillOpacity: 0,
		color: ' ',
		opacity: 0,
		weight: 0.1
	};
}


var manzanas_geo = L.geoJSON();

$.post("php/cargar_manzanas.php",
		{
			peticion: 'cargar_manzanas',
		},function (data, status, feature)
		{
		if(status=='success')
		{
			manzanas_geo_2 = eval('('+data+')');
		}
	});

var removeMarkers_geodemanda = function() {
    map.eachLayer( function(layer) {

      if ( layer.myTag && layer.myTag === "manzanas_geo") {
        map.removeLayer(layer)
          }

        });
}

function geodemanda(){
	if (document.getElementById("btn_geodemanda").checked){
		var manzanas_geo = L.geoJSON(manzanas_geo_2, {
			style: style_manzanas_geo,
			onEachFeature: function(feature,layer) {
				layer.myTag = "manzanas_geo"
			}}).addTo(map);

		document.getElementById("text_tools_geode").classList.toggle('active');
		document.getElementById("leyenda_geodemanda").classList.toggle('active');

	}else{
		removeMarkers_geodemanda();
		document.getElementById("text_tools_geode").classList.toggle('active');
		document.getElementById("leyenda_geodemanda").classList.toggle('active');
	}
}