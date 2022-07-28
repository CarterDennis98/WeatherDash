export default function InfoPanel(props: any) {

    return (
        <div style={{
            width: "30%", backgroundColor: "#2b2b2b", margin: "0px 20px 20px 20px", boxShadow: "0px 5px 10px #151515",
            display: "flex", justifyContent: "flex-start", paddingTop: "10px", flexDirection: "column"
        }}
        >
            <div style={{ height: "20px", width: "100%", display: "flex", justifyContent: "center" }}>
                <b style={{ fontSize: "16px", color: "white" }}>Layers</b>
            </div>
            <div id="info-panel" style={{ backgroundColor: "#2b2b2b" }}>

            </div>
        </div>
    )
}