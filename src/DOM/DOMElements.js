export default function DOMElements() {
    const weatherInfoElements = {
        cityName: "city_name",
        countryName: "country_name",
        currentTime: "current_time",
        currentWeather: "current_weather",
        currentDescription: "weather_description",
        feelsLike: "feels_like",
        humidity: "humidity",
        chanceOfRain: "chance_of_rain",
        windSpeed: "wind_speed",
    };

    const weatherDays = {
        currentDay: "current_day",
        day0: "first_day",
        day1: "second_day",
        day2: "third_day",
        day3: "fourth_day",
        day4: "fifth_day",
        day5: "sixth_day",
        day6: "seventh_day",
    }

    const inputElements = {
        mainSearchBar: "main_search_bar",
        searchBtn: "main_search_btn",
    };

    return { weatherInfoElements, weatherDays, inputElements }
}