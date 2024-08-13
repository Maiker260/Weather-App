import updateDayDOMElementInfo from "../DOM/updateDayDOMElementInfo";

export default function weatherDaysHandler(data, temperatureScale, newDataRequest) {

    // Extract only the first 7 days
    const days = data.weatherDays.slice(0, 7).map(({ datetime, tempmin, tempmax, icon }) => ({
        datetime,
        tempmin,
        tempmax,
        icon,
    }));

    days.forEach((day, index) => {
        updateDayDOMElementInfo(day, index, temperatureScale, newDataRequest);
    });
}