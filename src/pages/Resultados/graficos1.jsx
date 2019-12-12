import React, { Fragment } from "react";
//
import { Chart } from "react-charts";
let sourceCode;
export default () => {
  const data = React.useMemo(
    () => [
      {
        label: "Total",
        data: [["SI", 68], ["No", 32]]
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
          height: "300px"
        }}
      >
        <Chart data={data} axes={axes} series={series} tooltip />
      </div>
    </Fragment>
  );
};
