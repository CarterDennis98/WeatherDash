import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const watchesAndWarnings = new MapImageLayer({
    title: "Watches and Warnings",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/watch_warn_adv/MapServer"
});