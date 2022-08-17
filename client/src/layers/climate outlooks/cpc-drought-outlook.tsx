import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const cpcDroughtOutlook = new MapImageLayer({
    title: "CPC Drought Outlook",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Climate_Outlooks/cpc_drought_outlk/MapServer",
    sublayers: [
        {
            title: "Monthly Drought Outlook",
            id: 0,
            visible: false
        },
        {
            title: "Seasonal Drought Outlook",
            id: 1,
            visible: false
        }
    ]
});