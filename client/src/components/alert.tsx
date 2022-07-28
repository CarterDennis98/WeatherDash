import axios from "axios";
import * as React from "react";

enum Severity {
    Extreme = "800000",
    Severe = "red",
    Moderate = "orange",
    Minor = "yellow",
    Unknown = "white"
}

export default function Alert(props: any) {
    const [alert, setAlert] = React.useState<any>();

    React.useEffect(() => {
        axios.get(props.id).then(async function (response) {
            setAlert(response.data.properties);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return alert ? (
        <div style={{ display: "flex", flexDirection: "column", padding: "10px", borderBottom: !props.last ? "1px solid white" : "none" }}>
            <p style={{
                fontSize: "16px",
                color: (Severity as any)[alert.severity],
                marginTop: "0px"
            }}><b>{alert.event}</b></p>
            <p style={{ color: "white", fontSize: "12px" }}>{alert.description}</p>
            <p style={{ color: "white", fontSize: "12px" }}><i>Issued by {alert.senderName}</i></p>
        </div>
    ) : (
        null
    );
}