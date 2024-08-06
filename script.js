
async function getWeatherInfo(userLocation) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=XDRLGMWDKUYLW6BM4HGMJM8RS`);
        
        if (!response.ok) {
            throw new Error(`HTTP Request Error: ${response.status}`);
        }
        
        const data = await response.json();

        console.log(data);

        const { 
            days: weatherDays,
            description: weatherDescription,
            resolvedAddress: weatherAddress,
            timezone: weatherTimezone,
            currentConditions: weatherCurrentConditions,
        } = data;
        
        return {
            success: true,
            data: { 
                weatherDays, 
                weatherDescription, 
                weatherAddress, 
                weatherTimezone, 
                weatherCurrentConditions 
            },
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
}

function displayWeather() {

    function getElements(items) {
        const elements = {};
        for (const [key, value] of Object.entries(items)) {
            elements[key] = document.querySelector(`#${value}`);
        };
        return elements;
    }

    const weatherInfoElements = {
        cityName: "city_name",
        countryName: "country_name",
        currentDay: "current_day",
        currentTime: "current_time",
        currentWeather: "current_weather",
        currentDescription: "weather_description",
        feelsLike: "feels_like",
        humidity: "humidity",
        chanceOfRain: "chance_of_rain",
        windSpeed: "wind_speed",
    };

    const InputElements = {
        mainSearchBar: "main_search_bar",
        searchBtn: "main_search_btn",
    };

    const weatherElements = getElements(weatherInfoElements);
    const weatherInputs = getElements(InputElements);

    weatherInputs.searchBtn.addEventListener('click', async () => {
        const weatherRequested = await getWeatherInfo(weatherInputs.mainSearchBar.value);

        // Testing Purposes Only, Need to CHANGE
        weatherElements.cityName.textContent = weatherRequested.data.weatherAddress;
        weatherElements.countryName.textContent = weatherRequested.data.weatherAddress;
        weatherElements.currentDay.textContent = weatherRequested.data.weatherCurrentConditions.datetime;
        weatherElements.currentTime.textContent = weatherRequested.data.weatherCurrentConditions.datetime;
        weatherElements.currentWeather.textContent = weatherRequested.data.weatherCurrentConditions.temp;
        weatherElements.currentDescription.textContent = weatherRequested.data.weatherDescription;
        weatherElements.feelsLike.textContent = weatherRequested.data.weatherCurrentConditions.feelslike;
        weatherElements.humidity.textContent = "100%"
        weatherElements.chanceOfRain.textContent = weatherRequested.data.weatherCurrentConditions.humidity;
        weatherElements.windSpeed.textContent = weatherRequested.data.weatherCurrentConditions.windspeed;
        
    });

}

const weather = displayWeather();