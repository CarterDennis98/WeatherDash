import { apm24Hour } from "./apm-2.5km-24-hour";
import { apm24HourBiasCorrected } from "./apm-2.5km-24-hour-bias-corrected";
import { apmOneHour } from "./apm-2.5km-one-hour";
import { apmOneHourBiasCorrected } from "./apm-2.5km-one-hour-bias-corrected";
import { eightHourAvgOzone } from "./eight-hour-avg-ozone";
import { eightHourAvgOzoneBiasCorrected } from "./eight-hour-avg-ozone-bias-corrected";
import { eightHourMaximumOzone } from "./eight-hour-maximum-ozone";
import { eightHourMaximumOzoneBiasCorrected } from "./eight-hour-maximum-ozone-bias-corrected";
import { mpmOneHour } from "./mpm-2.5km-one-hour";
import { mpmOneHourBiasCorrected } from "./mpm-one-hour-bias-corrected";
import { oneHourAvgOzone } from "./one-hour-avg-ozone";
import { oneHourAvgOzoneBiasCorrected } from "./one-hour-avg-ozone-bias-corrected";
import { oneHourMaximumOzone } from "./one-hour-maximum-ozone";
import { oneHourMaximumOzoneBiasCorrected } from "./one-hour-maximum-ozone-bias-corrected";
import { surfaceDust } from "./surface-dust";
import { surfaceSmoke } from "./surface-smoke";
import { verticalDust } from "./vertical-dust";
import { verticalSmoke } from "./vertical-smoke";

const dustGroup = {
    title: "Dust",
    type: "group",
    layers: [
        surfaceDust,
        verticalDust
    ]
}

const ozoneGroup = {
    title: "Ozone",
    type: "group",
    layers: [
        oneHourAvgOzone,
        oneHourAvgOzoneBiasCorrected,
        oneHourMaximumOzone,
        oneHourMaximumOzoneBiasCorrected,
        eightHourAvgOzone,
        eightHourAvgOzoneBiasCorrected,
        eightHourMaximumOzone,
        eightHourMaximumOzoneBiasCorrected
    ]
}

const smokeGroup = {
    title: "Smoke",
    type: "group",
    layers: [
        surfaceSmoke,
        verticalSmoke
    ]
}

const apmMpmGroup = {
    title: "APM/MPM",
    type: "group",
    layers: [
        apmOneHour,
        apmOneHourBiasCorrected,
        apm24Hour,
        apm24HourBiasCorrected,
        mpmOneHour,
        mpmOneHourBiasCorrected
    ]
}

export const airQualityGroup = {
    title: "Air Quality",
    type: "group",
    layers: [
        dustGroup,
        ozoneGroup,
        smokeGroup,
        apmMpmGroup
    ]
}