import DOMElements from "./DOMElements";
import getDOMElements from "./getDOMElements";
import requestData from "../Weather Data/requestData";
import addTempActiveClass from "./addTempActiveClass";

export default function displayWeather(temperatureScale, newDataRequest) {

    const weatherDOMElements = DOMElements();

    const weatherElements = getDOMElements(weatherDOMElements.weatherInfoElements);
    const weatherInputs = getDOMElements(weatherDOMElements.inputElements);
    const celsiusToggle = weatherInputs.celsiusBtn;
    const fahrenheitToggle = weatherInputs.fahrenheitBtn;
    const userInput = weatherInputs.mainSearchBar;

    weatherInputs.searchBtn.addEventListener('click', () => {
        newDataRequest = true;
        requestData(userInput.value, weatherElements, temperatureScale, newDataRequest);
        newDataRequest = false;
    });

    weatherInputs.mainSearchBar.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            newDataRequest = true;
            requestData(userInput.value, weatherElements, temperatureScale, newDataRequest);
            newDataRequest = false;
        }
    })

    celsiusToggle.addEventListener('click', () => {
        temperatureScale = 'Celsius';
        if (!celsiusToggle.classList.contains("active_temp")) {
            addTempActiveClass(celsiusToggle, fahrenheitToggle);
            requestData(userInput.value, weatherElements, temperatureScale, newDataRequest);
        }
    });

    fahrenheitToggle.addEventListener('click', () => {
        temperatureScale = 'Fahrenheit';
        if (!fahrenheitToggle.classList.contains("active_temp")) {
            addTempActiveClass(fahrenheitToggle, celsiusToggle);
            requestData(userInput.value, weatherElements, temperatureScale, newDataRequest);
        }
    });
}