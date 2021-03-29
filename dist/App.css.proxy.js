// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');\n:root {\n  --main-pink: #fec7d7;\n  --main-black: #0e172c;\n  --main-grey: #d9d4e7;\n  --tertiary: #a786df;\n  --off-white: #f9f8fc;\n  --button-text: #fffffe;\n}\n* {\n  margin: 0;\n  border-radius: 0.2em;\n}\nhtml,\nbody {\n  background: var(--main-grey);\n  font-family: sans-serif;\n}\n.App {\n  text-align: center;\n}\n.feature-wrapper {\n  width: 100vw;\n  max-width: 1500px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.contact-wrapper {\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.contact-wrapper h3 {\n  padding: 10px;\n  margin: 20px;\n  font-size: 2em;\n  width: 60%;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}