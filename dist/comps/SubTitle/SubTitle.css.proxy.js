// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".SubTitle {\n  margin: 15px;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.SubTitle h2 {\n  font-size: 1.2em;\n  margin: 2px;\n  border: black solid thin;\n  text-align: center;\n  width: 40%;\n  padding: 5px;\n  background: var(--main-black);\n  color: var(--button-text);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}