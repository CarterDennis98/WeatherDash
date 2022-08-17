import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const surfaceDust = new ImageryLayer({
    title: "Surface Dust",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_dust_sfc_time/ImageServer",
    visible: false
});