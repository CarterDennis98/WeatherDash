import { spcOutlook } from "./outlook";
import { precipitationHazards } from "./precipitationHazards";
import { usHazardsDroughtWildfireInfo } from "./usHazardsDroughtWildfireInfo";
import { weatherFeaturesPrecipitationForecast } from "./weatherFeaturesPrecipitationForecast";

export const weatherGroup = {
    title: "Weather",
    type: "group",
    layers: [
        usHazardsDroughtWildfireInfo,
        precipitationHazards,
        spcOutlook,
        weatherFeaturesPrecipitationForecast
    ]
}