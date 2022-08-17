import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const nationalSignificantRiverFloodOutlook = new MapImageLayer({
    title: "National Significant River Flood Outlook",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/sig_riv_fld_outlk/MapServer",
    sublayers: [
        {
            title: "Flood Outlook",
            id: 0,
            visible: false
        }
    ]
});