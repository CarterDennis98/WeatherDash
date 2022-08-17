import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const sixToTenDayOutlooks = new MapImageLayer({
    title: "6 - 10 Day Precipitation and Temperature Outlooks",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Climate_Outlooks/cpc_6_10_day_outlk/MapServer",
    sublayers: [
        {
            title: "6 - 10 Day Temperature Outlook",
            id: 0,
            visible: false
        },
        {
            title: "6 - 10 Day Precipitation Outlook",
            id: 1,
            visible: false
        }
    ]
});