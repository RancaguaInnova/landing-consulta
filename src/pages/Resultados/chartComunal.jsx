import React from "react";
import { ResponsivePie } from "@nivo/pie";
import _orderBy from "lodash/orderBy";

const MyResponsivePie = props => {
  var data = props.data.respuestas.map(function(item, index) {
    let r = {
      id: item.respuesta,
      label: item.respuesta,
      value: item.porcentaje
    };
    return r;
  });
  data = _orderBy(data, ["value", "label"], ["desc", "asc"]);

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 20, right: 20, bottom: 170, left: 20 }}
      innerRadius={0.2}
      sortByValue={true}
      padAngle={4}
      startAngle={-45}
      enableRadialLabels={false}
      colors={{ scheme: "set3" }}
      borderWidth={1}
      borderColor={{ theme: "labels.text.fill" }}
      sliceLabel={function(e) {
        return e.value + "%";
      }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#000"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      legends={[
        {
          anchor: "bottom",
          direction: "column",
          translateY: 160,
          itemWidth: 280,
          itemHeight: 20,
          itemTextColor: "#000",
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000"
              }
            }
          ]
        }
      ]}
    />
  );
};
export default MyResponsivePie;
