"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Separator = function Separator(_ref) {
  var props = _ref.props,
      index = _ref.index,
      payloadData = _ref.payloadData,
      TEMPLATE_TYPE = _ref.TEMPLATE_TYPE,
      MESSAGE_ID = _ref.MESSAGE_ID,
      name = _ref.name,
      CUSTOM_PAYLOAD = _ref.CUSTOM_PAYLOAD;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "separator",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: payloadData.text
    })
  }, index);
};

var _default = Separator;
exports.default = _default;

//# sourceMappingURL=Separator.js.map