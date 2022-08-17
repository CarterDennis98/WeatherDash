import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const rfcHourlyAndDailyQPE = new MapImageLayer({
    title: "RFC Hourly and Daily Quantitative Precipitation Estimates",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/rfc_qpe/MapServer",
    sublayers: [
        {
            title: "Observed",
            sublayers: [
                {
                    title: "Last 1 Hour Observed",
                    id: 8,
                    visible: false
                },
                {
                    title: "Last 2 Hours Observed",
                    id: 12,
                    visible: false
                },
                {
                    title: "Last 3 Hours Observed",
                    id: 16,
                    visible: false
                },
                {
                    title: "Last 6 Hours Observed",
                    id: 20,
                    visible: false
                },
                {
                    title: "Last 12 Hours Observed",
                    id: 24,
                    visible: false
                },
                {
                    title: "Last 24 Hours Observed",
                    id: 28,
                    visible: false
                },
                {
                    title: "Today's Analysis Observed",
                    id: 32,
                    visible: false
                },
                {
                    title: "Last 2 Days Observed",
                    id: 36,
                    visible: false
                },
                {
                    title: "Last 3 Days Observed",
                    id: 40,
                    visible: false
                },
                {
                    title: "Last 4 Days Observed",
                    id: 44,
                    visible: false
                },
                {
                    title: "Last 5 Days Observed",
                    id: 48,
                    visible: false
                },
                {
                    title: "Last 6 Days Observed",
                    id: 52,
                    visible: false
                },
                {
                    title: "Last 7 Days Observed",
                    id: 56,
                    visible: false
                },
                {
                    title: "Last 10 Days Observed",
                    id: 60,
                    visible: false
                },
                {
                    title: "Last 14 Days Observed",
                    id: 64,
                    visible: false
                },
                {
                    title: "Last 30 Days Observed",
                    id: 68,
                    visible: false
                },
                {
                    title: "Last 60 Days Observed",
                    id: 72,
                    visible: false
                },
                {
                    title: "Last 90 Days Observed",
                    id: 76,
                    visible: false
                },
                {
                    title: "Last 120 Days Observed",
                    id: 80,
                    visible: false
                },
                {
                    title: "Last 180 Days Observed",
                    id: 84,
                    visible: false
                },
                {
                    title: "Last 365 Days Observed",
                    id: 88,
                    visible: false
                },
                {
                    title: "Month to Date Observed",
                    id: 92,
                    visible: false
                },
                {
                    title: "Year to Date Observed",
                    id: 96,
                    visible: false
                },
                {
                    title: "Water Year to Date Observed",
                    id: 100,
                    visible: false
                }
            ]
        },
        {
            title: "Normal",
            sublayers: [
                {
                    title: "Today's Normal",
                    id: 102,
                    visible: false
                },
                {
                    title: "Last 7 Days Normal",
                    id: 109,
                    visible: false
                },
                {
                    title: "Last 10 Days Normal",
                    id: 113,
                    visible: false
                },
                {
                    title: "Last 14 Days Normal",
                    id: 117,
                    visible: false
                },
                {
                    title: "Last 30 Days Normal",
                    id: 121,
                    visible: false
                },
                {
                    title: "Last 60 Days Normal",
                    id: 125,
                    visible: false
                },
                {
                    title: "Last 90 Days Normal",
                    id: 129,
                    visible: false
                },
                {
                    title: "Last 120 Days Normal",
                    id: 133,
                    visible: false
                },
                {
                    title: "Last 180 Days Normal",
                    id: 137,
                    visible: false
                },
                {
                    title: "Last 365 Days Normal",
                    id: 141,
                    visible: false
                },
                {
                    title: "Month to Date Normal",
                    id: 145,
                    visible: false
                },
                {
                    title: "Year to Date Normal",
                    id: 149,
                    visible: false
                },
                {
                    title: "Water Year to Date Normal",
                    id: 153,
                    visible: false
                }
            ]
        },
        {
            title: "Departure from Normal",
            sublayers: [
                {
                    title: "Today's Departure from Normal",
                    id: 158,
                    visible: false
                },
                {
                    title: "Last 7 Days Departure from Normal",
                    id: 162,
                    visible: false
                },
                {
                    title: "Last 10 Days Departure from Normal",
                    id: 166,
                    visible: false
                },
                {
                    title: "Last 14 Days Departure from Normal",
                    id: 170,
                    visible: false
                },
                {
                    title: "Last 30 Days Departure from Normal",
                    id: 174,
                    visible: false
                },
                {
                    title: "Last 60 Days Departure from Normal",
                    id: 178,
                    visible: false
                },
                {
                    title: "Last 90 Days Departure from Normal",
                    id: 182,
                    visible: false
                },
                {
                    title: "Last 120 Days Departure from Normal",
                    id: 186,
                    visible: false
                },
                {
                    title: "Last 180 Days Departure from Normal",
                    id: 190,
                    visible: false
                },
                {
                    title: "Last 365 Days Departure from Normal",
                    id: 194,
                    visible: false
                },
                {
                    title: "Month to Date Departure from Normal",
                    id: 198,
                    visible: false
                },
                {
                    title: "Year to Date Departure from Normal",
                    id: 202,
                    visible: false
                },
                {
                    title: "Water Year to Date Departure from Normal",
                    id: 206,
                    visible: false
                }
            ]
        },
        {
            title: "Percent of Normal",
            sublayers: [
                {
                    title: "Today's Percent of Normal",
                    id: 211,
                    visible: false
                },
                {
                    title: "Last 7 Days Percent of Normal",
                    id: 215,
                    visible: false
                },
                {
                    title: "Last 10 Days Percent of Normal",
                    id: 219,
                    visible: false
                },
                {
                    title: "Last 14 Days Percent of Normal",
                    id: 223,
                    visible: false
                },
                {
                    title: "Last 30 Days Percent of Normal",
                    id: 227,
                    visible: false
                },
                {
                    title: "Last 60 Days Percent of Normal",
                    id: 231,
                    visible: false
                },
                {
                    title: "Last 90 Days Percent of Normal",
                    id: 235,
                    visible: false
                },
                {
                    title: "Last 120 Days Percent of Normal",
                    id: 239,
                    visible: false
                },
                {
                    title: "Last 180 Days Percent of Normal",
                    id: 243,
                    visible: false
                },
                {
                    title: "Last 365 Days Percent of Normal",
                    id: 247,
                    visible: false
                },
                {
                    title: "Month to Date Percent of Normal",
                    id: 251,
                    visible: false
                },
                {
                    title: "Year to Date Percent of Normal",
                    id: 255,
                    visible: false
                },
                {
                    title: "Water Year to Date Percent of Normal",
                    id: 259,
                    visible: false
                }
            ]
        }
    ]
});