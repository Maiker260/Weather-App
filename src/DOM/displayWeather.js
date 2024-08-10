import DOMElements from "./DOMElements";
import getDOMElements from "./getDOMElements";
import requestData from "../Weather Data/requestData";

export default function displayWeather(temperatureScale, newDataRequest) {

    const weatherDOMElements = DOMElements();

    const weatherElements = getDOMElements(weatherDOMElements.weatherInfoElements);
    const weatherInputs = getDOMElements(weatherDOMElements.inputElements);
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

    weatherInputs.celsius.addEventListener('click', () => {
        temperatureScale = 'Celsius';
        weatherInputs.celsius.classList.toggle("active_temp")
        weatherInputs.fahrenheitBtn.classList.toggle("active_temp")
        requestData(userInput.value, weatherElements, temperatureScale, newDataRequest);
    });

    weatherInputs.fahrenheitBtn.addEventListener('click', () => {
        temperatureScale = 'Fahrenheit';
        weatherInputs.celsius.classList.toggle("active_temp")
        weatherInputs.fahrenheitBtn.classList.toggle("active_temp")
        requestData(userInput.value, weatherElements, temperatureScale, newDataRequest);
    });
}