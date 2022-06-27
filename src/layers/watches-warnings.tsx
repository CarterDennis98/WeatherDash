import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import axios from "axios";

const getAlertTitle = async (feature: any) => {
    let layer = watchesWarnings.findSublayerById(1);
    let titleQuery = layer.createQuery();
    titleQuery.where = `objectid = '${feature.graphic.attributes.objectid}'`;
    return (layer.queryFeatures(titleQuery).then(async function (queryResponse) {
        return (axios.get(`https://api.weather.gov/alerts/${queryResponse.features[0].attributes.cap_id}`).then(async function (axiosResponse) {
            return(axiosResponse.data.properties.event);
        }));
    }));
}

const getAlertContent = async (feature: any) => {
    let layer = watchesWarnings.findSublayerById(1);
    let contentQuery = layer.createQuery();
    contentQuery.where = `objectid = '${feature.graphic.attributes.objectid}'`;
    return (layer.queryFeatures(contentQuery).then(async function (queryResponse) {
        return (axios.get(`https://api.weather.gov/alerts/${queryResponse.features[0].attributes.cap_id}`).then(async function (axiosResponse) {
            return (`<b>${axiosResponse.data.properties.headline}</b><br><br><b>Description: </b>${axiosResponse.data.properties.description}`);
        }));
    }));
}

const alertTemplate = {
    title: getAlertTitle,
    content: getAlertContent
}

export const watchesWarnings = new MapImageLayer({
    title: "Watches + Warnings",
    url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/watch_warn_adv/MapServer",
    opacity: 0.7,
    refreshInterval: 0.25,
    sublayers: [
        {
            title: "Watches and Warnings",
            id: 1,
            visible: true,
            popupTemplate: alertTemplate
        },
        {
            title: "Warnings",
            id: 0,
            visible: true,
            popupTemplate: alertTemplate
        }
    ]
});