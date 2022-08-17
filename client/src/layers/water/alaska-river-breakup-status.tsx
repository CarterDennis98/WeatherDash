import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const alaskaRiverBreakupStatus = new MapImageLayer({
    title: "Alaska River Breakup Status",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/aprfc_RiverBreakupStatus/MapServer",
    sublayers: [
        {
            title: "APRFC River Breakup Status",
            id: 0,
            visible: false
        }
    ]
});