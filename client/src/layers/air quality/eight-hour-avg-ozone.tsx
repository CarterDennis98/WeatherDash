import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const eightHourAvgOzone = new ImageryLayer({
    title: "8 Hour Average Ozone",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_ozone_8hr_avg_time/ImageServer",
    visible: false
});