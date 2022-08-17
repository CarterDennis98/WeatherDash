import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const eightToFourteenDayOutlooks = new MapImageLayer({
    title: "8 - 14 Day Precipitation and Temperature Outlooks",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Climate_Outlooks/cpc_8_14_day_outlk/MapServer",
    sublayers: [
        {
            title: "8 - 14 Day Temperature Outlook",
            id: 0,
            visible: false
        },
        {
            title: "8 - 14 Day Precipitation Outlook",
            id: 1,
            visible: false
        }
    ]
});