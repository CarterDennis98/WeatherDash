function degToCompass(deg: number) {
    var val = Math.floor((deg / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return (arr[(val % 16)]);
}

export default function CurrentConditions(props: any) {

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", minWidth: "500px", alignItems: "center" }}>
            <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
                <img src={props.forecast ? props.forecast.properties.periods[0].icon : ""} alt=""></img>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ color: "white", fontSize: "x-large", margin: "0", marginLeft: "5px", fontWeight: "500" }}>
                    {props.conditions && props.location ? props.location.city + ", " + props.location.state : ""}
                </p>
                <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column", height: "100%", marginLeft: "5px" }}>
                        <p style={{ color: "white", margin: 0, fontWeight: "500" }}>
                            {props.conditions ? props.conditions.weather[0].main : ""}
                        </p>
                        <p style={{ color: "white", margin: 0, height: "100%", fontSize: "30px" }}>
                            {props.conditions ? props.conditions.main.temp + "\u00B0F" : ""}
                        </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", height: "100%", marginLeft: "15px" }}>
                        <p style={{ color: "white", margin: "0" }}>
                            {"Feels Like: "}
                            <b style={{ fontWeight: "500" }}>{props.conditions ? props.conditions.main.feels_like + "\u00B0F" : ""}</b>
                        </p>
                        <p style={{ color: "white", margin: "0" }}>
                            {"Humidity: "}
                            <b style={{ fontWeight: "500" }}>{props.conditions ? props.conditions.main.humidity + "%" : ""}</b>
                        </p>
                        <p style={{ color: "white", margin: "0" }}>
                            {"Wind: "}
                            <b style={{ fontWeight: "500" }}>{props.conditions ? degToCompass(props.conditions.wind.deg) + " " +
                                props.conditions.wind.speed + " mph" : ""}</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}