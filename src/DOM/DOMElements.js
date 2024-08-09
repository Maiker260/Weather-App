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
        day0: {
            title: "day0",
            min: "day0_min",
            max: "day0_max"
        },
        day1: {
            title: "day1",
            min: "day1_min",
            max: "day1_max"
        },
        day2: {
            title: "day2",
            min: "day2_min",
            max: "day2_max"
        },
        day3: {
            title: "day3",
            min: "day3_min",
            max: "day3_max"
        },
        day4: {
            title: "day4",
            min: "day4_min",
            max: "day4_max"
        },
        day5: {
            title: "day5",
            min: "day5_min",
            max: "day5_max"
        },
        day6: {
            title: "day6",
            min: "day6_min",
            max: "day6_max"
        },
    }

    const inputElements = {
        mainSearchBar: "main_search_bar",
        searchBtn: "main_search_btn",
    };

    return { weatherInfoElements, weatherDays, inputElements }
}