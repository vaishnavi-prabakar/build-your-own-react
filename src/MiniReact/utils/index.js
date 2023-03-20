export function updateDomProperties(domElement, properties) {

    const isEvent = (key) => key.startsWith("on");
    const isProperty = (key) => key !== "children" && !isEvent(key);

    Object.keys(properties)
        .filter(isProperty)
        .forEach((name) => {
            domElement.setAttribute(name, properties[name])
        });
    Object.keys(properties)
        .filter(isEvent)
        .forEach((name) => {
            const eventType = name.toLowerCase().substring(2);
            domElement.addEventListener(eventType, properties[name])
        });
}