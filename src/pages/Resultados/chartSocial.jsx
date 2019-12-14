import React, { Fragment, useState, useEffect } from "react";

import { ResponsivePie } from "@nivo/pie";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsivePie = props => {
  const title = props.data.pregunta;
  var data = props.data.respuestas.map(function(item, index) {
    let r = {
      id: item.respuesta,
      label: item.respuesta,
      value: item.porcentaje
    };
    return r;
  });

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 20, right: 20, bottom: 270, left: 20 }}
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
          translateY: 230,
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
