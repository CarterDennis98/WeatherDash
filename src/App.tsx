import React from "react";
import './App.css';
import Conditions from "./components/conditions-bar";
import Header from "./components/header";
import InfoPanel from './components/info-panel';
import WeatherMap from "./components/weather-map";

// Function to load a script, in this case it's used to load Google's places API
function loadScript(src: any, position: any, id: any) {
  if (!position) {
    return;
  }
  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

export default function App(props: any) {
  // Load Google Maps Places API
  const loaded = React.useRef<boolean>(false);

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      const link =
        "https://maps.googleapis.com/maps/api/js?key=" +
        process.env.REACT_APP_GOOGLE_KEY +
        "&libraries=places";
      loadScript(link, document.querySelector("head"), "google-maps");
    }

    loaded.current = true;
  }

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