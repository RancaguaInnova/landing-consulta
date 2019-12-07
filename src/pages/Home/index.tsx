import React, { useState, useEffect } from 'react';
import Map from "components/map"
import Bases from "components/Bases"
import Header from "components/Header"
import Footer from "components/Footer"
import Vote from "components/Vote"
//import { initGA, logPageView } from 'components/analytics'

import "./styles.css"
import { Link } from "@reach/router"

const Home: React.FC = () => {
 // De forma similar a componentDidMount y componentDidUpdate

  return (
    <div>
      <Header />
      <div>  <h2 className="title">Consulta Ciudadana Municipal  Rancagua 2019.</h2></div>
      <div className="container mt-4 Centro">
        El próximo 15 de diciembre se realizará la histórica Consulta Ciudadana Municipal Rancagua 2019, oportunidad en la que cada rancagüino votará por los temas que considera relevantes para la comuna y el país. Invitamos a todas las vecinas y vecinos mayores de 14 años, que tengan su cédula de identidad y que residan en Rancagua, a participar de este importante y único proceso cívico.
      </div>

      <div className="container mt-4 Centro">
        {/*  <p className="Centro">
          <b>La Consulta Ciudadana</b> es un mecanismo de participación ciudadana contemplada en el
          artículo 73 de la Ley N° 18.575, sobre Bases Generales de la Administración del Estado,
          que opera como un espacio para invitar a las personas a participar e incorporar sus
          opiniones para el mejoramiento de la gestión pública. Se configura como una herramienta
          que busca recabar las opiniones que los ciudadanos tengan sobre temas y políticas
          específicas de interés actual, mediante la publicación de documentos virtuales, que
          contienen un determinado planteamiento gubernamental sobre materias de interés ciudadano
          respecto de planes, políticas y programas. Este proceso de consulta pretende generar una
          respuesta de la autoridad que incluya las respuestas y compromisos derivados de los
          planteamientos surgidos durante la consulta.
        </p>
        <p className="Centro">
          La Asociación Chilena de Municipalidades (AChM) fue mandatado por los alcaldes,
          alcaldesas, concejales y concejalas del país para realizar una Consulta Nacional el día 15
          de diciembre en busca de solución a los temas que está demandando la ciudadanía en un
          proceso transparente y democrático. La Ilustre Municipalidad de Rancagua no se quiso
          restar de este proceso y adhirió a esta consulta.
        </p>
        <div className="Centro">

  <h4 className="title">En esta Consulta Ciudadana cada persona tendrá 3 votos a disposición</h4> */}
        <Vote></Vote>
        <hr />
        <p></p>
        <div>
          <h4 className="title">INFORMACIÓN IMPORTANTE</h4>
          <p className="Centro">
            Para esta consulta podrán votar las personas que tengan entre 14 y 18 años con domicilio en la comuna de Rancagua, previo
            registro en el lugar de votación. Para los mayores de edad será requisito contar con
            domicilio electoral en Rancagua proporcionado por el Servicio Electoral de Chile
            (SERVEL),según padrón electoral 2017.  La Consulta Ciudadana en Rancagua se realizará en forma presencial con registro
            y voto digital.
          </p>
          <p className="Centro">
            El registro y voto digital estará a cargo de un proveedor de software que cumple con los
            estándares de seguridad que la AChM recomienda para estos efectos y permite que las
            personas que deseen participar solo deben dirigirse a cualquiera de los lugares de
            votación y garantiza que no exista duplicidad de voto. Para aquellos que requieran
            asistencia especial o pertenezcan a la tercera edad y así lo requieran se habilitará en
            cada lugar de votación una mesa con voto en papel (voto tradicional) previo registro
            electrónico en el mismo lugar.
          </p>
        </div>
        <hr />
        <p></p>
        <div>
          <h4 className="title">Horarios y locales de votación</h4>
          <p className="Centro">
            Las vecinas y vecinos de Rancagua podrán ejercer su derecho a voto el día 15 de diciembre, desde las 08:00 a  16:00 horas. En los siguientes locales destinados para este proceso:
            </p>
          <p className="TextoIz">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Sector</th>
                  <th scope="col">Lugar</th>
                  <th scope="col">Dirección</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Norte</td>
                  <td>Colegio Eduardo de Geyter</td>
                  <td>Italia 582, Rancagua.</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Norte</td>
                  <td>Colegio el Cobre de los Andes</td>
                  <td>Kennedy 1503, Rancagua</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Norte</td>
                  <td> Colegio José A Manso de Velasco</td>
                  <td>Chorrillos 1072, Rancagua</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Sur</td>
                  <td>Colegio Pablo Garrido</td>
                  <td>Lord Cochrane 637, Rancagua</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Sur</td>
                  <td>Colegio España </td>
                  <td>Almarza 1045, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">6</th>
                  <td>Sur</td>
                  <td>Colegio Marcela Paz</td>
                  <td>Almarza 1029, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">7</th>
                  <td>Sur</td>
                  <td>Escuela Municipal Carlos Miranda </td>
                  <td>Bueras 356-302, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">8</th>
                  <td>Poniente</td>
                  <td>Centro Cultural y Teatro Baquedano</td>
                  <td>Baquedano 445, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">9</th>
                  <td>Poniente</td>
                  <td>Colegio Jean Piaget</td>
                  <td>Veintiuno de Mayo N 340, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">10</th>
                  <td>Poniente</td>
                  <td>Colegio Leonardo Da Vinci  </td>
                  <td>Av Provincial 2770, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">11</th>
                  <td>Centro</td>
                  <td>Colegio Moisés Mussa</td>
                  <td> O'Carrol 868, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">12</th>
                  <td>Centro</td>
                  <td>Colegio República Argentina</td>
                  <td>O'Carrol #850, D-29, Rancagua </td>

                </tr>

                <tr>
                  <th scope="row">13</th>
                  <td>Centro</td>
                  <td> Liceo Francisco Tello González</td>
                  <td>Estado 635, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">14</th>
                  <td>Centro</td>
                  <td>Liceo Bicentenario Óscar Castro Zúñiga</td>
                  <td>Almarza 410, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">15</th>
                  <td>Centro</td>
                  <td>Instituto Tecnico Minero Bernardo O'Higgins </td>
                  <td>Calle Cuevas 0455, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">16</th>
                  <td>Centro</td>
                  <td>Colegio Aurora de Chile</td>
                  <td>Mac Iver, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">17</th>
                  <td>Centro</td>
                  <td>Colegio Isabel Riquelme</td>
                  <td>Av. Capitán Ramón Freire 810, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">18</th>
                  <td>Centro</td>
                  <td>Colegio Mineral El Teniente</td>
                  <td>Arturo Arancibia 767, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">19</th>
                  <td>Oriente</td>
                  <td>Colegio Santa Filomena </td>
                  <td>Los Olivos 1462, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">20</th>
                  <td>Oriente</td>
                  <td>Colegio Manuel Rodríguez</td>
                  <td>Miguel Ramírez 1995, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">21</th>
                  <td>Oriente</td>
                  <td>Colegio Patricio Mekis</td>
                  <td>Juan Martínez de Rozas 658, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">22</th>
                  <td>Oriente</td>
                  <td>Liceo Santa Cruz de Triana </td>
                  <td>Constanza, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">23</th>
                  <td>Oriente</td>
                  <td>Colegio Augusto D'Halmar</td>
                  <td>Av La Compañía, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">24</th>
                  <td>Rural</td>
                  <td>Colegio Jose Manuel Balmaceda</td>
                  <td>Av Salvador Allende 3300, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">25</th>
                  <td>Rural</td>
                  <td>Colegio Marta Brunet</td>
                  <td>H-260 391, Rancagua</td>
                </tr>

                <tr>
                  <th scope="row">26</th>
                  <td>Rural</td>
                  <td>Colegio Virginia Bravo</td>
                  <td>Rinconada la chica ,chacón, Rancagua</td>
                </tr>

              </tbody>
            </table>
          </p>
          <p>
           <Map />
          </p>

        </div>
        {/* <div className="Centro">
          <div >
            Un primer voto de caracter Institucional que contiene la siguientes preguntas:
            <img src="assets/voto1.jpeg" alt="voto1" className="imagen"></img>
          </div>
          <div >
            Un segundo voto de caracter Social que contiene las siguientes preguntas:
            <img src="assets/voto2.jpeg" alt="voto2" className="imagen"></img>
          </div>
          Un tercer voto de caracter Comunal que contiene las siguientes preguntas:
        </div>

        <hr />

        <Bases />
        <hr />
     */}
        <hr />
        <p></p>
        <div className="mt-5">
          <h4 className="title">VOLUNTARIOS</h4>
          <p className="Centro">
            Para llevar adelante esta Consulta Ciudadana se requiere de mucho apoyo de parte de la
            comunidad y parte fundamental de este apoyo es el trabajo de los voluntarios y
            voluntarias. Tú puedes ser parte importante de este proceso, guiando a todas y todos los
            rancagüinos para que puedan entregar de buena manera y sin dificultades su opinión. Si
            deseas ser parte de la primera gran consulta ciudadana de la historia de nuestra comuna
            y apoyar a nuestras vecinas y vecinos, te invitamos a inscribierte en el siguiente link:
          </p>
          <div>
            <Link to="voluntarios">
              <button className="btn btn-danger btn-lg">Inscripción de voluntarios</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
