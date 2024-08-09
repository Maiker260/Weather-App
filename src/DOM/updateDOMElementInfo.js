import changeTemperatureScale from "../Weather Data/changeTemperatureScale";

export default function updateDOMElementInfo(DOMElement, item, data, temperatureScale) {
    for (const [elementKey, dataKey] of Object.entries(item)) {
        const [mainKey, subKey] = dataKey.split('.');
        if (subKey) {
            if (checkWeatherValue(elementKey)) {
                DOMElement[elementKey].textContent = changeTemperatureScale(temperatureScale, data[mainKey][subKey]);
            } else if (addPercentageSymbol(elementKey)) {
                DOMElement[elementKey].textContent = `${data[mainKey][subKey]}%`;
            } else {
                DOMElement[elementKey].textContent = `${data[mainKey][subKey]}`;
            }
        } else {
            DOMElement[elementKey].textContent = data[mainKey];
        }
    }
}

function checkWeatherValue(value) {
    if (value == 'currentWeather' || value == 'feelsLike') {
        return true
    }
    return false
}

function addPercentageSymbol(value) {
    if (value == 'humidity' || value == 'chanceOfRain') {
        return true
    }
    return false
}