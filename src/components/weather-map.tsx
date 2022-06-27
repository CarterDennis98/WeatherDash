import esriConfig from "@arcgis/core/config";
import Point from '@arcgis/core/geometry/Point';
import Graphic from "@arcgis/core/Graphic";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import LayerList from "@arcgis/core/widgets/LayerList";
import React, { useRef } from "react";
import { spcOutlook } from "../layers/outlook";
import { radar } from "../layers/radar";

esriConfig.apiKey = process.env.REACT_APP_ESRI_API_KEY as string;

let map: Map, view: MapView, layerList: LayerList;

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
                basemap: "topo-vector",
                layers: [spcOutlook, radar, /*watchesAndWarnings*/]
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

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        layerList = new LayerList({
            view: view,
            container: "info-panel"
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Center map on location if possible
    React.useEffect(() => {
        if (props.coords) {
            view.goTo([props.coords.long, props.coords.lat]);
            view.zoom = 13;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.coords]);

    // Plot point on map at user's location
    React.useEffect(() => {
        if (props.userCoords) {
            const userLocationPoint = new Point({
                latitude: props.userCoords.lat,
                longitude: props.userCoords.long
            });
            const pointSymbol = {
                type: "simple-marker",
                color: "#4287f5",
                size: "14px",
                outline: {
                    color: "white",
                    width: "2px"
                }
            }
            const userLocationPointGraphic = new Graphic({
                geometry: userLocationPoint,
                symbol: pointSymbol,
            });
            view.graphics.add(userLocationPointGraphic);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.userCoords]);

    return (
        <div id="mapDiv" ref={mapDiv} style={{ display: "flex", width: "100%", boxShadow: "0px 5px 10px #151515", margin: "0px 0px 20px 20px" }}>
            {props.children}
        </div>
    )
}