import Tooltip from '@mui/material/Tooltip';

export default function ForecastConditions(props: any) {
    let forecast = props.forecast ? props.forecast.properties.periods[props.period] : null;

    return props.forecast ? (
        <div style={{ display: "flex", justifyContent: "flex-start", minWidth: "250px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
                    <div style={{ height: "15px", width: "100%", position: "absolute", backgroundColor: "#808080ad", top: "5px" }}>
                        <p style={{ margin: 0, color: "white", fontSize: "10px", display: "flex", justifyContent: "center" }}>
                            {forecast ? forecast.name : ""}
                        </p>
                    </div>
                    <img src={props.forecast ? props.forecast.properties.periods[props.period].icon : ""} alt="" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", height: "86px", marginLeft: "5px", justifyContent: "space-between" }}>
                    <div>
                        <p style={{ color: forecast.name.toLowerCase().includes("night") ? "#00b8ff" : "#e9220f", margin: 0 }}>
                            {forecast.name.toLowerCase().includes("night") ? "Low: " : "High: "}
                            <b style={{ fontWeight: "500" }}>
                                {forecast ? forecast.temperature + "\u00B0F" : ""}
                            </b>
                        </p>
                        <p style={{ color: "white", margin: 0, fontSize: "12px" }}>
                            {forecast ? forecast.shortForecast : ""}
                        </p>
                    </div>
                    <Tooltip title={forecast ? forecast.detailedForecast : ""}>
                        <p style={{ color: "white", margin: 0, textDecoration: "underline", cursor: "default" }}><i>More Info</i></p>
                    </Tooltip>
                </div>
            </div>
        </div>
    ) : (
        <p style={{ color: "white" }}>Something went wrong, try reloading the page</p>
    )
}