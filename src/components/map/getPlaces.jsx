const places = [
	{
		id: '1',
		name: 'Colegio Eduardo de Geyter',
		sector: 'Norte',
		place:
			'https://www.google.cl/maps/place/Colegio+Eduardo+de+Geyter/@-34.1611679,-70.7433257,17z/data=!3m1!4b1!4m5!3m4!1s0x96634312ce4fdb13:0x9bc1ba6346ae6870!8m2!3d-34.1611724!4d-70.741137',
		direccion: 'Italia 582, Rancagua',
		telefono: '',
		location: {
			lat: -34.161165,
			lng: -70.741126
		}
	},
	{
		id: '2',
		name: 'Colegio el Cobre de los Andes',
		sector: 'Norte',
		place:
			'https://www.google.com/maps/place/Colegio+el+Cobre+de+los+Andes/@-34.1465092,-70.7433638,17z/data=!3m1!4b1!4m5!3m4!1s0x9663436aeafd840b:0x3bf5eb23675bb0aa!8m2!3d-34.1465137!4d-70.7411751',

		direccion: 'Kennedy 1503, Rancagua',
		telefono: '(72) 225 4527',
		location: {
			lat: -34.146518,
			lng: -70.741172
		}
	},
	{
		id: '3',
		name: 'Colegio José A Manso de Velasco',
		sector: 'Norte',
		place:
			'https://www.google.cl/maps/place/Colegio+Jos%C3%A9+A+Manso+de+Velasco/@-34.1527905,-70.7421017,17z/data=!3m1!4b1!4m5!3m4!1s0x96634374b07e9a63:0xd9f277ca52f776c9!8m2!3d-34.152795!4d-70.739913',
		direccion: 'Chorrillos 1072, Rancagua',
		telefono: '',
		location: {
			lat: -34.1528,
			lng: -70.739915
		}
	},

	{
		id: '4',
		name: 'Colegio Pablo Garrido',
		sector: 'Sur',
		place:
			'https://www.google.cl/maps/place/Colegio+Pablo+Garrido/@-34.1888909,-70.7326251,17z/data=!3m1!4b1!4m5!3m4!1s0x9663434d49d105fd:0x705c9ad3fb53210c!8m2!3d-34.1888909!4d-70.7304364',
		direccion: 'Lord Cochrane 637, Rancagua',
		telefono: '9 8562 3419',
		location: {
			lat: -34.188899,
			lng: -70.730441
		}
	},
	{
		id: '5',
		name: 'Colegio España',
		sector: 'Sur',
		place:
			'https://www.google.cl/maps/place/Colegio+Espa%C3%B1a/@-34.177487,-70.7414643,17z/data=!4m12!1m6!3m5!1s0x9663434775aab929:0x49aae43cbf5a87e2!2sColegio+Espa%C3%B1a!8m2!3d-34.177456!4d-70.73934!3m4!1s0x9663434775aab929:0x49aae43cbf5a87e2!8m2!3d-34.177456!4d-70.73934',
		direccion: 'Almarza 1045, Rancagua',
		telefono: '(72) 223 9547',
		location: {
			lat: -34.178337,
			lng: -70.739588
		}
	},
	{
		id: '6',
		name: 'Colegio Marcela Paz',
		sector: 'Sur',
		place:
			'https://www.google.cl/maps/place/Colegio+Marcela+Paz/@-34.1779866,-70.7417297,17z/data=!3m1!4b1!4m5!3m4!1s0x9663434775aab929:0xbb21ad8d76e8a09e!8m2!3d-34.1779911!4d-70.739541',
		direccion: 'Almarza 1029, Rancagua',
		telefono: '(72) 222 2758',
		location: {
			lat: -34.177993,
			lng: -70.739541
		}
	},
	{
		id: '7',
		name: 'Escuela Municipal Carlos Miranda',
		sector: 'Sur',
		place:
			'https://www.google.cl/maps/place/Escuela+Municipal+Carlos+Miranda/@-34.1771097,-70.7486827,17z/data=!4m5!3m4!1s0x966343caebeba04b:0xb02bda73f65b4c26!8m2!3d-34.1771142!4d-70.746494',
		direccion: 'Bueras 356-302, Rancaguasector',
		telefono: '(72) 222 2747',
		location: {
			lat: -34.177129,
			lng: -70.746464
		}
	},

	{
		id: '8',
		name: 'Centro Cultural y Teatro Baquedano',
		sector: 'Poniente',
		place:
			'https://www.google.cl/maps/place/Centro+Cultural+y+Teatro+Baquedano/@-34.1670095,-70.7624249,17z/data=!3m1!4b1!4m5!3m4!1s0x9663431c2338c065:0xcb22d886f18549fd!8m2!3d-34.167014!4d-70.7602362',
		direccion: 'Baquedano 445, Rancagua',
		telefono: '(72) 222 5759',
		location: {
			lat: -34.167015,
			lng: -70.760237
		}
	},
	{
		id: '9',
		name: 'Colegio Jean Piaget',
		sector: 'Poniente',
		place:
			'https://www.google.cl/maps/place/Colegio+Jean+Piaget/@-34.1732773,-70.7587071,15z/data=!4m5!3m4!1s0x0:0xf32d69a5e874dbc1!8m2!3d-34.1718648!4d-70.7588705',
		direccion: 'Veintiuno de Mayo N 340, Rancagua',
		telefono: '',
		location: {
			lat: -34.171867,
			lng: -70.758906
		}
	},
	{
		id: '10',
		name: 'Colegio Leonardo Da Vinci ',
		sector: 'Poniente',
		place:
			'https://www.google.cl/maps/place/Colegio+Leonardo+Da+Vinci+Rancagua+Centro/@-34.1819213,-70.7712829,17z/data=!3m1!4b1!4m5!3m4!1s0x966342d973d7f917:0x5df300d187e9e417!8m2!3d-34.1819258!4d-70.7690942',
		direccion: 'Av Provincial 2770, Rancagua',
		telefono: '(72) 295 4243',
		location: {
			lat: -34.181918,
			lng: -70.769103
		}
	},
	{
		id: '11',
		name: 'Colegio Moisés Mussa',
		sector: 'Centro',
		place:
			'https://www.google.cl/maps/place/Colegio+Mois%C3%A9s+Mussa/@-34.1712091,-70.7460129,17z/data=!4m5!3m4!1s0x0:0x63c101fd94da683a!8m2!3d-34.1705772!4d-70.7480552',
		direccion: "Oficial Carlos María, O'Carrol 868, Rancagua",
		telefono: '(72) 223 0370',
		location: {
			lat: -34.170717,
			lng: -70.7477644
		}
	},
	{
		id: '12',
		name: 'Colegio República Argentina',
		sector: 'Centro',
		place:
			'https://www.google.cl/maps/place/Colegio+Rep%C3%BAblica+Argentina/@-34.1712091,-70.7458809,17z/data=!4m5!3m4!1s0x966343161dd59345:0x72da44562022692d!8m2!3d-34.1710443!4d-70.747791',
		direccion: "O'Carrol #850, D-29, Rancaguasector",
		telefono: '9 8659 8864',
		location: {
			lat: -34.171039,
			lng: -70.747768
		}
	},
	{
		id: '13',
		name: 'Liceo Francisco Tello González',
		sector: 'Centro',
		place:
			'https://www.google.cl/maps/place/Liceo+Francisco+Tello+Gonz%C3%A1lez/@-34.172878,-70.7434997,17z/data=!3m1!4b1!4m5!3m4!1s0x9663433f79ee0229:0x54062aa9e55e61c3!8m2!3d-34.172878!4d-70.741311',

		direccion: 'Estado 635, Rancagua',
		telefono: '(72) 222 0853',
		location: {
			lat: -34.172881,
			lng: -70.741316
		}
	},
	{
		id: '14',
		name: 'Liceo Bicentenario Óscar Castro Zúñiga',
		sector: 'Centro',
		place:
			'https://www.google.cl/maps/place/Liceo+Bicentenario+%C3%93scar+Castro+Z%C3%BA%C3%B1iga/@-34.1710703,-70.7386065,18.25z/data=!4m5!3m4!1s0x966343404b7054d7:0xf3f20047bdbc8ec1!8m2!3d-34.1710853!4d-70.7378145',
		direccion: 'Almarza 410, Rancagua',
		telefono: '(72) 223 0648',
		location: {
			lat: -34.171086,
			lng: -70.737814
		}
	},
	{
		id: '15',
		name: "Instituto Tecnico Minero Bernardo O'Higgins",
		sector: 'Centro',
		place:
			"https://www.google.cl/maps/place/Instituto+Tecnico+Minero+Bernardo+O'Higgins/@-34.1705879,-70.7321045,17z/data=!3m1!4b1!4m5!3m4!1s0x96634315495b5483:0x2fcfefe783dc5fff!8m2!3d-34.1705924!4d-70.7299158",
		direccion: 'Calle Cuevas 0455, Rancagua',
		telefono: '',
		location: {
			lat: -34.170608,
			lng: -70.729742
		}
	},
	{
		id: '16',
		name: 'Colegio Aurora de Chile',
		sector: 'Centro',
		place:
			'https://www.google.cl/maps/place/Colegio+Aurora+de+Chile/@-34.1673998,-70.7329533,17z/data=!3m1!4b1!4m5!3m4!1s0x9663436822db6295:0xaee7f29c6618ba27!8m2!3d-34.1674043!4d-70.7307646',
		direccion: 'Mac Iver, Rancagua',
		telefono: '(72) 222 2769',
		location: {
			lat: -34.16741,
			lng: -70.730769
		}
	},
	{
		id: '17',
		name: 'Colegio Isabel Riquelme',
		sector: 'Centro',
		place:
			'https://www.google.cl/maps/place/Colegio+Isabel+Riquelme/@-34.1757465,-70.738342,17z/data=!3m1!4b1!4m5!3m4!1s0x96634346957cadc1:0x257a988721181478!8m2!3d-34.1757465!4d-70.7361533',
		direccion: 'Av. Capitán Ramón Freire 810, Rancagua',
		telefono: '9 5985 5019',
		location: {
			lat: -34.175768,
			lng: -70.736169
		}
	},
	{
		id: '18',
		name: 'Colegio Mineral El Teniente',
		sector: 'Centro',
		place:
			'https://www.google.cl/maps/place/Colegio+Mineral+El+Teniente/@-34.1758954,-70.7195932,17z/data=!3m1!4b1!4m5!3m4!1s0x966343580fe8dcd7:0x91dfeeec949a9708!8m2!3d-34.1758954!4d-70.7174045',

		direccion: 'Arturo Arancibia 767, Rancagua',
		telefono: '(72) 221 2455',
		location: {
			lat: -34.175901,
			lng: -70.717409
		}
	},
	{
		id: '19',
		name: 'Colegio Santa Filomena',
		sector: 'Oriente',
		place:
			'https://www.google.cl/maps/place/Colegio+Santa+Filomena/@-34.1667448,-70.7152961,17z/data=!3m1!4b1!4m5!3m4!1s0x966344a1819b948b:0x55de849acf282fed!8m2!3d-34.1667493!4d-70.7131074',
		direccion: 'Los Olivos 1462, Rancagua',
		telefono: '',
		location: {
			lat: -34.166744,
			lng: -70.713118
		}
	},
	{
		id: '20',
		name: 'Colegio Manuel Rodríguez',
		sector: 'Oriente',
		place:
			'https://www.google.cl/maps/place/Colegio+Manuel+Rodr%C3%ADguez/@-34.1745848,-70.7133662,17z/data=!3m1!4b1!4m5!3m4!1s0x966344a5edbc7f2b:0x4cf0cb045f118134!8m2!3d-34.1745893!4d-70.7111775',
		direccion: 'Miguel Ramírez 1995, Rancagua',
		telefono: '(72) 221 1576',
		location: {
			lat: -34.174593,
			lng: -70.711173
		}
	},
	{
		id: '21',
		name: 'Colegio Patricio Mekis',
		sector: 'Oriente',
		place:
			'https://www.google.cl/maps/place/Colegio+Patricio+Mekis/@-34.1629908,-70.7285723,16.75z/data=!4m12!1m6!3m5!1s0x9663436696e1f98d:0xecc948490af9be6f!2sColegio+Patricio+Mekis!8m2!3d-34.162669!4d-70.724538!3m4!1s0x9663436696e1f98d:0xecc948490af9be6f!8m2!3d-34.162669!4d-70.724538',

		direccion: 'Juan Martínez de Rozas 658, Rancagua',
		telefono: '(72) 226 1343',
		location: {
			lat: -34.162662,
			lng: -70.724547
		}
	},
	{
		id: '22',
		name: 'Liceo Santa Cruz de Triana',
		sector: 'Oriente',
		place:
			'https://www.google.cl/maps/place/Liceo+Santa+Cruz+de+Triana/@-34.1499452,-70.7117549,17z/data=!3m1!4b1!4m5!3m4!1s0x96634483696efdcf:0x44a4e7c9fd5ed77!8m2!3d-34.1499452!4d-70.7095662',
		direccion: "Constanza, Rancagua, O'Higgins",
		telefono: '(72) 226 4100',
		location: {
			lat: -34.149947,
			lng: -70.709611
		}
	},

	{
		id: '23',
		name: "Colegio Augusto D'halmar",
		sector: 'Oriente',
		place:
			"https://www.google.cl/maps/place/colegio+augusto+d'halmar/@-34.1498593,-70.7267362,14z/data=!4m8!1m2!2m1!1sColegio+Augusto+D'Halmar!3m4!1s0x9663439f8fa0f047:0x26de256df6bcab05!8m2!3d-34.1463764!4d-70.7400701",
		direccion: 'Av La Compañía, Rancagua',
		telefono: '',
		location: {
			lat: -34.146382,
			lng: -70.740073
		}
	},

	{
		id: '24',
		name: 'Colegio Jose Manuel Balmaceda',
		sector: 'Rural',
		place:
			'https://www.google.cl/maps/place/Colegio+Jose+Manuel+Balmaceda/@-34.1512153,-70.7692182,17z/data=!3m1!4b1!4m5!3m4!1s0x966342550b61f18f:0x992d75288999b76!8m2!3d-34.1512198!4d-70.7670295',
		direccion: 'Av Salvador Allende 3300, Rancagua',
		telefono: '',
		location: {
			lat: -34.151223,
			lng: -70.767028
		}
	},
	{
		id: '25',
		name: 'Colegio Marta Brunet',
		sector: 'Rural',
		place:
			'https://www.google.cl/maps/place/Colegio+Marta+Brunet/@-34.1773539,-70.8317737,17z/data=!3m1!4b1!4m5!3m4!1s0x9663683bde59174f:0xa1b3c07b38d9b89a!8m2!3d-34.1773584!4d-70.829585',
		direccion: 'H-260 391, Rancagua',
		telefono: '(72) 224 5393',
		location: {
			lat: -34.17736,
			lng: -70.829593
		}
	},
	{
		id: '26',
		name: 'Colegio Virginia Bravo',
		sector: 'Rural',
		place:
			'https://www.google.cl/maps/place/Colegio+Virginia+Bravo/@-34.1012862,-70.8112846,17z/data=!3m1!4b1!4m5!3m4!1s0x966341e232c0a493:0x3e2e69940163ae63!8m2!3d-34.1012907!4d-70.8090959',
		direccion: 'Rinconada la chica, Chancón, Rancagua',
		telefono: '',
		location: {
			lat: -34.101291,
			lng: -70.809101
		}
	},
	{
		id: '27',
		name: 'Universidad de O`Higgins',
		sector: 'Norte',
		place: `https://www.google.cl/maps/place/Libertador+Bernardo+O'Higgins+611,+Rancagua,+O'Higgins/@-34.1643825,-70.7438284,17z/data=!4m13!1m7!3m6!1s0x966343135916de85:0x7b0fb07a5197ac6f!2sLibertador+Bernardo+O'Higgins+611,+Rancagua,+O'Higgins!3b1!8m2!3d-34.164387!4d-70.7416397!3m4!1s0x966343135916de85:0x7b0fb07a5197ac6f!8m2!3d-34.164387!4d-70.7416397`,
		direccion: 'Av Bdo Ohiggins 611, Rancagua',
		telefono: '',
		location: {
			lat: -34.164387,
			lng: -70.7416397
		}
	},
	{
		id: '28',
		name: 'Colegio Hermanos Carrera',
		sector: 'Oriente',
		place: `https://www.google.cl/maps/place/Av.+Illanes+345,+Rancagua,+O'Higgins/@-34.1628651,-70.7360173,17z/data=!3m1!4b1!4m5!3m4!1s0x9663436eb47dbe05:0xb7bc7bbf7f42e43!8m2!3d-34.1628696!4d-70.7338286`,
		direccion: 'Illanes 0345 Camino La Cruz, Rancagua',
		telefono: '',
		location: {
			lat: -34.1628696,
			lng: -70.7338286
		}
	},
	{
		id: '29',
		name: 'Union Comunal de Adulto Mayor',
		sector: 'Centro',
		place: `https://www.google.cl/maps/place/H%C3%A9ctor+Zamorano+419,+Rancagua,+O'Higgins/@-34.1758955,-70.7239989,17z/data=!3m1!4b1!4m5!3m4!1s0x9663435991e399b5:0x3f3a5daa65645291!8m2!3d-34.1759!4d-70.7218102`,
		direccion: 'Hector Zamorano 419, Rancagua',
		telefono: '',
		location: {
			lat: -34.1759,
			lng: -70.7218102
		}
	}
]
export default places
