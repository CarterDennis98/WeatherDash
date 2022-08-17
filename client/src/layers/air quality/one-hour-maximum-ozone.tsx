import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const oneHourMaximumOzone = new ImageryLayer({
    title: "1 Hour Maximum Ozone",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_ozone_1hr_max_time/ImageServer",
    visible: false
});