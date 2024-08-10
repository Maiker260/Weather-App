import updateDayDOMElementInfo from "../DOM/updateDayDOMElementInfo";

export default function weatherDaysHandler(data, temperatureScale) {

    // Extract only the first 7 days
    const days = data.weatherDays.slice(0, 7).map(({ datetime, tempmin, tempmax }) => ({
        datetime,
        tempmin,
        tempmax,
    }));

    days.forEach((day, index) => {
        updateDayDOMElementInfo(day, index, temperatureScale);
    });
}