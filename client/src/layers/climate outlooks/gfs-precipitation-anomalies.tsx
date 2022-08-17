import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const gfsPrecipitationAnomalies = new MapImageLayer({
    title: "GFS Precipitation Anomalies",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Climate_Outlooks/cpc_gfs_precip_anom/MapServer",
    sublayers: [
        {
            title: "GFS Precipitation Anomalies - Week 1",
            id: 3,
            visible: false
        },
        {
            title: "GFS Precipitation Anomalies - Week 2",
            id: 7,
            visible: false
        }
    ]
});