// JS Files
import displayWeather from './DOM/displayWeather';
import DOMLoad from './DOM/DOMLoad';

// CSS
import './style.css';

// JS
let temperatureScale = 'Celsius';
let newDataRequest = false;
export let weatherStoredData;

const weather = displayWeather(temperatureScale, newDataRequest);

const reloadDOM = DOMLoad(temperatureScale, newDataRequest);