import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const spcOutlook = new MapImageLayer({
    title: "SPC Convective Outlook",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/SPC_wx_outlks/MapServer"
});