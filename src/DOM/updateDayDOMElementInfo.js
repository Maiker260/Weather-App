import DOMElements from "./DOMElements";
import getDayDOMElement from "./getDayDOMElement";
import changeTemperatureScale from "../Weather Data/changeTemperatureScale";

export default function updateDayDOMElementInfo(day, index, temperatureScale) {
    
    const DOMDaysList = getDayDOMElement(DOMElements().weatherDays);
    const dayIndex = `day${index}`;
    const DOMDay = DOMDaysList[dayIndex];
    
    // Date will show 1 day before the one requested if "Hyphens" are used, if a "/" is used it works.
    const date = new Date(day.datetime.replace(/-/g, '\/'));
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (DOMDay) {
        DOMDay.title.textContent = weekDays[date.getDay()];
        DOMDay.min.textContent = `Min: ${changeTemperatureScale(temperatureScale, day.tempmin)}`;
        DOMDay.max.textContent = `Max: ${changeTemperatureScale(temperatureScale, day.tempmax)}`;
    }

    if (index == 0) {
        DOMDaysList['currentDay'].textContent = day.datetime;
    }
}