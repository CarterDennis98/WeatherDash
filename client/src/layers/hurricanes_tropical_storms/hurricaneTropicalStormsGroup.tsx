import { atlanticHurricaneForecast } from "./atlanticHurricaneForecast";
import { eastPacificHurricaneForecast } from "./eastPacificHurricaneForecast";

export const hurricaneTropicalStormsGroup = {
    title: "Hurricanes/Tropical Storms",
    type: "group",
    layers: [
        atlanticHurricaneForecast,
        eastPacificHurricaneForecast
    ]
}