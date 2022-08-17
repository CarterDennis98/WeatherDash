import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const eightHourMaximumOzone = new ImageryLayer({
    title: "8 Hour Maximum Ozone",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_ozone_8hr_max_time/ImageServer",
    visible: false
});