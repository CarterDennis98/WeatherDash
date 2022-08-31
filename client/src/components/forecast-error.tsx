export default function ForecastError(props: any) {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ color: "white" }}>
                Error retrieving information for {props.location && props.location.city ? props.location.city : props.conditions && props.conditions.name ? props.conditions.name : ""}, {props.location && props.location.state ? props.location.state : ""}
            </p>
            <p style={{ color: "white" }}>
                This is likely due to an error with NWS servers, feel free to refresh the page, search another location, or just browse the map
            </p>
        </div>
    )
}