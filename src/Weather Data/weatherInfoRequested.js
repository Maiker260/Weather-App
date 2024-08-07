export default function weatherInfoRequested(DOMelement, data) {

    const dataMapping = {
        cityName: 'weatherAddress',
        countryName: 'weatherAddress',
        currentDay: 'weatherCurrentConditions.datetime',
        currentTime: 'weatherCurrentConditions.datetime',
        currentWeather: 'weatherCurrentConditions.temp',
        currentDescription: 'weatherDescription',
        feelsLike: 'weatherCurrentConditions.feelslike',
        chanceOfRain: 'weatherCurrentConditions.humidity',
        windSpeed: 'weatherCurrentConditions.windspeed',
        // chanceOfRain: 'chanceOfRain',
    };

    for (const [elementKey, dataKey] of Object.entries(dataMapping)) {
        const [mainKey, subKey] = dataKey.split('.');
        if (subKey) {
            DOMelement[elementKey].textContent = data[mainKey][subKey];
        } else {
            DOMelement[elementKey].textContent = data[mainKey];
        }
    }
}

function separateAddress(address) {

    const result = data.split(',');

    const data = {
        city: result[0],
        country: result[1].trim()
    }
    return { data }
} 