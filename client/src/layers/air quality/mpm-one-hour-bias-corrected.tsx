import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const mpmOneHourBiasCorrected = new ImageryLayer({
    title: "MPM 2.5km 1 Hour Bias Corrected",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_mpm25_hr01_bc/ImageServer",
    visible: false
});