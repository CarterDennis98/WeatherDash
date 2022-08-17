// This file contains all layers that the map can display

// Graphics layer
import { customGraphics } from "./graphics";
// Watches, Warnings, Radar group
import { radar } from "./watches warnings radar/radar";
import { snowAnalysis } from "./watches warnings radar/snow-analysis";
import { watchesWarnings } from "./watches warnings radar/watches-warnings";
// Hurricanes/Tropical Storms group
import { atlanticHurricaneForecast } from "./hurricanes and tropical storms/atlantic-hurricane-forecast";
import { eastPacificHurricaneForecast } from "./hurricanes and tropical storms/east-pacific-hurricane-forecast";
// Weather group
import { spcOutlook } from "./weather/outlook";
import { precipitationHazards } from "./weather/precipitation-hazards";
import { probabalisticWinterPrecipitation } from "./weather/probabalistic-winter-precipitation";
import { usHazardsDroughtWildfireInfo } from "./weather/us-hazards-drought-wildfire-info";
import { weatherFeaturesPrecipitationForecast } from "./weather/weather-features-precipitation-forecast";
// Water group
import { ahpsRiverGaugeObservationsForecast } from "./water/ahps-river-gauge-observations-forecast";
import { alaskaRiverBreakupStatus } from "./water/alaska-river-breakup-status";
import { griddedFlashFloodGuidance } from "./water/gridded-flash-flood-guidance";
import { nationalSignificantRiverFloodOutlook } from "./water/national-significant-river-flood-outlook";
import { rfcHourlyAndDailyQPE } from "./water/rfc-hourly-and-daily-qpe";
// Fire Weather group
import { spcFireWeatherOutlooks } from "./fire weather/spc-fire-weather-outlooks";

export const allLayers = [
    spcFireWeatherOutlooks,
    ahpsRiverGaugeObservationsForecast,
    nationalSignificantRiverFloodOutlook,
    rfcHourlyAndDailyQPE,
    griddedFlashFloodGuidance,
    alaskaRiverBreakupStatus,
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