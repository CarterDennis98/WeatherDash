import axios from "axios";
import React from "react";
import CurrentConditions from "./current-conditions";
import ForecastConditions from "./forecast-conditions";

export default function Conditions(props: any) {
    const [location, setLocation] = React.useState<{ city: string, county: string, state: string }>();
    const [conditions, setConditions] = React.useState<any>();
    const [forecast, setForecast] = React.useState<any>();

    // Reverse GeoCode user's location
    React.useEffect(() => {
        if (props.coords) {
            axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${props.coords.lat}&lon=${props.coords.long}&zoom=10&format=json`).then(async function (response) {
                setLocation({ city: response.data.address.city, county: response.data.address.county, state: response.data.address.state });

                // Get current conditions for user's location
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.coords.lat}&lon=${props.coords.long}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=imperial`)
                    .then(async function (response) {
                        setConditions(response.data);
                    });

                // Get forecast for user's location
                axios.get(`https://api.weather.gov/points/${props.coords.lat},${props.coords.long}`).then(async function (response) {
                    axios.get(`${response.data.properties.forecast}`).then(async function (response) {
                        setForecast(response.data);
                    });
                });
            });
        }
    }, [props.coords]);

    return (
        <div style={{ height: "70%", width: "100%", backgroundColor: "#2b2b2b", margin: "20px", boxShadow: "0px 5px 10px #151515" }}>
            <div style={{ display: "flex", flexDirection: "row", paddingLeft: "5px", height: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <CurrentConditions
                    forecast={forecast}
                    conditions={conditions}
                    location={location}
                />
                <ForecastConditions
                    forecast={forecast}
                    period={0}
                />
                <ForecastConditions
                    forecast={forecast}
                    period={1}
                />
            </div>
        </div>
    )
}