import React from "react";
import Conditions from "./components/conditions-bar";
import Header from "./components/header";
import InfoPanel from './components/info-panel';
import WeatherMap from "./components/weather-map";
import './styles.css';

export default function App(props: any) {
  // State to hold user's current location
  const [userCoords, setUserCoords] = React.useState<{ lat: number, long: number }>();
  // State to hold user's selected location
  const [coords, setCoords] = React.useState<{ lat: number, long: number }>();

  return (
    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", background: "#4a4a4a" }}>
      <div style={{ height: "20%", width: "100%" }}>
        <Header
          userCoords={userCoords}
          setCoords={setCoords}
        />
        <div style={{ height: "75%", display: "flex" }}>
          <Conditions
            coords={coords}
          />
        </div>
      </div>
      <div style={{ height: "80%", width: "100%", display: "flex", flexDirection: "row" }}>
        <WeatherMap
          userCoords={userCoords}
          setUserCoords={setUserCoords}
          coords={coords}
          setCoords={setCoords}
        />
        <InfoPanel />
      </div>
    </div>
  );
}