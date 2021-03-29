// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Feature {\n  font-size: 2em;\n  height: 300px;\n  width: 300px;\n  border: var(--tertiary) solid thick;\n  background: var(--off-white);\n}\n.image {\n  height: 200px;\n  width: 300px;\n  background: var(--main-pink);\n}\n.image img {\n  object-fit: fill;\n  height: 200px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}