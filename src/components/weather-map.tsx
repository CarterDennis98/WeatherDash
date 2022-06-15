import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import React, { useRef } from "react";

esriConfig.apiKey = process.env.REACT_APP_ESRI_API_KEY as string;

let map: Map, view: MapView;

export default function WeatherMap(props: any) {
    const mapDiv = useRef(null);
    
    function setCoordinates(rawPosition: any) {
        props.setUserCoords({ lat: rawPosition.coords.latitude, long: rawPosition.coords.longitude });
        props.setCoords({ lat: rawPosition.coords.latitude, long: rawPosition.coords.longitude });
    }

    React.useEffect(() => {
        if (mapDiv.current) {
            navigator.geolocation.getCurrentPosition(setCoordinates);

            map = new Map({
                basemap: "topo-vector"
            });

            view = new MapView({
                map: map,
                center: props.coords ? [props.coords.long, props.coords.lat] : [-98.583333, 39.833333],
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
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Center map on location if possible
    React.useEffect(() => {
        if (props.coords) {
            view.goTo([props.coords.long, props.coords.lat]);
            view.zoom = 13;
        }
    }, [props.coords]);

    return (
        <div id="mapDiv" ref={mapDiv} style={{ display: "flex", width: "100%", boxShadow: "0px 5px 10px #151515", margin: "0px 0px 20px 20px" }}>
            {props.children}
        </div>
    )
}