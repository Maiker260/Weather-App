import DOMElements from "./DOMElements";
import getDOMElements from "./getDOMElements";
import requestData from "../Weather Data/requestData";

export default function temperatureScaleBtns(temperatureScale) {
    const weatherDOMElements = DOMElements();

    const weatherElements = getDOMElements(weatherDOMElements.weatherInfoElements);
    const weatherInputs = getDOMElements(weatherDOMElements.inputElements);

    weatherInputs.celsius.addEventListener('click', () => {
        temperatureScale = 'Celsius';
        weatherInputs.celsius.classList.toggle("active_temp")
        weatherInputs.fahrenheitBtn.classList.toggle("active_temp")
        requestData(weatherInputs.mainSearchBar.value, weatherElements, temperatureScale);
    });

    weatherInputs.fahrenheitBtn.addEventListener('click', () => {
        temperatureScale = 'Fahrenheit';
        weatherInputs.celsius.classList.toggle("active_temp")
        weatherInputs.fahrenheitBtn.classList.toggle("active_temp")
        requestData(weatherInputs.mainSearchBar.value, weatherElements, temperatureScale);
    });
}