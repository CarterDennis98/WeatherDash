import { ahpsRiverGaugeObservationsForecast } from "./ahps-river-gauge-observations-forecast";
import { nationalSignificantRiverFloodOutlook } from "./national-significant-river-flood-outlook";

export const waterGroup = {
    title: "Water",
    type: "group",
    layers: [
        ahpsRiverGaugeObservationsForecast,
        nationalSignificantRiverFloodOutlook
    ]
}