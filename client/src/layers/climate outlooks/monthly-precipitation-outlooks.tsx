import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const monthlyPrecipitationOutlooks = new MapImageLayer({
    title: "Monthly Precipitation Outlooks",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Climate_Outlooks/cpc_mthly_precip_outlk/MapServer",
    sublayers: [
        {
            title: "Monthly Precipitation Outlook",
            id: 0,
            visible: false
        }
    ]
});