import React, { Fragment } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import GraficoPregunta1 from "./graficos1";
const Resultados = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <h4 className="title">
          Resultados Consulta Ciudadana Municipal Rancagua 2019.
        </h4>
      </div>
      <div className="container">
        <div className="row">filtros</div>
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  ¿Esta de acuerdo o en desacuerdo con que Chile tenga una nueva
                  Constitución?
                </h5>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text"
                      for="inputGroupSelect01"
                    >
                      Lugar
                    </label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01">
                    <option className>Todos</option>
                    <option className="1">Colegio 1</option>
                    <option className="2">Colegio 2</option>
                    <option className="3">Colegio 3</option>
                  </select>
                </div>
                <GraficoPregunta1 />
                <p />
                <div>
                  <p>Tabla de Resultados</p>
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Respuesta</th>
                        <th scope="col">%</th>
                        <th scope="col">Número de Votos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Si</th>
                        <td>68</td>
                        <td>54222</td>
                      </tr>
                      <tr>
                        <th scope="row">No</th>
                        <td>32</td>
                        <td>12222</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pregunta 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pregunta 3</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};
export default Resultados;
