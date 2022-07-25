import axios from "axios";
import * as React from "react";

export default function AlertTooltip(props: any) {
    const [alert, setAlert] = React.useState<any>();

    React.useEffect(() => {
        axios.get(props.id).then(async function (response) {
            setAlert(response.data.properties);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return alert ? (
        <div style={{ display: "flex", flexDirection: "column", padding: "10px", borderBottom: "1px solid white" }}>
            <p style={{
                fontSize: "16px",
                color: (alert.severity === "Extreme" || alert.severity === "Severe") ? "red" : "orange"
            }}><b>{alert.event}</b></p>
            <p>{alert.description}</p>
            <p>Issued by {alert.senderName}</p>
        </div>
    ) : (
        null
    );
}