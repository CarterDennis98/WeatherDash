import React, { useRef } from "react";
import './App.css';
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchBar from "../src/components/search-bar";

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
        container: mapDiv.current,
        ui: {
          components: [

          ]
        }
      });
    }
  }, []);

  const gitHubClick = () => {
    window.open("https://github.com/CarterDennis98", "_blank");
  }

  return (
    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", background: "#4a4a4a" }}>
      <div style={{ height: "20%", width: "100%" }}>
        <div style={{
          height: "25%", width: "100%", backgroundColor: "#2b2b2b", boxShadow: "0px 5px 10px #151515", display: "flex", justifyContent: "space-between",
          boxSizing: "border-box", padding: "10px", alignItems: "center"
        }}>
          <h2 style={{ color: "white", margin: "0px" }}>
            Carter's Weather Map
          </h2>
          <div>
            <IconButton sx={{ color: "white" }} onClick={gitHubClick}>
              <GitHubIcon />
            </IconButton>
          </div>
        </div>
        <div style={{ height: "75%", display: "flex", alignItems: "flex-end" }}>
          <SearchBar />
        </div>
      </div>
      <div style={{ height: "80%", width: "100%", display: "flex", flexDirection: "row" }}>
        <div id="mapDiv" ref={mapDiv} style={{ display: "flex", width: "100%", boxShadow: "0px 5px 10px #151515", margin: "0px 0px 20px 20px" }}>

        </div>
        <div style={{ height: "100%", width: "30%" }}>

        </div>
      </div>
    </div>
  );
}