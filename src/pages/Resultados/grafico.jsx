import React, { Fragment } from "react";
//
import { Chart } from "react-charts";
let sourceCode;
export default props => {
  console.log(props);
  var d = props.data.respuestas.map(function(item, index) {
    let r = [item.respuesta, item.porcentaje];
    return r;
  });
  console.log(d);

  const data = React.useMemo(
    () => [
      {
        label: "Resultado en %",
        data: d //[["SI", 0], ["No", 0]]
      }
    ],
    []
  );
  const series = React.useMemo(
    () => ({
      type: "bar"
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { position: "left", type: "linear", stacked: false }
    ],
    []
  );
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          height: "100vh"
        }}
      >
        <Chart data={data} axes={axes} series={series} tooltip />
      </div>
    </Fragment>
  );
};
