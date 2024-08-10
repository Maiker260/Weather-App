import getDOMElements from "./getDOMElements";
import DOMElements from "./DOMElements";
import requestData from "../Weather Data/requestData";

export default function DOMLoad(temperatureScale, newDataRequest) {
    document.addEventListener('DOMContentLoaded', () => {
        newDataRequest = true;

        const weatherDOMElements = DOMElements();
        const weatherElements = getDOMElements(weatherDOMElements.weatherInfoElements);

        requestData('San Jose, CR', weatherElements, temperatureScale, newDataRequest);
    })
}