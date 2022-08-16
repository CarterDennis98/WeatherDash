import { spcOutlook } from "./outlook";
import { precipitationHazards } from "./precipitationHazards";
import { probabalisticWinterPrecipitation } from "./probabalisticWinterPrecipitation";
import { usHazardsDroughtWildfireInfo } from "./usHazardsDroughtWildfireInfo";
import { weatherFeaturesPrecipitationForecast } from "./weatherFeaturesPrecipitationForecast";

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