export default function changeTemperatureScale(temperatureScale, value) {

    // Data is received in fahrenheit.
    const fahrenheit = value;
    const celsius = (fahrenheit - 32) * 5/9;
    let newValue = 0;

    switch (temperatureScale) {
        case 'Celsius':
            newValue = `${parseInt(celsius)} °C`;
        break;
        case 'Fahrenheit':
            newValue = `${parseInt(fahrenheit)} °F`;
        break
    }
    return newValue;
}