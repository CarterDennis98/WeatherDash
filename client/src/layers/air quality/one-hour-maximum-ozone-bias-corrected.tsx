import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const oneHourMaximumOzoneBiasCorrected = new ImageryLayer({
    title: "1 Hour Maximum Ozone Bias Corrected",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/ndgd_ozone_1hr_max_time/ImageServer",
    visible: false
});