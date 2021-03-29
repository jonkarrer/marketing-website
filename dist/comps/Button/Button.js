import React from "../../../_snowpack/pkg/react.js";
const Button = ({children, pad, width}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: ".Button",
    style: {
      color: "#fffffe",
      background: "black",
      padding: `${pad}px`,
      width: `${width}px`,
      fontSize: "1.5em"
    }
  }, children);
};
export default Button;
