
// async function getWeatherInfo(userLocation) {
//     try {
//         const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=XDRLGMWDKUYLW6BM4HGMJM8RS`);
        
//         if (!response.ok) {
//             throw new Error(`HTTP Request Error: ${response.status}`);
//         }
        
//         const data = await response.json();

//         const { 
//             days: weatherDays,
//             description: weatherDescription, 
//             resolvedAddress: weatherAddress, 
//             timezone: weatherTimezone, 
//         } = data;
        
//         return {
//             success: true,
//             data: { weatherDays, weatherDescription, weatherAddress, weatherTimezone },
//         };
//     } catch (error) {
//         return {
//             success: false,
//             error: error.message,
//         };
//     }
// }

// function displayWeather() {

//     const testi = document.querySelector("#testi");
//     const userInput = document.querySelector("#main_search_bar");
//     const sendBtn = document.querySelector("#search_btn");

//     sendBtn.addEventListener('click', async () => {
//         const weatherRequested = await getWeatherInfo(userInput.value);

//         testi.textContent = `The Weather Result is: ${weatherRequested.data.weatherDescription}, ${weatherRequested.data.weatherAddress} and ${weatherRequested.data.weatherTimezone}.`;

//         userInput.value = "";
//     });

// }

// const weather = displayWeather();