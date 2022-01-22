"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      _ref$cc = _ref.cc,
      cc = _ref$cc === void 0 ? '' : _ref$cc;
  var content;
  var c;

  if (typeof icon === "string") {
    if (icon.split("http").length > 1 || icon.length > 2) {
      content = /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: icon,
        alt: "icon"
      });
      c = "single-image";
    } else {
      content = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: icon
      });
      c = "letter";
    }
  } else if (_typeof(icon) === "object") {
    content = [];

    var _iterator = _createForOfIteratorHelper(icon),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        content.push( /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: i,
          alt: "icon"
        }));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (content.length > 1) {
      c = "multi-images images-" + content.length;
    } else {
      c = "single-image";
    }
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "avatar-container ".concat(cc, " ").concat(c),
    children: content
  });
};

var _default = Icon;
exports.default = _default;

//# sourceMappingURL=Icon.jsx.map