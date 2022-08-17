import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const apm24HourBiasCorrected = new ImageryLayer({
    title: "APM 2.5km 24 Hour Bias Corrected",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_apm25_hr24_bc/ImageServer",
    visible: false
});