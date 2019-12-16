import React from "react"

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, BicyclingLayer, Marker } from "react-google-maps"

const MapWithABicyclingLayer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAmQ7APQAvy5cbGkGba-KZNT_VHHlLddeI&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  console.log(props)
  return (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: -34.170304, lng: -70.7412012 }}>
      {props.places &&
        props.places.map((item, i) => (
          <Marker position={{ lat: item.location.lat, lng: item.location.lng }} />
        ))}

      <BicyclingLayer autoUpdate />
    </GoogleMap>
  )
})

export default MapWithABicyclingLayer
