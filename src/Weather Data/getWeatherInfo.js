export default async function getWeatherInfo(userLocation) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=XDRLGMWDKUYLW6BM4HGMJM8RS`);
        
        if (!response.ok) {
            throw new Error(`HTTP Request Error: ${response.status}`);
        }
        
        const data = await response.json();

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