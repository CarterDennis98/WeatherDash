import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const monthlyTemperatureOutlooks = new MapImageLayer({
    title: "Monthly TemperatureOutlooks",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Climate_Outlooks/cpc_mthly_temp_outlk/MapServer",
    sublayers: [
        {
            title: "Monthly Temperature Outlook",
            id: 0,
            visible: false
        }
    ]
});