import { spcOutlook } from "./outlook";
import { usHazardsDroughtWildfireInfo } from "./usHazardsDroughtWildfireInfo";
import { weatherFeaturesPrecipitationForecast } from "./weatherFeaturesPrecipitationForecast";

export const weatherGroup = {
    title: "Weather",
    type: "group",
    layers: [
        usHazardsDroughtWildfireInfo,
        spcOutlook,
        weatherFeaturesPrecipitationForecast
    ]
}