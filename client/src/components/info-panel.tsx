import { hurricaneTropicalStormsGroup } from "../layers/hurricanes and tropical storms/hurricane-tropical-storms-group";
import { watchesWarningsRadarGroup } from "../layers/watches warnings radar/watches-warnings-radar-group";
import { waterGroup } from "../layers/water/water-group";
import { weatherGroup } from "../layers/weather/weather-group";
import LayerList from "./layer-list";

export default function InfoPanel(props: any) {
    const groups = [
        watchesWarningsRadarGroup,
        hurricaneTropicalStormsGroup,
        weatherGroup,
        waterGroup
    ];

    return (
        <div
            id="info-panel"
            style={{
                width: "30%", minWidth: "20%", backgroundColor: "#2b2b2b", margin: "0px 20px 20px 20px", boxShadow: "0px 5px 10px #151515",
                display: "flex", paddingTop: "10px", flexDirection: "column", overflow: "auto"
            }}
        >
            <b style={{ fontSize: "16px", color: "white", display: "flex", justifyContent: "center" }}>Layers</b>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "20px" }}>
                {
                    groups.map((layer: any) => {
                        return (
                            <LayerList
                                layer={layer}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}