import getWeatherInfo from "../Weather Data/getWeatherInfo";
import DOMElements from "./DOMElements";
import weatherInfoRequested from "../Weather Data/weatherInfoRequested";
import getDOMElements from "./getDOMElements";

export default function displayWeather() {
    const weatherDOMElements = DOMElements();

    const weatherElements = getDOMElements(weatherDOMElements.weatherInfoElements);
    const weatherInputs = getDOMElements(weatherDOMElements.inputElements);

    weatherInputs.searchBtn.addEventListener('click', async () => {
        const weatherData = await getWeatherInfo(weatherInputs.mainSearchBar.value);

        weatherInfoRequested(weatherElements, weatherData.data);
    });
}