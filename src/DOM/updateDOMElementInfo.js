import changeTemperatureScale from "../Weather Data/changeTemperatureScale";

export default function updateDOMElementInfo(DOMElement, item, data, temperatureScale) {
    for (const [elementKey, dataKey] of Object.entries(item)) {
        const [mainKey, subKey] = dataKey.split('.');
        let element = DOMElement[elementKey];
        if (subKey) {
                element.textContent = `${data[mainKey][subKey]}%`;
                addSymbolNeeded(element, elementKey, data, mainKey, subKey, temperatureScale);
        } else {
            DOMElement[elementKey].textContent = data[mainKey];
        }
    }
}

function addSymbolNeeded(element, value, data, mainKey, subKey, temperatureScale) {
    switch (value) {
       case 'currentWeather':
        element.textContent = changeTemperatureScale(temperatureScale, data[mainKey][subKey]);
        break;
       case 'feelsLike':
        element.textContent = changeTemperatureScale(temperatureScale, data[mainKey][subKey]);
        break;
       case 'humidity' || 'chanceOfRain':
        element.textContent = `${data[mainKey][subKey]}%`;
        break;
    //    case 'chanceOfRain':
    //     element.textContent = `${data[mainKey][subKey]}%`;
    //     break;
       case 'windSpeed':
        element.textContent = `${data[mainKey][subKey]}km/h`;
        break;
       default:
        element.textContent = `${data[mainKey][subKey]}`;
    }
}