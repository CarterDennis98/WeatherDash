import { ahpsRiverGaugeObservationsForecast } from "./ahps-river-gauge-observations-forecast";
import { alaskaRiverBreakupStatus } from "./alaska-river-breakup-status";
import { griddedFlashFloodGuidance } from "./gridded-flash-flood-guidance";
import { nationalSignificantRiverFloodOutlook } from "./national-significant-river-flood-outlook";
import { quantitativePrecipForecast } from "./quantitative-precip-forecast";
import { rfcHourlyAndDailyQPE } from "./rfc-hourly-and-daily-qpe";

export const waterGroup = {
    title: "Water",
    type: "group",
    layers: [
        ahpsRiverGaugeObservationsForecast,
        nationalSignificantRiverFloodOutlook,
        rfcHourlyAndDailyQPE,
        quantitativePrecipForecast,
        griddedFlashFloodGuidance,
        alaskaRiverBreakupStatus
    ]
}