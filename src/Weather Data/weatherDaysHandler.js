import getDayDOMElement from "../DOM/getDayDOMElement";
import DOMElements from "../DOM/DOMElements";
import updateDayDOMElementInfo from "../DOM/updateDayDOMElementInfo";

export default function weatherDaysHanlder(data) {

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

    const DOMDaysList = getDayDOMElement(DOMElements().weatherDays);

    days.forEach( (day, index) => {

        const dayIndex = `day${index}`;
        const DOMDay = DOMDaysList[dayIndex];


        if (DOMDay) {
            DOMDay.min.textContent = day.tempmin;
            DOMDay.max.textContent = day.tempmax;
            // DOMDay.title.textContent = day.datetime;
        }

        if (index == 0) {
            DOMDaysList['currentDay'].textContent = day.datetime;
        }

    });
        

}