import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const eightHourMaximumOzoneBiasCorrected = new ImageryLayer({
    title: "8 Hour Maximum Ozone Bias Corrected",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_ozone_8hr_max_time_bc/ImageServer",
    visible: false
});