"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _share = _interopRequireDefault(require("./../../../../assets/images/widgets/share.png"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Share = function Share(_ref) {
  var payload = _ref.payload,
      index = _ref.index;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "rasa-share rasa-share-location-".concat(payload === null || payload === void 0 ? void 0 : payload.location),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: _share.default,
      alt: "Share"
    })
  }, index);
};

var _default = Share;
exports.default = _default;

//# sourceMappingURL=Share.jsx.map