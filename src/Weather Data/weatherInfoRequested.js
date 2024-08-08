import updateDOMElementInfo from "../DOM/updateDOMElementInfo";

export default function weatherInfoRequested(DOMelement, data) {

    const [city, country] = data.weatherAddress.split(',').map(info => info.trim());

    DOMelement.cityName.textContent = city;
    DOMelement.countryName.textContent = country;

    const dataMapping = {
        currentTime: 'weatherCurrentConditions.datetime',
        currentWeather: 'weatherCurrentConditions.temp',
        currentDescription: 'weatherDescription',
        feelsLike: 'weatherCurrentConditions.feelslike',
        chanceOfRain: 'weatherCurrentConditions.humidity',
        windSpeed: 'weatherCurrentConditions.windspeed',
        // chanceOfRain: 'chanceOfRain',
    };

    updateDOMElementInfo(DOMelement, dataMapping, data);
}