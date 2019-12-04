 const places = [{
    id: '1',
    name: 'Colegio Isabel Riquelme',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Colegio+Isabel+Riquelme/@-34.1757465,-70.738342,17z/data=!3m1!4b1!4m5!3m4!1s0x96634346957cadc1:0x257a988721181478!8m2!3d-34.1757465!4d-70.7361533",
    direccion: 'Av. Capitán Ramón Freire 810, Rancagua',
    telefono: '9 5985 5019',
    location: {
        lat: -34.175768,
        lng: -70.736169
    }
}
    , {
    id: '2',
    name: 'Liceo Francisco Tello González',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Liceo+Francisco+Tello+Gonz%C3%A1lez/@-34.172878,-70.7434997,17z/data=!3m1!4b1!4m5!3m4!1s0x9663433f79ee0229:0x54062aa9e55e61c3!8m2!3d-34.172878!4d-70.741311",

    direccion: 'Estado 635, Rancagua',
    telefono: '(72) 222 0853',
    location: {
        lat:-34.172881, 
        lng:-70.741316
    }
},
{
    id: '3',
    name: 'Colegio Patricio Mekis',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Colegio+Patricio+Mekis/@-34.1629908,-70.7285723,16.75z/data=!4m12!1m6!3m5!1s0x9663436696e1f98d:0xecc948490af9be6f!2sColegio+Patricio+Mekis!8m2!3d-34.162669!4d-70.724538!3m4!1s0x9663436696e1f98d:0xecc948490af9be6f!8m2!3d-34.162669!4d-70.724538",

    direccion: 'Juan Martínez de Rozas 658, Rancagua',
    telefono: '(72) 226 1343',
    location: {
        lat: -34.162662,
        lng:  -70.724547
    }
},
{
    id: '4',
    name: 'Colegio Mineral El Teniente',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Colegio+Mineral+El+Teniente/@-34.1758954,-70.7195932,17z/data=!3m1!4b1!4m5!3m4!1s0x966343580fe8dcd7:0x91dfeeec949a9708!8m2!3d-34.1758954!4d-70.7174045",

    direccion: 'Arturo Arancibia 767, Rancagua',
    telefono: '(72) 221 2455',
    location: {
        lat: -34.175901, 
        lng: -70.717409
    }
},
{
    id: '5',
    name: 'Liceo Comercial Jorge Alessandri Rodríguez B-34',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Liceo+Comercial+Jorge+Alessandri+Rodr%C3%ADguez+B-34/@-34.161104,-70.741622,21z/data=!4m5!3m4!1s0x0:0xc8538639bf816f85!8m2!3d-34.1610996!4d-70.7416153",
    direccion: 'Italia 608, Rancagua',
    telefono: '(72) 223 6641',
    location: {
        lat: -34.161104, 
        lng: -70.741622
    }
},
{
    id: '6',
    name: 'Colegio el Cobre de los Andes',
    descripcion: '',
    place:"https://www.google.com/maps/place/Colegio+el+Cobre+de+los+Andes/@-34.1465092,-70.7433638,17z/data=!3m1!4b1!4m5!3m4!1s0x9663436aeafd840b:0x3bf5eb23675bb0aa!8m2!3d-34.1465137!4d-70.7411751",

    direccion: 'Kennedy 1503, Rancagua',
    telefono: '(72) 225 4527',
    location: {
        lat: -34.146518,
        lng:  -70.741172
    }
},
{
    id: '7',
    name: 'Liceo Técnico de Rancagua',
    descripcion: '',
    place:"https://www.google.com/maps/place/Liceo+T%C3%A9cnico+de+Rancagua/@-34.1766685,-70.7448007,17z/data=!3m1!4b1!4m5!3m4!1s0x96634338c24ece9d:0xd956c21e3e4951bb!8m2!3d-34.176673!4d-70.742612",
    direccion: 'Cachapoal 160, Rancagua',
    telefono: '(72) 222 4249',
    location: {
        lat: -34.176678, 
        lng: -70.742624
    }
},
{
    id: '8',
    name: 'Liceo Libertador Simon Bolívar',
    descripcion: '',
    place:"https://www.google.cl/maps/place/liceo+Libertador+Simon+Bol%C3%ADvar/@-34.167554,-70.7612647,17z/data=!3m1!4b1!4m5!3m4!1s0x9663431ea84f9973:0x854deb0a84f406b8!8m2!3d-34.167554!4d-70.759076",
    direccion: 'Baquedano 390, Rancagua',
    telefono: '',
    location: {
        lat:-34.167564,
        lng: -70.759089
    }
},
{
    id: '9',
    name: 'Liceo Ernesto Pinto Lagarrigue',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Liceo+Ernesto+Pinto+Lagarrigue/@-34.155045,-70.7376207,17z/data=!3m1!4b1!4m5!3m4!1s0x96634373d029fff9:0x805044be7950706f!8m2!3d-34.155045!4d-70.735432",
    direccion: 'Av República de Chile 255, Rancagua',
    telefono: '(72) 258 3533',
    location: {
        lat:-34.155047,
        lng:  -70.735435,
    }
},
{
    id: '10',
    name: 'Liceo Industrial Presidente Pedro Aguirre Cerda',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Liceo+Industrial+Presidente+Pedro+Aguirre+Cerda/@-34.1690885,-70.7262211,17z/data=!3m1!4b1!4m5!3m4!1s0x9663435dc7730dcb:0x1d210973463ac890!8m2!3d-34.169093!4d-70.7240324",
    direccion: 'Parque Comunal, La Victoria , Rancagua',
    telefono: '9 7995 2439',
    location: {
        lat:-34.169093,
        lng:  -70.724091
    }
},
{
    id: '11',
    name: 'Colegio España',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Colegio+Espa%C3%B1a/@-34.177487,-70.7414643,17z/data=!4m12!1m6!3m5!1s0x9663434775aab929:0x49aae43cbf5a87e2!2sColegio+Espa%C3%B1a!8m2!3d-34.177456!4d-70.73934!3m4!1s0x9663434775aab929:0x49aae43cbf5a87e2!8m2!3d-34.177456!4d-70.73934",
    direccion: 'Almarza 1045, Rancagua',
    telefono: '(72) 223 9547',
    location: {
        lat:-34.178337,
        lng:  -70.739588
    }
},
{
    id: '12',
    name: "Instituto Tecnologico Bernardo Ohiggins",
    descripcion: '',
    place:"https://www.google.cl/maps/place/Jose+Bernardo+Cuevas,+Escuela+Bernardo+O'higgins,+Rancagua,+O'Higgins/@-34.1701073,-70.7313873,17z/data=!4m5!3m4!1s0x96634342db4da0ef:0x6d90291ea379003d!8m2!3d-34.1701933!4d-70.7296708",
    direccion: 'Calle Cuevas 0455, Rancagua',
    telefono: '',
    location: {
        lat:-34.170608,
        lng:  -70.729742,
    }
},
{
    id: '13',
    name: 'Colegio Manuel Rodríguez',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Colegio+Manuel+Rodr%C3%ADguez/@-34.1745848,-70.7133662,17z/data=!3m1!4b1!4m5!3m4!1s0x966344a5edbc7f2b:0x4cf0cb045f118134!8m2!3d-34.1745893!4d-70.7111775",
    direccion: 'Miguel Ramírez 1995, Rancagua',
    telefono: '(72) 221 1576',
    location: {
        lat:-34.174593,
        lng:  -70.711173,
    }
},

{
    id: '14',
    name: 'Colegio Santa Filomena',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Colegio+Santa+Filomena/@-34.1667448,-70.7152961,17z/data=!3m1!4b1!4m5!3m4!1s0x966344a1819b948b:0x55de849acf282fed!8m2!3d-34.1667493!4d-70.7131074",
    direccion: 'Los Olivos 1462, Rancagua',
    telefono: '',
    location: {
        lat:-34.166744,
        lng:  -70.713118,
    }
},
{
    id: '15',
    name: 'Colegio Eduardo de Geyter',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Colegio+Eduardo+de+Geyter/@-34.1611679,-70.7433257,17z/data=!3m1!4b1!4m5!3m4!1s0x96634312ce4fdb13:0x9bc1ba6346ae6870!8m2!3d-34.1611724!4d-70.741137",
    direccion: 'Italia 582, Rancagua',
    telefono: '',
    location: {
        lat:-34.161165, 
        lng: -70.741126,
    }
},
{
    id: '16',
    name: 'Colegio República Argentina',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Colegio+Rep%C3%BAblica+Argentina/@-34.1712091,-70.7458809,17z/data=!4m5!3m4!1s0x966343161dd59345:0x72da44562022692d!8m2!3d-34.1710443!4d-70.747791",
    direccion: "O'Carrol #850, D-29, Rancagua, O'Higgins",
    telefono: '9 8659 8864',
    location: {
        lat:-34.171039, 
        lng: -70.747768,
    }
},
{
    id: '17',
    name: 'Colegio Moisés Mussa',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Colegio+Mois%C3%A9s+Mussa/@-34.1712091,-70.7460129,17z/data=!4m5!3m4!1s0x0:0x63c101fd94da683a!8m2!3d-34.1705772!4d-70.7480552",
    direccion: "Oficial Carlos María, O'Carrol 868, Rancagua",
    telefono: '(72) 223 0370',
    location: {
        lat:-34.170717,
        lng: -70.7477644,
    }
},
{
    id: '18',
    name: 'Liceo José Victorino Lastarria',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Liceo+Jos%C3%A9+Victorino+Lastarria/@-34.1773855,-70.7421187,17z/data=!3m1!4b1!4m5!3m4!1s0x9663434779f8521b:0x7d49d2b06e4263e3!8m2!3d-34.17739!4d-70.73993",
    direccion: "Almarza 1013, Rancagua",
    telefono: '(72) 222 6390',
    location: {
        lat:-34.177393, 
        lng: -70.739925,
    }
},
{
    id: '19',
    name: 'Colegio Aurora de Chile',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Colegio+Aurora+de+Chile/@-34.1673998,-70.7329533,17z/data=!3m1!4b1!4m5!3m4!1s0x9663436822db6295:0xaee7f29c6618ba27!8m2!3d-34.1674043!4d-70.7307646",
    direccion: 'Mac Iver, Rancagua',
    telefono: '(72) 222 2769',
    location: {
        lat:-34.167410,
        lng: -70.730769,
    }
},
{
    id: '20',
    name: 'Colegio Marcela Paz',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Colegio+Marcela+Paz/@-34.1779866,-70.7417297,17z/data=!3m1!4b1!4m5!3m4!1s0x9663434775aab929:0xbb21ad8d76e8a09e!8m2!3d-34.1779911!4d-70.739541",
    direccion: 'Almarza 1029, Rancagua',
    telefono: '(72) 222 2758',
    location: {
        lat:-34.177993, 
        lng: -70.739541,
    }
},
{
    id: '21',
    name: ' Liceo Comercial Diego Portales',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Liceo+Comercial+Diego+Portales/@-34.1769625,-70.7414409,17z/data=!3m1!4b1!4m5!3m4!1s0x96634347ec693c9b:0x8ee00783b293208e!8m2!3d-34.176967!4d-70.7392522",
    direccion: 'Almarza 971, Rancagua',
    telefono: '(72) 222 2777',
    location: {
        lat:-34.176963, 
        lng: -70.739264,
    }
},
{
    id: '22',
    name: 'Liceo e Niñas de Rancagua',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Liceo+e+Ni%C3%B1as+de+Rancagua/@-34.1707455,-70.7433087,17z/data=!3m1!4b1!4m5!3m4!1s0x9663433ff11993b3:0xef38fb2bfb5f58aa!8m2!3d-34.17075!4d-70.74112",
    direccion: 'Plaza 475, Rancagua',
    telefono: '9 4147 0592',
    location: {
        lat:-34.170758,
        lng:  -70.741122,
    }
},
{
    id: '23',
    name: 'Liceo Bicentenario Óscar Castro Zúñiga',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Liceo+Bicentenario+%C3%93scar+Castro+Z%C3%BA%C3%B1iga/@-34.1710703,-70.7386065,18.25z/data=!4m5!3m4!1s0x966343404b7054d7:0xf3f20047bdbc8ec1!8m2!3d-34.1710853!4d-70.7378145",
    direccion: 'Almarza 410, Rancagua',
    telefono: '(72) 223 0648',
    location: {
        lat:-34.171086,
        lng:  -70.737814,
    }
},
{
    id: '24',
    name: 'Colegio José A Manso de Velasco',
    descripcion: '',
    place:"https://www.google.cl/maps/place/Colegio+Jos%C3%A9+A+Manso+de+Velasco/@-34.1527905,-70.7421017,17z/data=!3m1!4b1!4m5!3m4!1s0x96634374b07e9a63:0xd9f277ca52f776c9!8m2!3d-34.152795!4d-70.739913",
    direccion: 'Chorrillos 1072, Rancagua',
    telefono: '',
    location: {
        lat:-34.152800, 
        lng: -70.739915,
    }
},

]
export default places