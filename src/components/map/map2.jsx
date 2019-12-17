import React, { useState, Fragment } from "react";
import myPlaces from "./getPlaces";
// We will use these things from the lib
// https://react-google-maps-api-docs.netlify.com/
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

function Map() {
  // The things we need to track in state
  const [mapRef, setMapRef] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerMap, setMarkerMap] = useState({});
  const [center, setCenter] = useState({ lat: -34.170304, lng: -70.7412012 });
  const [zoom, setZoom] = useState(10);
  const [clickedLatLng, setClickedLatLng] = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);

  console.log(process.env.REACT_APP_MAP_KEY);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY
  });

  const fitBounds = map => {
    const bounds = new window.google.maps.LatLngBounds();
    myPlaces.map(place => {
      bounds.extend(place.location);
      return place.id;
    });
    map.fitBounds(bounds);
  };

  const loadHandler = map => {
    // Store a reference to the google map instance in state
    setMapRef(map);
    // Fit map bounds to contain all markers
    fitBounds(map);
  };

  // We have to create a mapping of our places to actual Marker objects
  const markerLoadHandler = (marker, place) => {
    return setMarkerMap(prevState => {
      return { ...prevState, [place.id]: marker };
    });
  };

  const markerClickHandler = (event, place) => {
    // Remember which place was clicked
    setSelectedPlace(place);

    // Required so clicking a 2nd marker works as expected
    if (infoOpen) {
      setInfoOpen(false);
    }

    setInfoOpen(true);

    /* // If you want to zoom in a little on marker click
         if (zoom < 13) {
           setZoom(13);
         }*/

    // if you want to center the selected Marker
    //setCenter(place.pos)
  };
  const openGoogleMaps = place => {
    window.open(place, "_blank");
  };

  const renderMap = () => {
    return (
      <Fragment>
        <GoogleMap
          // Do stuff on map initial laod
          onLoad={loadHandler}
          // Save the current center position in state
          //    onCenterChanged={() => setCenter(mapRef.getCenter().toJSON())}
          // Save the user's map click position
          onClick={e => setClickedLatLng(e.latLng.toJSON())}
          center={center}
          zoom={zoom}
          mapContainerStyle={{
            height: "70vh",
            width: "100%"
          }}
        >
          {myPlaces.map(place => (
            <Marker
              key={place.id}
              position={place.location}
              onLoad={marker => markerLoadHandler(marker, place)}
              onClick={event => markerClickHandler(event, place)}
              // Not required, but if you want a custom icon:
              icon={"assets/icono-voto.ico"}
            />
          ))}

          {infoOpen && selectedPlace && (
            <InfoWindow
              anchor={markerMap[selectedPlace.id]}
              onCloseClick={() => setInfoOpen(false)}
            >
              <div>
                <h5 className="tituloPlace">{selectedPlace.name}</h5>
                <div className="infoMarker">
                  <img src="assets/direccion.png" alt="Sector" width="24" />
                  <span className="textoMarker">
                    Sector {selectedPlace.sector}
                  </span>
                </div>
                <div className="infoMarker">
                  <img src="assets/direccion.png" alt="Dirección" width="24" />
                  <span className="textoMarker">{selectedPlace.direccion}</span>
                </div>
                {selectedPlace.telefono && (
                  <div className="infoMarker">
                    <img src="assets/fono.png" width="20" alt="fono" />
                    <span className="textoMarker">
                      {selectedPlace.telefono}
                    </span>
                  </div>
                )}
                <hr />
                <div className="infoMarkerMap">
                  <p>
                    <a
                      href="#"
                      onClick={() => openGoogleMaps(selectedPlace.place)}
                    >
                      <img src="assets/map.png" width="24" alt="google maps" />{" "}
                      Ver en Google Maps
                    </a>
                  </p>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </Fragment>
    );
  };

  return isLoaded ? renderMap() : null;
}
export default Map;
