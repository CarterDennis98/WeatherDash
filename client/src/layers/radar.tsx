import ImageryLayer from "@arcgis/core/layers/ImageryLayer";

export const radar = new ImageryLayer({
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/radar/radar_base_reflectivity_time/ImageServer",
    format: "jpgpng",
    title: "Radar",
    opacity: 0.6,
    refreshInterval: 5
});