import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const ahpsRiverGaugeObservationsForecast = new MapImageLayer({
    title: "AHPS River Gauge Observations/Forecast",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Observations/ahps_riv_gauges/MapServer",
    sublayers: [
        {
            title: "Observed River Stages",
            id: 0,
            visible: false
        },
        {
            title: "Day 1 Forecast River Stages",
            id: 1,
            visible: false
        },
        {
            title: "Day 2 Forecast River Stages",
            id: 2,
            visible: false
        },
        {
            title: "Day 3 Forecast River Stages",
            id: 3,
            visible: false
        },
        {
            title: "Day 4 Forecast River Stages",
            id: 4,
            visible: false
        },
        {
            title: "Day 5 Forecast River Stages",
            id: 5,
            visible: false
        },
        {
            title: "Day 6 Forecast River Stages",
            id: 6,
            visible: false
        },
        {
            title: "Day 7 Forecast River Stages",
            id: 7,
            visible: false
        },
        {
            title: "Day 8 Forecast River Stages",
            id: 8,
            visible: false
        },
        {
            title: "Day 9 Forecast River Stages",
            id: 9,
            visible: false
        },
        {
            title: "Day 10 Forecast River Stages",
            id: 10,
            visible: false
        },
        {
            title: "Day 11 Forecast River Stages",
            id: 11,
            visible: false
        },
        {
            title: "Day 12 Forecast River Stages",
            id: 12,
            visible: false
        },
        {
            title: "Day 13 Forecast River Stages",
            id: 13,
            visible: false
        },
        {
            title: "Day 14 Forecast River Stages",
            id: 14,
            visible: false
        },
        {
            title: "Full Forecast Period Stages",
            id: 15,
            visible: false
        }
    ]
});