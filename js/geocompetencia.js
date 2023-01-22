 //estilo para los rangos de color
function style_geocompetencia(feature){
	return{
		fillColor: '#FF0000',
		fillOpacity: 0.5,
		color: ' ',
		opacity: 0,
		weight: 0.1
	};
}

var buffers = L.geoJSON();

$.post("php/cargar_geocompetencia.php",
	{
		peticion: 'cargar_geocompetencia',
	},function (data, status, feature)
	{
	if(status=='success')
	{
		buffers_2 = eval('('+data+')');
	}
});

var removeMarkers_geocompetencia = function() {
    map.eachLayer( function(layer) {

      if ( layer.myTag && layer.myTag === "geocompetencia") {
        map.removeLayer(layer)
          }
        });
}

function geocompetencia(){
	if (document.getElementById("btn_geocompetencia").checked){
		var buffers = L.geoJSON(buffers_2, {
			style: style_geocompetencia,
			onEachFeature: function(feature,layer) {
				layer.myTag = "geocompetencia"
			}}).addTo(map);

		document.getElementById("text_tools_geocom").classList.toggle('active');
		document.getElementById("leyenda_geocompetencia").classList.toggle('active');

	}else{
		removeMarkers_geocompetencia();
		document.getElementById("text_tools_geocom").classList.toggle('active');	
		document.getElementById("leyenda_geocompetencia").classList.toggle('active');
	}
}