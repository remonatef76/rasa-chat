"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dash = require("./../../../assets/images/header/dash.svg");

var _arrowDown = require("./../../../assets/images/header/arrow-down.svg");

var _list = require("./../../../assets/images/header/list.svg");

var _Icon = _interopRequireDefault(require("./Icon"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      icon = _ref.icon,
      hide = _ref.hide;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "rw-header d-flex",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "icon",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
        icon: icon
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "title-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "title",
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "subtitle",
        children: subTitle
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "actions-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dash",
        onClick: hide,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_dash.ReactComponent, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "arrow-down",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_arrowDown.ReactComponent, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "list",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_list.ReactComponent, {})
      })]
    })]
  });
};

var _default = Header;
exports.default = _default;

//# sourceMappingURL=Header.jsx.map