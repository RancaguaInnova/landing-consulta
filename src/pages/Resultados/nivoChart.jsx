import React, { Fragment, useState, useEffect } from "react";

import { ResponsivePie } from "@nivo/pie";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsivePie = props => {
  const title = props.data.respuesta;
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
      margin={{ top: 20, right: 20, bottom: 110, left: 20 }}
      innerRadius={0.45}
      colors={{ scheme: "accent" }}
      borderWidth={1}
      sortByValue={true}
      startAngle={-45}
      borderColor={{ theme: "labels.text.fill" }}
      enableRadialLabels={false}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{ from: "color" }}
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
          translateY: 96,
          itemWidth: 195,
          itemHeight: 24,
          itemTextColor: "#999",
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
