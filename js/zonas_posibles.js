//estilo para los rangos de color
function style_zonas(feature){
	return{
		fillColor: '#024D00',
		fillOpacity: 1,
		color: ' ',
		opacity: 0,
		weight: 0.1
	};
}

var zonas = L.geoJSON();

$.post("php/cargar_zonas.php",
	{
		peticion: 'cargar_zonas',
	},function (data, status, feature)
	{
	if(status=='success')
	{
		zonas_2 = eval('('+data+')');
	}
});

var removeMarkers_zonas = function() {
    map.eachLayer( function(layer) {

      if ( layer.myTag && layer.myTag === "zonas") {
        map.removeLayer(layer)
          }

        });
}

function zonas_posibles(){
	if (document.getElementById("btn_zonas").checked){
		var zonas = L.geoJSON(zonas_2, {
			style: style_zonas,
			onEachFeature: function(feature,layer) {
				layer.myTag = "zonas"
			}}).addTo(map);

		document.getElementById("text_tools_zonas").classList.toggle('active');
		document.getElementById("leyenda_zonas").classList.toggle('active');

	}else{
		removeMarkers_zonas();
		document.getElementById("text_tools_zonas").classList.toggle('active');
		document.getElementById("leyenda_zonas").classList.toggle('active');
	}
}