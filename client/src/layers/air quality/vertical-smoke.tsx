import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const verticalSmoke = new ImageryLayer({
    title: "Vertical Smoke",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_smoke_vert_1hr_avg_time/ImageServer",
    visible: false
});