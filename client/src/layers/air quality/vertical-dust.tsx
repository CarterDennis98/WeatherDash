import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const verticalDust = new ImageryLayer({
    title: "Vertical Dust",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_dust_vert_time/ImageServer",
    visible: false
});