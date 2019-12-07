import React from "react";
import "./styles.css";

const Vote: React.FC = () => {
  return (
    <div>
    <h4 className="title">Votos</h4>
     <p>Durante la consulta se entregarán 3 papeletas:</p>
     <p></p>

    <div className="card">
        <div className="card-body">
          <h4 className="card-title">INSTITUCIONAL</h4>
          <p className="card-text">
            En primer lugar, se deben pronunciar sobre temas institucionales, tales como una nueva Constitución y si el voto debe ser voluntario u obligatorio, entre otros.
          </p>
        </div>
        <img
          src="assets/Voto 1 Consulta.png"
          width="100%"
          className="images"
        />
      </div>
      <p></p>

      <div className="card">
        <div className="card-body">
          <h4 className="card-title">SOCIAL</h4>
          <p className="card-text">
          En un segundo voto, los vecinos deberán pronunciarse sobre la agenda social, donde deben elegir los tres temas más importantes para resolver.
          </p>
        </div>
        <img src="assets/Voto 2 Consulta.png" width="100%" />
      </div>
      <p></p>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">COMUNAL</h4>
          <p className="card-text">
          Finalmente, en la tercera papeleta, cada municipio deberá instalar los temas de interés local y regional. Este voto es exclusivo de cada comuna.
          </p>
        </div>
      {/*  <img src="assets/Voto 3 Consulta.png" width="100%" /> */}
      </div>
    </div>
  );
};

export default Vote;
