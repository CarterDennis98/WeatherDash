import { watchesWarningsRadarGroup } from "../layers/watches_warnings_radar/watchesWarningsRadarGroup";
import { weatherGroup } from "../layers/weather/weatherGroup";
import LayerList from "./layer-list";

export default function InfoPanel(props: any) {
    const groups = [
        watchesWarningsRadarGroup,
        weatherGroup
    ];

    return (
        <div
            id="info-panel"
            style={{
                width: "30%", backgroundColor: "#2b2b2b", margin: "0px 20px 20px 20px", boxShadow: "0px 5px 10px #151515",
                display: "flex", paddingTop: "10px", flexDirection: "column"
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