import { updateDomProperties } from "../utils";

export function render(element, container) {
    const { type, props } = element;
    console.log(props)
    const children = props.children;
    const createdElement = document.createElement(type);
    for (let child of children) {
        createdElement.appendChild(document.createTextNode(child))
    }

    updateDomProperties(createdElement, props);
    container.appendChild(createdElement);
}
