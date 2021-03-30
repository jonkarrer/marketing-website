// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Title {\n  color: var(--main-black);\n  font-size: 3vw;\n  font-family: 'Train One', cursive;\n  background: var(--main-pink);\n  width: 100vw;\n}\n\n@media (max-width: 1000px) {\n  .Title {\n    color: var(--main-black);\n    font-size: 2em;\n    font-family: 'Train One', cursive;\n    background: var(--main-pink);\n    width: 100vw;\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}