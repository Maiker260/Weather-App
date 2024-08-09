import getWeatherInfo from "../Weather Data/getWeatherInfo";
import DOMElements from "./DOMElements";
import weatherInfoRequested from "../Weather Data/weatherInfoRequested";
import getDOMElements from "./getDOMElements";
import weatherDaysHanlder from "../Weather Data/weatherDaysHandler";

export default function displayWeather(temperatureScale) {
    const weatherDOMElements = DOMElements();

    const weatherElements = getDOMElements(weatherDOMElements.weatherInfoElements);
    const weatherInputs = getDOMElements(weatherDOMElements.inputElements);

    weatherInputs.searchBtn.addEventListener('click', () => {
        requestData(weatherInputs.mainSearchBar.value, weatherElements, temperatureScale);
    });

    weatherInputs.mainSearchBar.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            requestData(weatherInputs.mainSearchBar.value, weatherElements, temperatureScale);
        }
    })
}

async function requestData(inputValue, element, temperatureScale) {
    const weatherData = await getWeatherInfo(inputValue);

    weatherInfoRequested(element, weatherData.data, temperatureScale);
    weatherDaysHanlder(weatherData.data, temperatureScale)
}