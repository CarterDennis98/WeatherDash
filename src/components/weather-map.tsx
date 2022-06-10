import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import React, { useRef } from "react";

esriConfig.apiKey = process.env.REACT_APP_ESRI_API_KEY as string;

export default function WeatherMap(props: any) {

    const mapDiv = useRef(null);

    React.useEffect(() => {
        if (mapDiv.current) {
            const map = new Map({
                basemap: "topo-vector"
            });

            const view = new MapView({
                map: map,
                center: [-97.30, 35.28],
                zoom: 5,
                constraints: {
                    rotationEnabled: false
                },
                container: mapDiv.current,
                ui: {
                    components: [

                    ]
                }
            });

            view.ui.add("search-div", "top-left");
        }
    }, []);

    return (
        <div id="mapDiv" ref={mapDiv} style={{ display: "flex", width: "100%", boxShadow: "0px 5px 10px #151515", margin: "0px 0px 20px 20px" }}>
            {props.children}
        </div>
    )
}