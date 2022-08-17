import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const weatherFeaturesPrecipitationForecast = new MapImageLayer({
    title: "Weather Features/Precipitation",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/natl_fcst_wx_chart/MapServer",
    sublayers: [
        {
            title: "Day 1",
            visible: false,
            sublayers: [
                {
                    title: "Day 1 Highs and Lows",
                    id: 1,
                    visible: true
                },
                {
                    title: "Day 1 Fronts",
                    id: 2,
                    visible: true,
                },
                {
                    title: "Day 1 Rain/Thunderstorms",
                    id: 3,
                    visible: true
                },
                {
                    title: "Day 1 Rain",
                    id: 4,
                    visible: true
                },
                {
                    title: "Day 1 Mixed Precipitation",
                    id: 5,
                    visible: true
                },
                {
                    title: "Day 1 Snow",
                    id: 6,
                    visible: true
                },
                {
                    title: "Day 1 Severe Thunderstorms Possible",
                    id: 7,
                    visible: true
                },
                {
                    title: "Day 1 Heavy Rain/Flash Flooding Possible",
                    id: 8,
                    visible: true
                },
                {
                    title: "Day 1 Critical Fire Weather Possible",
                    id: 9,
                    visible: true
                },
                {
                    title: "Day 1 Freezing Rain Possible",
                    id: 10,
                    visible: true
                },
                {
                    title: "Day 1 Heavy Snow Possible",
                    id: 11,
                    visible: true
                }
            ]
        },
        {
            title: "Day 2",
            visible: false,
            sublayers: [
                {
                    title: "Day 2 Highs and Lows",
                    id: 13,
                    visible: true
                },
                {
                    title: "Day 2 Fronts",
                    id: 14,
                    visible: true,
                },
                {
                    title: "Day 2 Rain/Thunderstorms",
                    id: 15,
                    visible: true
                },
                {
                    title: "Day 2 Rain",
                    id: 16,
                    visible: true
                },
                {
                    title: "Day 2 Mixed Precipitation",
                    id: 17,
                    visible: true
                },
                {
                    title: "Day 2 Snow",
                    id: 18,
                    visible: true
                },
                {
                    title: "Day 2 Severe Thunderstorms Possible",
                    id: 19,
                    visible: true
                },
                {
                    title: "Day 2 Heavy Rain/Flash Flooding Possible",
                    id: 20,
                    visible: true
                },
                {
                    title: "Day 2 Critical Fire Weather Possible",
                    id: 21,
                    visible: true
                },
                {
                    title: "Day 2 Freezing Rain Possible",
                    id: 22,
                    visible: true
                },
                {
                    title: "Day 2 Heavy Snow Possible",
                    id: 23,
                    visible: true
                }
            ]
        },
        {
            title: "Day 3",
            visible: false,
            sublayers: [
                {
                    title: "Day 3 Highs and Lows",
                    id: 25,
                    visible: true
                },
                {
                    title: "Day 3 Fronts",
                    id: 26,
                    visible: true,
                },
                {
                    title: "Day 3 Rain/Thunderstorms",
                    id: 27,
                    visible: true
                },
                {
                    title: "Day 3 Rain",
                    id: 28,
                    visible: true
                },
                {
                    title: "Day 3 Mixed Precipitation",
                    id: 29,
                    visible: true
                },
                {
                    title: "Day 3 Snow",
                    id: 30,
                    visible: true
                },
                {
                    title: "Day 3 Severe Thunderstorms Possible",
                    id: 31,
                    visible: true
                },
                {
                    title: "Day 3 Heavy Rain/Flash Flooding Possible",
                    id: 32,
                    visible: true
                },
                {
                    title: "Day 3 Critical Fire Weather Possible",
                    id: 33,
                    visible: true
                },
                {
                    title: "Day 3 Freezing Rain Possible",
                    id: 34,
                    visible: true
                },
                {
                    title: "Day 3 Heavy Snow Possible",
                    id: 35,
                    visible: true
                }
            ]
        }
    ]
});