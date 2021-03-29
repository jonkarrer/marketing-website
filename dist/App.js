import React from "../_snowpack/pkg/react.js";
import Title from "./comps/Title/Title.js";
import SubTitle from "./comps/SubTitle/SubTitle.js";
import Feature from "./comps/Feature/Feature.js";
import Button from "./comps/Button/Button.js";
import "./App.css.proxy.js";
function App() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement(Title, null), /* @__PURE__ */ React.createElement(SubTitle, null), /* @__PURE__ */ React.createElement("div", {
    className: "feature-wrapper"
  }, /* @__PURE__ */ React.createElement(Feature, {
    image: "./assets/left.jpg"
  }, "100% Wool threads"), /* @__PURE__ */ React.createElement(Feature, {
    image: "./assets/middle.jpg"
  }, "Moisture wicking"), /* @__PURE__ */ React.createElement(Feature, {
    image: "./assets/cute-sock.jpg"
  }, "Artist designed")), /* @__PURE__ */ React.createElement("div", {
    className: "contact-wrapper"
  }, /* @__PURE__ */ React.createElement("h3", null, "We are so glad you dropped by! Here is a special offer just for you."), /* @__PURE__ */ React.createElement(Button, {
    pad: 10,
    width: 200
  }, "View Offer")));
}
export default App;
