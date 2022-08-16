import esriConfig from "@arcgis/core/config";
import Point from '@arcgis/core/geometry/Point';
import Graphic from "@arcgis/core/Graphic";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import React, { useRef } from "react";
import { allLayers } from "../layers/allLayers";
import { customGraphics } from "../layers/graphics";

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
                basemap: "topo-vector",
                layers: allLayers
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

        // Wait for view to be created
        view.when(function () {
            // Highlight MapImageLayer polygons on click
            view.popup.watch("selectedFeature", function (graphic) {
                if (graphic) {
                    view.graphics.removeAll();
                    var highlight = view.highlightOptions;
                    graphic.symbol = {
                        type: "simple-fill",
                        color: [highlight.color?.r, highlight.color?.g, highlight.color?.b, highlight.fillOpacity],
                        outline: {
                            color: [highlight.color?.r, highlight.color?.g, highlight.color?.b, highlight.color?.a],
                            width: 2
                        }
                    };
                    view.graphics.add(graphic);
                } else {
                    view.graphics.removeAll();
                }
            });
            view.popup.watch("visible", function (visible) {
                if (!visible) {
                    view.graphics.removeAll();
                }
            });

            // Force popups to auto dock top left
            view.popup.dockEnabled = true;
            view.popup.dockOptions = {
                buttonEnabled: true,
                position: "top-left"
            }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Center map on location if possible
    React.useEffect(() => {
        if (props.coords) {
            view.goTo([props.coords.long, props.coords.lat]);
            view.zoom = 10;
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
            customGraphics.add(userLocationPointGraphic);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.userCoords]);

    return (
        <div id="mapDiv" ref={mapDiv} style={{ display: "flex", width: "100%", boxShadow: "0px 5px 10px #151515", margin: "0px 0px 20px 20px" }}>
            {props.children}
        </div>
    )
}