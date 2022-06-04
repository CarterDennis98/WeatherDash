import React, { useRef } from 'react';
import './App.css';
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

esriConfig.apiKey = process.env.REACT_APP_ESRI_API_KEY as string;

export default function App(props: any) {
  const mapDiv = useRef(null);

  React.useEffect(() => {
    if (mapDiv.current) {
      const map = new Map({
        basemap: "topo-vector"
      });

      const view = new MapView({
        map: map,
        center: [-97.30, 35.28],
        zoom: 5,
        constraints: {
          rotationEnabled: false
        },
        container: mapDiv.current
      });
    }
  }, []);

  return (
    <div id="mapDiv" ref={mapDiv} style={{ height: "100vh", width: "70vw" }}>

    </div>
  );
}