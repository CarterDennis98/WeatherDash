import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const snowAnalysis = new MapImageLayer({
    title: "NOHRSC Snow Analysis",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer",
    opacity: 0.7,
    sublayers: [
        {
            title: "Snow Depth",
            id: 3,
            visible: false
        },
        {
            title: "Snow Water Equivalent",
            id: 7,
            visible: false
        }
    ]
});