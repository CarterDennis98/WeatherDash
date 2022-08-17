import { spcOutlook } from "./outlook";
import { precipitationHazards } from "./precipitation-hazards";
import { probabalisticWinterPrecipitation } from "./probabalistic-winter-precipitation";
import { usHazardsDroughtWildfireInfo } from "./us-hazards-drought-wildfire-info";
import { weatherFeaturesPrecipitationForecast } from "./weather-features-precipitation-forecast";

export const weatherGroup = {
    title: "Weather",
    type: "group",
    layers: [
        usHazardsDroughtWildfireInfo,
        probabalisticWinterPrecipitation,
        precipitationHazards,
        spcOutlook,
        weatherFeaturesPrecipitationForecast
    ]
}