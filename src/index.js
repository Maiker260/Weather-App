// JS Files
import displayWeather from './DOM/displayWeather';
import DOMLoad from './DOM/DOMLoad';

// CSS
import './style.css';

// JS
let temperatureScale = 'Celsius';
let newDataRequest = false;
let data;

const weather = displayWeather(temperatureScale, newDataRequest);

const loadDOM = DOMLoad(temperatureScale, newDataRequest);