import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const oneHourAvgOzoneBiasCorrected = new ImageryLayer({
    title: "1 Hour Average Ozone Bias Corrected",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_ozone_1hr_avg_time_bc/ImageServer",
    visible: false
});