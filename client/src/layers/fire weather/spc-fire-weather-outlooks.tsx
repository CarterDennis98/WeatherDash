import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const spcFireWeatherOutlooks = new MapImageLayer({
    title: "SPC Fire Weather Outlooks",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/SPC_firewx/MapServer",
    sublayers: [
        {
            title: "Day 1 Fire Weather Outlook",
            sublayers: [
                {
                    title: "Day 1 Fire Weather Outlook",
                    id: 1,
                    visible: false
                },
                {
                    title: "Day 1 Fire Weather Outlook Dry Lightning",
                    id: 2,
                    visible: false
                }
            ]
        },
        {
            title: "Day 2 Fire Weather Outlook",
            sublayers: [
                {
                    title: "Day 2 Fire Weather Outlook",
                    id: 4,
                    visible: false
                },
                {
                    title: "Day 2 Fire Weather Outlook Dry Lightning",
                    id: 5,
                    visible: false
                }
            ]
        },
        {
            title: "Categorical Day 3 - 8 Fire Weather Outlook",
            sublayers: [
                {
                    title: "Day 3 Fire Weather Outlook",
                    id: 7,
                    visible: false
                },
                {
                    title: "Day 4 Fire Weather Outlook",
                    id: 8,
                    visible: false
                },
                {
                    title: "Day 5 Fire Weather Outlook",
                    id: 9,
                    visible: false
                },
                {
                    title: "Day 6 Fire Weather Outlook",
                    id: 10,
                    visible: false
                },
                {
                    title: "Day 7 Fire Weather Outlook",
                    id: 11,
                    visible: false
                },
                {
                    title: "Day 8 Fire Weather Outlook",
                    id: 12,
                    visible: false
                },
            ]
        }
    ]
});