import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const surfaceSmoke = new ImageryLayer({
    title: "Surface Smoke",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_smoke_sfc_1hr_avg_time/ImageServer",
    visible: false
});