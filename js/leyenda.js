//agrega leyenda
var legend = L.control.Legend({
	position: "bottomright",
	collapsed: true,
	symbolWidth: 24,
	opacity: 1,
	column: 1,
	legends: [
		{
			label: "Barrios",
			type: "rectangle",
			fillColor: '#E0F2F7',
			fillOpacity: 0.5,
			color: '#0000FF',
			opacity: 1,
			weight: 0.5,
			layers: barrios
		},
		{
			label: "Manzanas",
			type: "rectangle",
			fillColor: '#E6E0F8',
			fillOpacity: 1,
			color: '#380B61',
			opacity: 1,
			weight: 0.3,
			layers: manzanas
		},
		{
			label: "Corredores urbanos",
			type: "rectangle",
			fillColor: '#000437',
			fillOpacity: 1,
			color: '',
			opacity: 0,
			weight: 0.8,
			layers: corredores_urbanos
		},
		{
			label: "Super mercados",
			type: "rectangle",
			fillColor: '#F200FF',
			fillOpacity: 1,
			color: '',
			opacity: 0,
			weight: 0.8,
			layers: super_mercados
		}
	]
}).addTo(map);