import React from "react";
import _orderBy from "lodash/orderBy";

const tablePlaces = ({ places, ...props }) => {
  return (
    <div className="col">
      <table className="table table-sm  table-striped">
        <thead>
          <tr>
            <th scope="col" className="text-left">
              Sector
            </th>
            <th scope="col" className="text-left">
              Lugar
            </th>
            <th scope="col" className="text-left">
              Respuestas
            </th>
          </tr>
        </thead>
        <tbody>
          {places &&
            _orderBy(places, ["sector", "name"], ["asc", "asc"]).map(function(
              item,
              index
            ) {
              return (
                <tr key={index}>
                  <td className="text-left">{item.sector}</td>
                  <td className="text-left">{item.name}</td>
                  <td className="text-left">
                    <table className="table table-bordered">
                      <thead>
                        <tr className="table-info">
                          <th scope="col">Respuesta</th>
                          <th scope="col">%</th>
                        </tr>
                      </thead>
                      <tbody>
                        {_orderBy(
                          item.respuestas,
                          ["porcentaje", "numeroVotos", "respuesta"],
                          ["desc", "desc", "asc"]
                        ).map(function(res, rin) {
                          return (
                            <tr key={rin}>
                              <td>{res.respuesta}</td>
                              <td>{res.porcentaje}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default tablePlaces;
