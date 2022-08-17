import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const apm24Hour = new ImageryLayer({
    title: "APM 2.5km 24 Hour",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_apm25_hr24/ImageServer",
    visible: false
});