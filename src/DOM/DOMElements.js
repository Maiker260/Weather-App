export default function DOMElements() {
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

    const inputElements = {
        mainSearchBar: "main_search_bar",
        searchBtn: "main_search_btn",
    };

    return { weatherInfoElements, inputElements }
}