import { weatherStoredData } from "..";

export default async function getWeatherInfo(userLocation, newDataRequest) {
    try {

        if (!newDataRequest && weatherStoredData) {
            return {
                success: true,
                data: weatherStoredData,
            };
        }
        
        if (!weatherStoredData || newDataRequest) {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=XDRLGMWDKUYLW6BM4HGMJM8RS`);
            // const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=EWDMM28Z85VSJSSNBJ4PRYFAG`);
            
            if (!response.ok) {
                throw new Error(`HTTP Request Error: ${response.status}`);
            }

            weatherStoredData = await response.json();
        }
        
        const { 
            days: weatherDays,
            description: weatherDescription,
            resolvedAddress: weatherAddress,
            currentConditions: weatherCurrentConditions,
        } = weatherStoredData;

        return {
            success: true,
            data: { 
                weatherDays, 
                weatherDescription, 
                weatherAddress,
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