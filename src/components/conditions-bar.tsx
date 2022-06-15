import axios from "axios";
import React from "react";

function degToCompass(deg: number) {
    var val = Math.floor((deg / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return (arr[(val % 16)]);
}

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
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "100%", alignItems: "center" }}>
                    <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
                        <img src={forecast ? forecast.properties.periods[0].icon : ""} alt=""></img>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ color: "white", fontSize: "x-large", margin: "0", marginLeft: "5px", fontWeight: "500" }}>
                            {conditions && location ? conditions.name + ", " + location.state : ""}
                        </p>
                        <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
                            <div style={{ display: "flex", flexDirection: "column", height: "100%", marginLeft: "5px" }}>
                                <p style={{ color: "white", margin: 0, fontWeight: "500" }}>
                                    {conditions ? conditions.weather[0].main : ""}
                                </p>
                                <p style={{ color: "white", margin: 0, height: "100%", fontSize: "30px" }}>
                                    {conditions ? conditions.main.temp + "\u00B0F" : ""}
                                </p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", height: "100%", marginLeft: "15px" }}>
                                <p style={{ color: "white", margin: "0" }}>
                                    {"Feels Like: "}
                                    <b style={{ fontWeight: "500" }}>{conditions ? conditions.main.feels_like + "\u00B0F" : ""}</b>
                                </p>
                                <p style={{ color: "white", margin: "0" }}>
                                    {"Humidity: "}
                                    <b style={{ fontWeight: "500" }}>{conditions ? conditions.main.humidity + "%" : ""}</b>
                                </p>
                                <p style={{ color: "white", margin: "0" }}>
                                    {"Wind: "}
                                    <b style={{ fontWeight: "500" }}>{conditions ? degToCompass(conditions.wind.deg) + " " + conditions.wind.speed + " mph" : ""}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ height: "100%", display: "flex", alignItems: "center", position: "relative" }}>
                            <img src={forecast ? forecast.properties.periods[0].icon : ""} alt=""></img>
                            <div style={{ height: "20px", width: "100%", position: "absolute", backgroundColor: "#808080ad", bottom: "10px" }}>
                                <p style={{ margin: 0, color: "white", fontSize: "smaller", display: "flex", justifyContent: "center" }}>
                                    Today
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", height: "100%", marginLeft: "5px" }}>
                            <p style={{ color: "white", margin: 0 }}>
                                {"Temperature: "}
                                <b style={{ fontWeight: "500" }}>
                                    {forecast ? forecast.properties.periods[0].temperature + "\u00B0F" : ""}
                                </b>
                            </p>
                            <p style={{ color: "white", margin: 0 }}>
                                {"Wind: "}
                                <b style={{ fontWeight: "500" }}>
                                    {forecast ? forecast.properties.periods[0].windDirection + " " + forecast.properties.periods[0].windSpeed : ""}
                                </b>
                            </p>
                            <p style={{ color: "white", margin: 0, fontSize: "small" }}>
                                {forecast ? forecast.properties.periods[0].detailedForecast : ""}
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ height: "100%", display: "flex", alignItems: "center", position: "relative" }}>
                            <img src={forecast ? forecast.properties.periods[1].icon : ""} alt=""></img>
                            <div style={{ height: "20px", width: "100%", position: "absolute", backgroundColor: "#808080ad", bottom: "10px" }}>
                                <p style={{ margin: 0, color: "white", fontSize: "smaller", display: "flex", justifyContent: "center" }}>
                                    Tonight
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", height: "100%", marginLeft: "5px" }}>
                            <p style={{ color: "white", margin: 0 }}>
                                {"Temperature: "}
                                <b style={{ fontWeight: "500" }}>
                                    {forecast ? forecast.properties.periods[1].temperature + "\u00B0F" : ""}
                                </b>
                            </p>
                            <p style={{ color: "white", margin: 0 }}>
                                {"Wind: "}
                                <b style={{ fontWeight: "500" }}>
                                    {forecast ? forecast.properties.periods[1].windDirection + " " + forecast.properties.periods[0].windSpeed : ""}
                                </b>
                            </p>
                            <p style={{ color: "white", margin: 0, fontSize: "small" }}>
                                {forecast ? forecast.properties.periods[1].detailedForecast : ""}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}