import getDOMElements from "../DOM/getDOMElements";
import DOMElements from "../DOM/DOMElements";
import updateDOMElementInfo from "../DOM/updateDOMElementInfo";

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

    const currentWeek = [ day0, day1, day2, day3, day4, day5, day6];

    // const displayDaydata = currentWeek.map(day => {


    //     for (key of DOMDaysList) {
            
    //     }

    // });

    const daysList = DOMElements().weatherDays;
    const DOMDaysList = getDOMElements(daysList);


    // updateDOMElementInfo(DOMDaysList, data);
    console.log(day0);
        

}