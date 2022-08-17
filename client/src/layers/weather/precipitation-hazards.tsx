import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const precipitationHazards = new MapImageLayer({
    title: "Precipitation Hazards",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/wpc_precip_hazards/MapServer",
    opacity: 0.7,
    sublayers: [
        {
            title: "Day 1 Excessive Rainfall",
            id: 0,
            visible: false
        },
        {
            title: "Day 2 Excessive Rainfall",
            id: 1,
            visible: false
        },
        {
            title: "Day 3 Excessive Rainfall",
            id: 2,
            visible: false
        }
    ]
});