// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Modal {\n  position: relative;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 90vh;\n  min-height: 700px;\n  max-height: 1200px;\n  width: 50vw;\n  min-width: 800px;\n  max-width: 1200px;\n  background: var(--main-pink);\n}\n.left-side {\n  width: 400px;\n}\narticle h4 {\n  padding-bottom: 5%;\n}\narticle h1 {\n  padding-bottom: 5%;\n  font-size: 2em;\n}\narticle p {\n  border-bottom: black solid 2px;\n  padding-bottom: 5%;\n}\n.discount {\n  border: var(--tertiary) solid thick;\n  padding: 40px 0px;\n  width: 60%;\n  margin-left: 20%;\n  margin-bottom: 5%;\n}\n.discount h1 {\n  font-size: 3em;\n  margin-bottom: 5%;\n}\n.email {\n  padding: 10px;\n  margin-bottom: 10%;\n  width: 100%;\n  outline: none;\n  border: none;\n  border-bottom: black solid thick;\n  background: none;\n  font-size: 1.5em;\n}\n.button-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.right-side {\n  width: 60%;\n  max-width: 800px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n.right-side img {\n  object-fit: fill;\n  height: 70vh;\n  max-height: 800px;\n}\n.close-modal {\n  position: absolute;\n  font-size: 3em;\n  top: 0;\n  right: 10px;\n  text-align: right;\n}\n.close-modal:hover {\n  cursor: pointer;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}