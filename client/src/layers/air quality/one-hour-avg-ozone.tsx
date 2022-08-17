import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const oneHourAvgOzone = new ImageryLayer({
    title: "1 Hour Average Ozone",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_ozone_1hr_avg_time/ImageServer",
    visible: false
});