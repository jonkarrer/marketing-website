import React from "../../../_snowpack/pkg/react.js";
import "./Button.css.proxy.js";
const Button = ({children, pad, width}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "Button",
    style: {
      color: "#fffffe",
      padding: `${pad}px`,
      width: `${width}px`,
      fontSize: "1.5em",
      borderRadius: ".2em"
    }
  }, children);
};
export default Button;
