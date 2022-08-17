import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const quantitativePrecipForecast = new MapImageLayer({
    title: "Quantitative Precipitation Forecast",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer",
    sublayers: [
        {
            title: "Cumulative Precipitation Forecasts",
            visible: false,
            sublayers: [
                {
                    title: "Day 1 6 Hour",
                    id: 7,
                    visible: false
                },
                {
                    title: "Day 1-2 48 Hour",
                    id: 8,
                    visible: false
                },
                {
                    title: "Day 1-3 72 Hour",
                    id: 9,
                    visible: false
                },
                {
                    title: "Day 1-5 120 Hour",
                    id: 10,
                    visible: false
                },
                {
                    title: "Day 1-7 168 Hour",
                    id: 11,
                    visible: false
                }
            ]
        },
        {
            title: "24/48 Hour Intervals",
            visible: false,
            sublayers: [
                {
                    title: "Day 1 24 Hour",
                    id: 1,
                    visible: false
                },
                {
                    title: "Day 2 24 Hour",
                    id: 2,
                    visible: false
                },
                {
                    title: "Day 3 24 Hour",
                    id: 3,
                    visible: false
                },
                {
                    title: "Day 4-5 48 Hour",
                    id: 4,
                    visible: false
                },
                {
                    title: "Day 6-7 48 Hour",
                    id: 5,
                    visible: false
                }
            ]
        },
        {
            title: "6 Hour Intervals",
            visible: false,
            sublayers: [
                {
                    title: "00-06 Hour",
                    id: 13,
                    visible: false
                },
                {
                    title: "06-12 Hour",
                    id: 14,
                    visible: false
                },
                {
                    title: "12-18 Hour",
                    id: 15,
                    visible: false
                },
                {
                    title: "18-24 Hour",
                    id: 16,
                    visible: false
                },
                {
                    title: "24-30 Hour",
                    id: 17,
                    visible: false
                },
                {
                    title: "30-36 Hour",
                    id: 18,
                    visible: false
                },
                {
                    title: "42-48 Hour",
                    id: 19,
                    visible: false
                },
                {
                    title: "48-54 Hour",
                    id: 20,
                    visible: false
                },
                {
                    title: "54-60 Hour",
                    id: 21,
                    visible: false
                },
                {
                    title: "60-66 Hour",
                    id: 22,
                    visible: false
                },
                {
                    title: "66-72 Hour",
                    id: 23,
                    visible: false
                },
                {
                    title: "72-78 Hour",
                    id: 24,
                    visible: false
                }
            ]
        }
    ]
});