import getWeatherInfo from "./getWeatherInfo";
import weatherDaysHandler from "./weatherDaysHandler";
import weatherInfoRequested from "./weatherInfoRequested";
import { weatherStoredData } from "..";

export default function requestData(inputValue, element, temperatureScale, newDataRequest) {
    
    if (newDataRequest) {
        startRequest(inputValue, element, temperatureScale, newDataRequest);
    } else {
        inputValue = 'San Jose, CR';
        startRequest(inputValue, element, temperatureScale, newDataRequest);
    }
}

async function startRequest(inputValue, element, temperatureScale, newDataRequest) {
    const weatherData = await getWeatherInfo(inputValue, newDataRequest);

    if (weatherData.success) {
        // data will use the latest "City" stored.
        weatherStoredData = weatherData.data;

        weatherInfoRequested(element, weatherStoredData, temperatureScale);
        weatherDaysHandler(weatherStoredData, temperatureScale, newDataRequest);
    } else {
        console.error(weatherData.error);
    }
}