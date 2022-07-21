import Tooltip from '@mui/material/Tooltip';

export default function ForecastConditions(props: any) {
    let forecast = props.forecast ? props.forecast.properties.periods[props.period] : null;

    return props.forecast ? (
        <div style={{ display: "flex", justifyContent: "flex-start", minWidth: "250px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ height: "100%", display: "flex", alignItems: "center", position: "relative" }}>
                    <img src={props.forecast ? props.forecast.properties.periods[props.period].icon : ""} alt=""></img>
                    <div style={{ height: "20px", width: "100%", position: "absolute", backgroundColor: "#808080ad", bottom: "10px" }}>
                        <p style={{ margin: 0, color: "white", fontSize: "small", display: "flex", justifyContent: "center" }}>
                            {forecast ? forecast.name : ""}
                        </p>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", height: "100%", marginLeft: "5px" }}>
                    <p style={{color: "white", margin: 0, fontSize: "12px"}}>
                        {forecast ? forecast.shortForecast : "" }
                    </p>
                    <p style={{ color: forecast.name.toLowerCase().includes("night") ? "#00b8ff" : "#e9220f", margin: 0 }}>
                        {forecast.name.toLowerCase().includes("night") ? "Low: " : "High: "}
                        <b style={{ fontWeight: "500" }}>
                            {forecast ? forecast.temperature + "\u00B0F" : ""}
                        </b>
                    </p>
                    <Tooltip title={forecast ? forecast.detailedForecast : ""}>
                        <p style={{color: "white", margin: 0, textDecoration: "underline", cursor: "default"}}><i>More Info</i></p>
                    </Tooltip>
                </div>
            </div>
        </div>
    ) :
    (
        <p style={{color: "white"}}>Something went wrong, try reloading the page</p>
    )
}