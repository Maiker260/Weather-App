export default function updateDOMElementInfo(DOMElement, item, data) {
    for (const [elementKey, dataKey] of Object.entries(item)) {
        const [mainKey, subKey] = dataKey.split('.');
        if (subKey) {
            DOMElement[elementKey].textContent = data[mainKey][subKey];
        } else {
            DOMElement[elementKey].textContent = data[mainKey];
        }
    }
}