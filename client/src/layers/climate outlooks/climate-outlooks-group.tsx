import { cpcDroughtOutlook } from "./cpc-drought-outlook";
import { eightToFourteenDayOutlooks } from "./eight-to-fourteen-day-outlooks";
import { gfsPrecipitationAnomalies } from "./gfs-precipitation-anomalies";
import { monthlyPrecipitationOutlooks } from "./monthly-precipitation-outlooks";
import { monthlyTemperatureOutlooks } from "./monthly-temperature-outlooks";
import { seasonalPrecipitationOutlooks } from "./seasonal-precipitation-outlooks";
import { seasonalTemperatureOutlooks } from "./seasonal-temperature-outlooks";
import { sixToTenDayOutlooks } from "./six-to-ten-day-outlooks";
import { weeklySeaSurfaceTemperatures } from "./weekly-sea-surface-temperatures";

export const climateOutlooksGroup = {
    title: "Climate Outlooks",
    type: "group",
    layers: [
        sixToTenDayOutlooks,
        eightToFourteenDayOutlooks,
        gfsPrecipitationAnomalies,
        monthlyPrecipitationOutlooks,
        monthlyTemperatureOutlooks,
        seasonalPrecipitationOutlooks,
        seasonalTemperatureOutlooks,
        weeklySeaSurfaceTemperatures,
        cpcDroughtOutlook
    ]
}