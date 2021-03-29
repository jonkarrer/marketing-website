// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Feature {\n  height: 300px;\n  width: 300px;\n  border: var(--tertiary) solid thick;\n  background: var(--main-grey);\n  border-radius: 0.2em;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  transition: all 0.3s ease;\n  font-family: 'Train One', cursive;\n}\n.Feature:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n.image {\n  height: 180px;\n  width: 300px;\n  background: var(--main-grey);\n}\n.image img {\n  object-fit: fill;\n  height: 180px;\n}\n.Feature h3 {\n  padding: 5px;\n  margin-top: 15px;\n  background: var(--tertiary);\n  font-size: 2.1em;\n  width: 90%;\n  color: var(--button-text);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}