// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Button {\n  background: black;\n  font-family: 'Train One', cursive;\n}\n.Button:hover {\n  cursor: pointer;\n  background: var(--tertiary);\n  transform: scale(1.05);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}