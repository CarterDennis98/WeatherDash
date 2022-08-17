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
import { quantitativePrecipForecast } from "./water/quantitative-precip-forecast";
import { rfcHourlyAndDailyQPE } from "./water/rfc-hourly-and-daily-qpe";
// Fire Weather group
import { spcFireWeatherOutlooks } from "./fire weather/spc-fire-weather-outlooks";
// Air Quality Group
import { apm24Hour } from "./air quality/apm-2.5km-24-hour";
import { apm24HourBiasCorrected } from "./air quality/apm-2.5km-24-hour-bias-corrected";
import { apmOneHour } from "./air quality/apm-2.5km-one-hour";
import { apmOneHourBiasCorrected } from "./air quality/apm-2.5km-one-hour-bias-corrected";
import { eightHourAvgOzone } from "./air quality/eight-hour-avg-ozone";
import { eightHourAvgOzoneBiasCorrected } from "./air quality/eight-hour-avg-ozone-bias-corrected";
import { eightHourMaximumOzone } from "./air quality/eight-hour-maximum-ozone";
import { eightHourMaximumOzoneBiasCorrected } from "./air quality/eight-hour-maximum-ozone-bias-corrected";
import { mpmOneHour } from "./air quality/mpm-2.5km-one-hour";
import { mpmOneHourBiasCorrected } from "./air quality/mpm-one-hour-bias-corrected";
import { oneHourAvgOzone } from "./air quality/one-hour-avg-ozone";
import { oneHourAvgOzoneBiasCorrected } from "./air quality/one-hour-avg-ozone-bias-corrected";
import { oneHourMaximumOzone } from "./air quality/one-hour-maximum-ozone";
import { oneHourMaximumOzoneBiasCorrected } from "./air quality/one-hour-maximum-ozone-bias-corrected";
import { surfaceDust } from "./air quality/surface-dust";
import { surfaceSmoke } from "./air quality/surface-smoke";
import { verticalDust } from "./air quality/vertical-dust";
import { verticalSmoke } from "./air quality/vertical-smoke";

export const allLayers = [
    mpmOneHourBiasCorrected,
    mpmOneHour,
    apm24HourBiasCorrected,
    apm24Hour,
    apmOneHourBiasCorrected,
    apmOneHour,
    verticalSmoke,
    surfaceSmoke,
    eightHourMaximumOzoneBiasCorrected,
    eightHourMaximumOzone,
    eightHourAvgOzoneBiasCorrected,
    eightHourAvgOzone,
    oneHourMaximumOzoneBiasCorrected,
    oneHourMaximumOzone,
    oneHourAvgOzoneBiasCorrected,
    oneHourAvgOzone,
    verticalDust,
    surfaceDust,
    spcFireWeatherOutlooks,
    ahpsRiverGaugeObservationsForecast,
    nationalSignificantRiverFloodOutlook,
    rfcHourlyAndDailyQPE,
    quantitativePrecipForecast,
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