import React, { useState, useEffect } from "react";

import Map from "./map2";

const LocalesMap = props => {

  return (
    <div>
      <div className="Map mt-5">
        <div>
          <h4 className="title">HORARIO Y LUGARES DE VOTACIÓN</h4>
          <p>
            Esta consulta ciudadana ofrece una alternativa de participación democrática vinculante para la construcción de una nueva Constitución, asegurando la mayor representatividad de todos los actores de la ciudadanía y garantizando su participación.
  Es por esto que invitamos a toda la ciudadania a participar de manera simultánea y en todo el territorio nacional, el día domingo 15 de diciembre de 2019, entre las 08:00 a 18:00 horas, en los diferentes locales de votación, que podrás consultar en la tabla o en el mapa a continuación.
          </p>
        </div>
        {/* <img className='img-fluid' src='assets/mapa.png' /> */}
        <Map></Map>
      </div>
    </div>
  );
};

export default LocalesMap;
