import React from "react";
import MapContainer from "./components/Map";

const App = () => {
  if (!navigator.geolocation) {
    alert("tu navegador no tiene opción de geolocaclización");
    throw new Error("tu navegador no tiene opción de geolocaclización");
  }

  return (
    <div className="h-100 d-flex flex-column">
      <MapContainer isMarkerShown={true} />
    </div>
  );
};

export default App;
