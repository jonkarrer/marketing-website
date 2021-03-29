import React from "../../../_snowpack/pkg/react.js";
import "./Feature.css.proxy.js";
const Feature = ({children, image}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "Feature"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: image,
    alt: "socks"
  })), /* @__PURE__ */ React.createElement("h3", null, children));
};
export default Feature;
