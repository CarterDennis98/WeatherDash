import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const eightHourAvgOzoneBiasCorrected = new ImageryLayer({
    title: "8 Hour Average Ozone Bias Corrected",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_ozone_8hr_avg_time_bc/ImageServer",
    visible: false
});