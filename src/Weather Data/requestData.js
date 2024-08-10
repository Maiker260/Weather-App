import getWeatherInfo from "./getWeatherInfo";
import weatherDaysHanlder from "./weatherDaysHandler";
import weatherInfoRequested from "./weatherInfoRequested";

export default function requestData(inputValue, element, temperatureScale, newDataRequest) {

    if (inputValue) {
        newDataRequest = true;
        startRequest(inputValue, element, temperatureScale, newDataRequest);
    } else {
        inputValue = 'San Jose, CR';
        startRequest(inputValue, element, temperatureScale);
    }
}

async function startRequest(inputValue, element, temperatureScale, newDataRequest) {
    const weatherData = await getWeatherInfo(inputValue, newDataRequest);
        
    weatherInfoRequested(element, weatherData.data, temperatureScale);
    weatherDaysHanlder(weatherData.data, temperatureScale)
}