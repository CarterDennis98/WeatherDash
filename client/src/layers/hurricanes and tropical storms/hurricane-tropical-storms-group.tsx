import { atlanticHurricaneForecast } from "./atlantic-hurricane-forecast";
import { eastPacificHurricaneForecast } from "./east-pacific-hurricane-forecast";

export const hurricaneTropicalStormsGroup = {
    title: "Hurricanes/Tropical Storms",
    type: "group",
    layers: [
        atlanticHurricaneForecast,
        eastPacificHurricaneForecast
    ]
}