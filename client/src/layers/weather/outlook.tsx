import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const spcOutlook = new MapImageLayer({
    title: "SPC Convective Outlooks",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/SPC_wx_outlks/MapServer",
    opacity: 0.7,
    refreshInterval: 10,
    sublayers: [
        {
            title: "Day 4-8",
            visible: false,
            sublayers: [
                {
                    title: "Day 8 Probabilistic Outlook",
                    id: 25,
                    visible: false
                },
                {
                    title: "Day 7 Probabilistic Outlook",
                    id: 24,
                    visible: false
                },
                {
                    title: "Day 6 Probabilistic Outlook",
                    id: 23,
                    visible: false
                },
                {
                    title: "Day 5 Probabilistic Outlook",
                    id: 22,
                    visible: false
                },
                {
                    title: "Day 4 Probabilistic Outlook",
                    id: 21,
                    visible: false
                },
            ]
        },
        {
            title: "Day 3",
            visible: false,
            sublayers: [
                {
                    title: "Day 3 Significant Sever Outlook",
                    id: 19,
                    visible: false
                },
                {
                    title: "Day 3 Probabilistic Outlook",
                    id: 18,
                    visible: false
                },
                {
                    title: "Day 3 Categorical Outlook",
                    id: 17,
                    visible: false
                }
            ]
        },
        {
            title: "Day 2",
            visible: false,
            sublayers: [
                {
                    title: "Day 2 Probabilistic Wind Outlook",
                    id: 12,
                    visible: false
                },
                {
                    title: "Day 2 Significant Wind Outlook",
                    id: 15,
                    visible: false
                },
                {
                    title: "Day 2 Probabilistic Hail Outlook",
                    id: 11,
                    visible: false
                },
                {
                    title: "Day 2 Significant Hail Outlook",
                    id: 14,
                    visible: false
                },
                {
                    title: "Day 2 Probabilistic Tornado Outlook",
                    id: 10,
                    visible: false
                },
                {
                    title: "Day 2 Significant Tornado Outlook",
                    id: 13,
                    visible: false
                },
                {
                    title: "Day 2 Categorical Outlook",
                    id: 9,
                    visible: false
                }
            ]
        },
        {
            title: "Day 1 ",
            sublayers: [
                {
                    title: "Day 1 Probabilistic Wind Outlook",
                    id: 4,
                    visible: false
                },
                {
                    title: "Day 1 Significant Wind Outlook",
                    id: 7,
                    visible: false
                },
                {
                    title: "Day 1 Probabilistic Hail Outlook",
                    id: 3,
                    visible: false
                },
                {
                    title: "Day 1 Significant Hail Outlook",
                    id: 6,
                    visible: false
                },
                {
                    title: "Day 1 Probabilistic Tornado Outlook",
                    id: 2,
                    visible: false
                },
                {
                    title: "Day 1 Significant Tornado Outlook",
                    id: 5,
                    visible: false
                },
                {
                    title: "Day 1 Categorical Outlook",
                    id: 0
                }
            ]
        }
    ]
});