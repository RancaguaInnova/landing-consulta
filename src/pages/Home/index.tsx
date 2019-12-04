import React from "react"
import Map from "components/map"
import Bases from "components/Bases"
import Header from "components/Header"
import Footer from "components/Footer"
import "./styles.css"
import { Link } from "@reach/router"

const Home: React.FC = () => {
  return (
    <div>
      <Header />

      <div className="container mt-4 justify">
        <p className="justify">
          La Consulta Ciudadana es un mecanismo de participación ciudadana contemplada en el
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
        <p className="justify">
          La Asociación Chilena de Municipalidades (AChM) fue mandatado por los alcaldes,
          alcaldesas, concejales y concejalas del país para realizar una Consulta Nacional el día 15
          de diciembre en busca de solución a los temas que está demandando la ciudadanía en un
          proceso transparente y democrático. La Ilustre Municipalidad de Rancagua no se quiso
          restar de este proceso y adhirió a esta consulta.
        </p>
        <p className="justify">
          <h4 className="title Centro">INFORMACIÓN IMPORTANTE</h4>
          <p className="justify">
            Para esta consulta podrán votar las personas que tengan entre 14 y 18 años previo
            registro en el lugar de votación. Para los mayores de edad será requisito contar con
            domicilio electoral en Rancagua proporcionado por el Servicio Electoral de Chile
            (SERVEL) La Consulta Ciudadana en Rancagua se realizará en forma presencial con registro
            y voto digital.
          </p>
          <p className="justify">
            El registro y voto digital estará a cargo de un proveedor de software que cumple con los
            estándares de seguridad que la AChM recomienda para estos efectos y permite que las
            personas que deseen participar solo deben dirigirse a cualquiera de los lugares de
            votación y garantiza que no exista duplicidad de voto. Para aquellos que requieran
            asistencia especial o pertenezcan a la tercera edad y así lo requieran se habilitará en
            cada lugar de votación una mesa con voto en papel (voto tradicional) previo registro
            electrónico en el mismo lugar.
          </p>
        </p>
        <h5 className="margin">
          En esta Consulta Ciudadana cada persona tendrá 3 votos a disposición:
        </h5>
        <p>
          <div className="TextoIz">
            Un primer voto de caracter Institucional que contiene la siguientes preguntas:
            <img src="assets/voto1.jpeg" alt="voto1" className="imagen"></img>
          </div>
          <div className="TextoIz">
            Un segundo voto de caracter Social que contiene las siguientes preguntas:
            <img src="assets/voto2.jpeg" alt="voto2" className="imagen"></img>
          </div>
          Un tercer voto de caracter Comunal que contiene las siguientes preguntas:
        </p>
        <hr />

        <Bases />
        <hr />
        <Map />
        <hr />
        <div className="mt-5">
          <h4 className="title">INSCRIPCIÓN DE VOLUNTARIOS</h4>
          <p>
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
