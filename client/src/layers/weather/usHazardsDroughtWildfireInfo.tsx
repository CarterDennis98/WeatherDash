import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const usHazardsDroughtWildfireInfo = new MapImageLayer({
    title: "U.S. Hazards/Drought/Wildfire Info",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Climate_Outlooks/cpc_weather_hazards/MapServer",
    sublayers: [
        {
            title: "Temperature",
            sublayers: [
                {
                    title: "3-7 Day Temperature Outlook",
                    id: 1,
                    visible: false
                },
                {
                    title: "8-14 Day Temperature Outlook",
                    id: 2,
                    visible: false
                }
            ]
        },
        {
            title: "Precipitation",
            sublayers: [
                {
                    title: "3-7 Day Precipitation Outlook",
                    id: 4,
                    visible: false
                },
                {
                    title: "8-14 Day Precipitation Outlook",
                    id: 5,
                    visible: false
                }
            ]
        },
        {
            title: "Wildfire/Drought",
            sublayers: [
                {
                    title: "3-7 Day Wildfire/Drought Outlook",
                    id: 1,
                    visible: false
                },
                {
                    title: "8-14 Day Wildfire/Drought Outlook",
                    id: 2,
                    visible: false
                }
            ]
        }
    ]
});