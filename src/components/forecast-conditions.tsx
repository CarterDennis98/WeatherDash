export default function ForecastConditions(props: any) {

    return (
        <div style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ height: "100%", display: "flex", alignItems: "center", position: "relative" }}>
                    <img src={props.forecast ? props.forecast.properties.periods[props.period].icon : ""} alt=""></img>
                    <div style={{ height: "20px", width: "100%", position: "absolute", backgroundColor: "#808080ad", bottom: "10px" }}>
                        <p style={{ margin: 0, color: "white", fontSize: "small", display: "flex", justifyContent: "center" }}>
                            {props.forecast ? props.forecast.properties.periods[props.period].name : ""}
                        </p>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", height: "100%", marginLeft: "5px" }}>
                    <p style={{ color: "white", margin: 0 }}>
                        {"Temperature: "}
                        <b style={{ fontWeight: "500" }}>
                            {props.forecast ? props.forecast.properties.periods[props.period].temperature + "\u00B0F" : ""}
                        </b>
                    </p>
                    <p style={{ color: "white", margin: 0 }}>
                        {"Wind: "}
                        <b style={{ fontWeight: "500" }}>
                            {props.forecast ? props.forecast.properties.periods[props.period].windDirection + " " + props.forecast.properties.periods[props.period].windSpeed : ""}
                        </b>
                    </p>
                    <p style={{ color: "white", margin: 0, fontSize: "small" }}>
                        {props.forecast ? props.forecast.properties.periods[props.period].detailedForecast : ""}
                    </p>
                </div>
            </div>
        </div>
    )
}