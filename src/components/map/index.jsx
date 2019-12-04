import React, { useState, useEffect } from "react";

import Map from "./map2";

const LocalesMap = props => {

  return (
    <div>
      <div className="Map mt-5">
        <div>
          <h4 className="title">HORARIO Y LUGARES DE VOTACIÓN</h4>
          <p>
            Esta Consulta Ciudadana se realizará el domingo 15 de diciembre entre las 8:00 hrs. y las 16:00 hrs.
  La Municipalidad de Rancagua ofrece una alternativa de participación democrática y con el objetivo de simplificar el proceso de votación a los vecinos es que para votar solo es necesario dirigirse a cualquiera de los siguientes XX puntos de votación habilitados para estos efectos:
  
          </p>
        </div>
        {/* <img className='img-fluid' src='assets/mapa.png' /> */}
        <Map></Map>
      </div>
    </div>
  );
};

export default LocalesMap;
