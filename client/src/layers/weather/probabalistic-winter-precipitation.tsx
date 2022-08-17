import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const probabalisticWinterPrecipitation = new MapImageLayer({
    title: "Probabalistic Winter Precipitation",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/wpc_prob_winter_precip/MapServer",
    sublayers: [
        {
            title: "Day 1 Snow and Ice Accumulation",
            visible: false,
            sublayers: [
                {
                    title: "Day 1 Probability of at Least 4 Inches of Snow",
                    id: 1,
                    visible: false
                },
                {
                    title: "Day 1 Probability of at Least 8 Inches of Snow",
                    id: 2,
                    visible: false
                },
                {
                    title: "Day 1 Probability of at Least 12 Inches of Snow",
                    id: 3,
                    visible: false
                },
                {
                    title: "Day 1 Probability of Icing >0.25 Inches",
                    id: 4,
                    visible: false
                }
            ]
        },
        {
            title: "Day 2 Snow and Ice Accumulation",
            visible: false,
            sublayers: [
                {
                    title: "Day 2 Probability of at Least 4 Inches of Snow",
                    id: 6,
                    visible: false
                },
                {
                    title: "Day 2 Probability of at Least 8 Inches of Snow",
                    id: 7,
                    visible: false
                },
                {
                    title: "Day 2 Probability of at Least 12 Inches of Snow",
                    id: 8,
                    visible: false
                },
                {
                    title: "Day 2 Probability of Icing >0.25 Inches",
                    id: 9,
                    visible: false
                }
            ]
        },
        {
            title: "Day 3 Snow and Ice Accumulation",
            visible: false,
            sublayers: [
                {
                    title: "Day 3 Probability of at Least 4 Inches of Snow",
                    id: 11,
                    visible: false
                },
                {
                    title: "Day 3 Probability of at Least 8 Inches of Snow",
                    id: 12,
                    visible: false
                },
                {
                    title: "Day 3 Probability of at Least 12 Inches of Snow",
                    id: 13,
                    visible: false
                },
                {
                    title: "Day 3 Probability of Icing >0.25 Inches",
                    id: 14,
                    visible: false
                }
            ]
        }
    ]
});