// This file contains all layers that the map can display

// Graphics layer
import { customGraphics } from "./graphics";
// Watches, Warnings, Radar group
import { radar } from "./watches_warnings_radar/radar";
import { snowAnalysis } from "./watches_warnings_radar/snow_analysis";
import { watchesWarnings } from "./watches_warnings_radar/watches-warnings";
// Hurricanes/Tropical Storms
import { atlanticHurricaneForecast } from "./hurricanes_tropical_storms/atlanticHurricaneForecast";
import { eastPacificHurricaneForecast } from "./hurricanes_tropical_storms/eastPacificHurricaneForecast";
// Weather group
import { spcOutlook } from "./weather/outlook";
import { precipitationHazards } from "./weather/precipitationHazards";
import { probabalisticWinterPrecipitation } from "./weather/probabalisticWinterPrecipitation";
import { usHazardsDroughtWildfireInfo } from "./weather/usHazardsDroughtWildfireInfo";
import { weatherFeaturesPrecipitationForecast } from "./weather/weatherFeaturesPrecipitationForecast";

export const allLayers = [
    eastPacificHurricaneForecast,
    atlanticHurricaneForecast,
    snowAnalysis,
    usHazardsDroughtWildfireInfo,
    probabalisticWinterPrecipitation,
    precipitationHazards,
    spcOutlook,
    weatherFeaturesPrecipitationForecast,
    watchesWarnings,
    radar,
    customGraphics
];