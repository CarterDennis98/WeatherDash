

export default function Conditions(props: any) {

    return (
        <div style={{ height: "70%", width: "100%", backgroundColor: "#2b2b2b", margin: "20px", boxShadow: "0px 5px 10px #151515" }}>
            <p style={{color: "white"}}>{props.userCoords ? props.userCoords.lat + ", " + props.userCoords.long : ""}</p>
        </div>
    )
}