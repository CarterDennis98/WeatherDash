import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const griddedFlashFloodGuidance = new MapImageLayer({
    title: "Gridded Flash Flood Guidance",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/rfc_gridded_ffg/MapServer",
    sublayers: [
        {
            title: "Flash Flood Guidance 1 Hour",
            id: 3,
            visible: false,
        },
        {
            title: "Flash Flood Guidance 3 Hours",
            id: 7,
            visible: false,
        },
        {
            title: "Flash Flood Guidance 6 Hours",
            id: 11,
            visible: false,
        },
        {
            title: "Flash Flood Guidance 12 Hours",
            id: 15,
            visible: false,
        },
        {
            title: "Flash Flood Guidance 24 Hours",
            id: 19,
            visible: false,
        }
    ]
});