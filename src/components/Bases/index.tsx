import React from "react"
import "./styles.css"

const Bases: React.FC = () => {
  return (
    <div className="mt-5">
      <h4 className="title">ORDENANZA / REGLAMENTO</h4>
      <p className="justify">
        Con fecha XXX de diciembre de 2019 el Concejo Municipal aprobó por unanimidad la Ordenanza
        Nº XXX que regula la siguiente Consulta Ciudadana.
      </p>
      <button className="btn btn-lg btn-danger">Descargar la ordenanza</button>
    </div>
  )
}

export default Bases
