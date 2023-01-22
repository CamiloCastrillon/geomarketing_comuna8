//agrega control para ver los datos al pasar el puntero
var info = L.control();

//crea un div con la clase info
info.onAdd = function(map){
	this._div = document.getElementById("menu_info");
	this.update();
	return this._div;
};

//agrega el metodo para actualizar el control segun pasa el puntero
info.update = function(props){
	this._div.innerHTML =	'<h2><p>Información Demográfica</p><h2>'+

							'<h5>Barrio</h5>'+ '<br/>'+
							'<h4>Nombre:</h4>' + '<br/>' +
							(props ? '<h4>'+ props.barrio + '</h4>'
							: '<h4>...</h4>') + '<br/>' +

							'<h4>Estrato:</h4>' + '<br/>' +
							(props ? '<h4>'+ props.estra_moda + '</h4>'
							: '<h4>...</h4>') + '<br/>' +

							'<h4>Número de viviendas en el barrio:</h4>' + '<br/>' +
							(props ? '<h4>'+ props.tot_vivi + '</h4>'
							: '<h4>...</h4>') + '<br/>' +

							'<br/>' + '<h5>Manzanas</h5>' + '<br/>' +

							'<h4>poblacion media:</h4>' + '<br/>' +
							(props ? '<h4>'+ props.pob_media + '</h4>'
							: '<h4>...</h4>')+ '<br/>' +

							'<br/>' + '<h5>Supermercados</h5>' + '<br/>' +

							'<h4>Nombre:</h4>' + '<br/>' +
							(props ? '<h4>'+ props.___nombre + '</h4>'
							: '<h4>...</h4>') + '<br/>' +

							'<h4>Dirección:</h4>' + '<br/>' +
							(props ? '<h4>'+ props.___direccion + '</h4>'
							: '<h4>...</h4>') + '<br/>' +

							'<h4>Tipo:</h4>' + '<br/>' +
							(props ? '<h4>'+ props.___tipo + '</h4>'
							: '<h4>...</h4>') + '<br/>' +

							'<h4>Tiempo estimado de desplazamiento en minutos:</h4>' + '<br/>' +
							(props ? '<h4>'+ props.tiempo_min + '</h4>'
							: '<h4>...</h4>') + '<br/>' +

							'<br/>' + '<h5>Corredores urbanos</h5>' + '<br/>' +

							'<h4>Tiempo estimado de desplazamiento en minutos:</h4>' + '<br/>' +
							(props ? '<h4>'+ props.tiempo_minutos + '</h4>'
							: '<h4>...</h4>') + '<br/>'

};

info.addTo(map);

//interaccion del puntero para resaltar
function highlightfeatute(e) {
	var layer = e.target;
	info.update(layer.feature.properties);
};

//configura los cambios de resaltado y zoom de la capa
function resethighlight(e){

	info.update();
};

function zoomtofeature(e){
	map.fitBounds(e.target.getBounds());
};

function oneachfeature(feature, layer){
	layer.on({
		mouseover: highlightfeatute,
		mouseout: resethighlight,
		click: zoomtofeature
	});
};