import updateDayDOMElementInfo from "../DOM/updateDayDOMElementInfo";

export default function weatherDaysHanlder(data, temperatureScale) {

    const dayData = data.weatherDays.map(({datetime, tempmin, tempmax}) => ({
        datetime,
        tempmin,
        tempmax,
    }));

    const [
        day0,
        day1,
        day2,
        day3,
        day4,
        day5,
        day6,
    ] = dayData;

    const days = [ 
        day0, 
        day1, 
        day2, 
        day3, 
        day4, 
        day5, 
        day6
    ];

    days.forEach( (day, index) => {
        updateDayDOMElementInfo(day, index, temperatureScale);
    });
}