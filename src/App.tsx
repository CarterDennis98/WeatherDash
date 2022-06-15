import React from "react";
import Conditions from "./components/conditions-bar";
import Header from "./components/header";
import InfoPanel from './components/info-panel';
import WeatherMap from "./components/weather-map";
import './styles.css';

export default function App(props: any) {
  // State to hold user's current location
  const [userCoords, setUserCoords] = React.useState<{ lat: number, long: number }>();

  return (
    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", background: "#4a4a4a" }}>
      <div style={{ height: "20%", width: "100%" }}>
        <Header />
        <div style={{ height: "75%", display: "flex", alignItems: "flex-end" }}>
          <Conditions
            userCoords={userCoords}
          />
        </div>
      </div>
      <div style={{ height: "80%", width: "100%", display: "flex", flexDirection: "row" }}>
        <WeatherMap
          userCoords={userCoords}
          setUserCoords={setUserCoords}
        />
        <InfoPanel />
      </div>
    </div>
  );
}