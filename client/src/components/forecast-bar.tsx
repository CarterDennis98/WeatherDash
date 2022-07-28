import "../styles/scrollbar.css";
import ForecastConditions from "./forecast-conditions";

export default function ForecastBar(props: any) {

    return props.forecast ? (
        <div style={{ display: "flex", height: "95%", width: "100%", flexDirection: "row", overflow: "auto" }}>
            {
                props.forecast.properties.periods.map((period: any) => {
                    return (
                        <ForecastConditions
                            forecast={props.forecast}
                            period={period.number - 1}
                            key={period.number - 1}
                        />
                    )
                })
            }
        </div>
    ) : (
        null
    )
}