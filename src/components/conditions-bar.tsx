import axios from "axios";
import React from "react";
import CurrentConditions from "./current-conditions";
import ForecastBar from "./forecast-bar";

export default function Conditions(props: any) {
    const [location, setLocation] = React.useState<{ city: string, county: string, state: string }>();
    const [conditions, setConditions] = React.useState<any>();
    const [forecast, setForecast] = React.useState<any>();
    const [alerts, setAlerts] = React.useState<any>();

    async function getWeatherInfo() {
        // Get current conditions for user's location
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.coords.lat}&lon=${props.coords.long}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=imperial`)
            .then(async function (response) {
                setConditions(response.data);
            });

        // Get forecast for user's location
        axios.get(`https://api.weather.gov/points/${props.coords.lat},${props.coords.long}`).then(async function (response) {
            axios.get(`https://api.weather.gov/alerts/active/zone/${(response.data.properties.forecastZone).split("/").pop()}`).then(async function (response) {
                setAlerts(response.data.features);
            });

            axios.get(`${response.data.properties.forecast}`).then(async function (response) {
                setForecast(response.data);
            });
        });
    }

    // Gather information on user location and forecast
    React.useEffect(() => {
        if (props.coords) {
            // Reverse GeoCode user's location
            axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${props.coords.lat}&lon=${props.coords.long}&zoom=10&format=json`).then(async function (response) {
                setLocation({ city: response.data.address.city, county: response.data.address.county, state: response.data.address.state });

                getWeatherInfo().then(function () {
                    setInterval(getWeatherInfo, 300000);
                });
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.coords]);

    return (
        <div style={{ height: "80%", width: "100%", backgroundColor: "#2b2b2b", margin: "20px", boxShadow: "0px 5px 10px #151515", overflow: "hidden" }}>
            <div style={{ display: "flex", flexDirection: "row", paddingLeft: "5px", height: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <CurrentConditions
                    forecast={forecast}
                    conditions={conditions}
                    location={location}
                    alerts={alerts}
                />
                <ForecastBar
                    forecast={forecast}
                />
            </div>
        </div>
    )
}