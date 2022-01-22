"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../Global/Button"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SizeWidget = function SizeWidget(props) {
  var data = props.data;
  var elements = data.attachment.payload.elements;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "rasa-size-widget rasa-green rasa-custom-chat-box",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "title",
      children: elements.title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "buttons",
      children: elements.buttons.map(function (buttonContainer, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "button-container",
          children: buttonContainer.map(function (button, i) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, _objectSpread({
              button: button
            }, props), i);
          })
        }, index);
      })
    })]
  });
};

var _default = SizeWidget;
exports.default = _default;

//# sourceMappingURL=SizeWidget.jsx.map