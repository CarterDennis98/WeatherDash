import { radar } from "./radar";
import { snowAnalysis } from "./snow_analysis";
import { watchesWarnings } from "./watches-warnings";

export const watchesWarningsRadarGroup = {
    title: "Watches, Warnings, and Radar",
    type: "group",
    layers: [
        radar,
        watchesWarnings,
        snowAnalysis
    ]
}