import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const apmOneHour = new ImageryLayer({
    title: "APM 2.5km 1 Hour",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_apm25_hr01/ImageServer",
    visible: false
});