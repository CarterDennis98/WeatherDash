import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const weeklySeaSurfaceTemperatures = new MapImageLayer({
    title: "Sea Surface Temperature Outlooks",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Climate_Outlooks/cpc_wkly_sst/MapServer",
    sublayers: [
        {
            title: "Weekly Global Sea Surface Temperature",
            id: 3,
            visible: false
        },
        {
            title: "Weekly Global Sea Surface Temperature Anomaly",
            id: 7,
            visible: false
        }
    ]
});