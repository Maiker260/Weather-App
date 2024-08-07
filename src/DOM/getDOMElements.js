export default function getDOMElements(items) {
    const elements = {};
    for (const [key, value] of Object.entries(items)) {
        elements[key] = document.querySelector(`#${value}`);
    };
    return elements;
}