import React from "react";
import Conditions from "./conditions-bar";
import Header from "./header";
import InfoPanel from "./info-panel";
import WeatherMap from "./weather-map";

export default function Home(props: any) {
    // State to hold user's current location
    const [userCoords, setUserCoords] = React.useState<{ lat: number, long: number }>();
    // State to hold user's selected location
    const [coords, setCoords] = React.useState<{ lat: number, long: number }>();

    return (
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", background: "#4a4a4a" }}>
            <div style={{ height: "20%", width: "100%", display: "flex", flexDirection: "column" }}>
                <Header
                    userCoords={userCoords}
                    setCoords={setCoords}
                />
                <div style={{ height: "75%", display: "flex", alignItems: "center" }}>
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