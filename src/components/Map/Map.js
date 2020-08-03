import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./Map.scss";

function MapApp() {
  return (
    <div className="MapApp">
      <YMaps>
        <Map
          defaultState={{ center: [53.9006, 27.559], zoom: 13 }}
          width="100%"
          height="30rem"
        >
          <Placemark geometry={[53.9006, 27.559]} />
        </Map>
      </YMaps>
    </div>
  );
}

export default MapApp;
