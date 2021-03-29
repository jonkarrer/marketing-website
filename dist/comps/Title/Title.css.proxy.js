// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Title {\n  color: var(--main-black);\n  font-size: 3em;\n  font-family: 'Train One', cursive;\n  background: var(--main-pink);\n  margin: 15px 200px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}