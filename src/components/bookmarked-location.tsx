import axios from "axios";
import * as React from "react";
import "../styles/bookmark.css";

export default function BookmarkedLocation(props: any) {
    const [conditions, setConditions] = React.useState<any>();
    const [alerts, setAlerts] = React.useState<any>();

    async function getWeatherInfo() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.location.lat}&lon=${props.location.long}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=imperial`)
            .then(async function (response) {
                setConditions(response.data);
            });

        // Get user's weather info from weather.gov api
        axios.get(`https://api.weather.gov/points/${props.location.lat},${props.location.long}`).then(async function (response) {
            axios.get(`https://api.weather.gov/alerts/active/zone/${(response.data.properties.forecastZone).split("/").pop()}`).then(async function (response) {
                setAlerts(response.data.features);
            });
        });
    }

    React.useEffect(() => {
        getWeatherInfo().then(function () {
            setInterval(getWeatherInfo, 300000);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return conditions && alerts ? (
        <div id={"bookmark " + props.location.city} style={{
            display: "flex", flexDirection: "row", margin: "5px", padding: "0px 5px 0px 5px", borderRadius: "0.5rem",
            maxHeight: "40px", alignItems: "center"
        }}>
            <p style={{ color: "white" }}>
                {Math.round(conditions.main.temp) + "\u00B0F"} {props.location.city}, {props.location.state}
            </p>
            <p
                style={{
                    color: "white",
                    backgroundColor: (alerts.filter((e: any) => e.properties.severity === "Extreme" || e.properties.severity === "Severe").length > 0) ?
                        "red" : "orange",
                    borderRadius: "5rem",
                    width: "20px",
                    marginLeft: "5px",
                    display: "flex",
                    justifyContent: "center"
                }}
            >{alerts.length.toString()}</p>
        </div>
    ) : (
        null
    );
}