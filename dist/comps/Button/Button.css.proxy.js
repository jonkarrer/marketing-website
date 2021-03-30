// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Button {\n  background: black;\n  font-family: 'Train One', cursive;\n  font-size: 1.8vw;\n}\n.Button:hover {\n  cursor: pointer;\n  background: var(--tertiary);\n  transform: scale(1.05);\n}\n@media (max-width: 1000px) {\n  .Button {\n    background: black;\n    font-family: 'Train One', cursive;\n    transform: scale(1.9);\n    margin-bottom: 30px;\n    margin-top: 20px;\n    font-size: 0.6em;\n  }\n  .Button:hover {\n    cursor: pointer;\n    background: var(--tertiary);\n    transform: scale(2);\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}