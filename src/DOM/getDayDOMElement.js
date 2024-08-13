export default function getDayDOMElement(list) {
    const elements = {};
    for (const [mainKey, mainValue] of Object.entries(list)) {
        if (mainValue === "current_day" || mainValue === "current_day_icon") {
            elements[mainKey] = document.querySelector(`#${mainValue}`);
        } else {
            elements[mainKey] = mainValue;
            for (const [subKey, subValue] of Object.entries(mainValue)) {
                mainValue[subKey] = document.querySelector(`#${subValue}`);
            }
        }
    }
    return elements;
}