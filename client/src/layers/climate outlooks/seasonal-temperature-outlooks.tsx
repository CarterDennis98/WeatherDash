import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const seasonalTemperatureOutlooks = new MapImageLayer({
    title: "Seasonal Temperature Outlooks",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer",
    sublayers: [
        {
            title: "Months 0 - 3",
            id: 0,
            visible: false
        },
        {
            title: "Months 1 - 4",
            id: 1,
            visible: false
        },
        {
            title: "Months 2 - 5",
            id: 2,
            visible: false
        },
        {
            title: "Months 3 - 6",
            id: 3,
            visible: false
        },
        {
            title: "Months 4 - 7",
            id: 4,
            visible: false
        },
        {
            title: "Months 5 - 8",
            id: 5,
            visible: false
        },
        {
            title: "Months 6 - 9",
            id: 6,
            visible: false
        },
        {
            title: "Months 7 - 10",
            id: 7,
            visible: false
        },
        {
            title: "Months 8 - 11",
            id: 8,
            visible: false
        },
        {
            title: "Months 9 - 12",
            id: 9,
            visible: false
        },
        {
            title: "Months 10 - 13",
            id: 10,
            visible: false
        },
        {
            title: "Months 11 - 14",
            id: 11,
            visible: false
        },
        {
            title: "Months 12 - 14",
            id: 12,
            visible: false
        }
    ]
});