// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".SubTitle {\n  padding-bottom: 25px;\n  margin-bottom: 20px;\n  padding-top: 10px;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background: var(--main-pink);\n}\n.SubTitle h2 {\n  font-size: 1.5em;\n  margin: 2px;\n  border: black solid thin;\n  text-align: center;\n  width: 40%;\n  padding: 5px;\n  background: var(--main-black);\n  color: var(--button-text);\n  border-radius: 0.2em;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}