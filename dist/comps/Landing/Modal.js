import React from "../../../_snowpack/pkg/react.js";
import "./Modal.css.proxy.js";
import Button from "../Button/Button.js";
const Modal = ({popUpState}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "Modal"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "left-side"
  }, /* @__PURE__ */ React.createElement("article", {
    style: {textAlign: "left", margin: "20px"}
  }, /* @__PURE__ */ React.createElement("h4", null, "FREE DISCOUNT"), /* @__PURE__ */ React.createElement("h1", null, "Thank you for visiting our website"), /* @__PURE__ */ React.createElement("p", null, "We love our socks and we hope that you will enjoy them as well. They are perfect for hiking, jogging, or around the house. Use this discount for your first purchase.")), /* @__PURE__ */ React.createElement("div", {
    className: "discount"
  }, /* @__PURE__ */ React.createElement("h1", null, "30% off"), /* @__PURE__ */ React.createElement("p", null, "Your first purchase")), /* @__PURE__ */ React.createElement("h3", {
    style: {marginBottom: "20px", marginLeft: "20px"}
  }, "Put your email below to recieve the coupon"), /* @__PURE__ */ React.createElement("form", {
    action: "get",
    style: {marginLeft: "20px"}
  }, /* @__PURE__ */ React.createElement("input", {
    className: "email",
    type: "email",
    placeholder: "example@host.com",
    required: true
  }), /* @__PURE__ */ React.createElement("div", {
    className: "button-wrapper"
  }, /* @__PURE__ */ React.createElement(Button, {
    pad: 10,
    width: 150,
    popUpState: null
  }, "Submit")))), /* @__PURE__ */ React.createElement("section", {
    className: "right-side"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "close-modal",
    onClick: () => popUpState(false)
  }, "X"), /* @__PURE__ */ React.createElement("img", {
    src: "./assets/moisture.jpg",
    alt: "socks and heels"
  })));
};
export default Modal;
