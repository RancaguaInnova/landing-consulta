import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const Chart = props => {
  console.log(props);
  const title = props.data.respuesta;
  var data = props.data.respuestas.map(function(item, index) {
    let r = { name: item.respuesta, porcentaje: item.porcentaje };
    return r;
  });

  return (
    <BarChart
      width={360}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="porcentaje" lfill="#8884d8" />
    </BarChart>
  );
};
export default Chart;
