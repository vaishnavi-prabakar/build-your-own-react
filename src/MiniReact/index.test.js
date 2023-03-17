/** @jsx MiniReact.createElement */

import MiniReact, { render } from ".";

describe("MiniReact", () => {
  describe("step 1", function () {
    it("jsx should return a object", () => {
      const example = <div></div>;
      expect(example).toBeDefined();
    });
  });

  describe("step 2", function () {
    it("should render a div", () => {
      const rootElement = document.createElement("section");
      render(<div></div>, rootElement);

      expect(rootElement.querySelector("div")).toBeTruthy();
    });
  });

  describe("step 3", function () {
    it("should render a div with text content", () => {
      const rootElement = document.createElement("section");
      render(<div>Hello, World!</div>, rootElement);

      const divElement = rootElement.querySelector("div");

      expect(divElement.textContent).toBe("Hello, World!");
    });

    it("should render an empty div when no content", () => {
      const rootElement = document.createElement("section");
      render(<div></div>, rootElement);

      const divElement = rootElement.querySelector("div");

      expect(divElement.textContent).toBe("");
      expect(divElement.childNodes.length).toBe(0);
    });
  });

  describe("step 4", function () {
    it("should render a div with properties", () => {
      const rootElement = document.createElement("section");
      render(<div id="my-div" title="My div element"></div>, rootElement);

      const divElement = rootElement.querySelector("div");

      expect(divElement.getAttributeNames().length).toBe(2);
      expect(divElement.getAttribute("id")).toBe("my-div");
      expect(divElement.getAttribute("title")).toBe("My div element");
    });

    it("should render a div with properties that are event listeners", () => {
      const rootElement = document.createElement("section");
      const mockEventListener = jest.fn();
      render(<div onClick={mockEventListener}></div>, rootElement);

      const divElement = rootElement.querySelector("div");
      divElement.click();

      expect(mockEventListener).toHaveBeenCalled();
    });
  });

  describe("step 5", function () {
    it("should render nested children elements", () => {
      const rootElement = document.createElement("section");
      render(
        <div>
          Hello, World!
          <p>
            This is a <b>paragraph.</b>
          </p>
        </div>,
        rootElement
      );

      const divElement = rootElement.querySelector("div");
      const childNodes = divElement.childNodes;

      expect(childNodes.length).toBe(2);

      expect(childNodes.item(0).textContent).toEqual("Hello, World!");

      const paragraphElement = divElement.querySelector("p");
      expect(paragraphElement.textContent).toEqual("This is a paragraph.");

      const boldElement = paragraphElement.querySelector("b");
      expect(boldElement).toBeTruthy();
      expect(boldElement.textContent).toEqual("paragraph.");
    });
  });
});
