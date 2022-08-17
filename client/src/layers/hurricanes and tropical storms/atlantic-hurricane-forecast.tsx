import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const atlanticHurricaneForecast = new MapImageLayer({
    title: "Atlantic Hurricane Forecast",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones/MapServer",
    opacity: 1,
    sublayers: [
        {
            title: "2 Day Probability Outlook",
            id: 0,
            visible: false
        },
        {
            title: "2 Day Probability Outlook Area",
            id: 1,
            visible: false
        },
        {
            title: "5 Day Probability Outlook",
            id: 2,
            visible: false
        },
        {
            title: "5 Day Probability Outlook Area",
            id: 3,
            visible: false
        }
    ]
});