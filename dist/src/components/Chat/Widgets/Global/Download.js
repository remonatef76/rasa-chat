"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _download = _interopRequireDefault(require("./../../../../assets/images/widgets/download.png"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Download = function Download(_ref) {
  var payload = _ref.payload,
      index = _ref.index;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "rasa-download rasa-download-location-".concat(payload === null || payload === void 0 ? void 0 : payload.location),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: _download.default,
      alt: "Download"
    })
  }, index);
};

var _default = Download;
exports.default = _default;

//# sourceMappingURL=Download.jsx.map