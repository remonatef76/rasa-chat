"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _arrowDownWhite = _interopRequireDefault(require("./../../../../../assets/images/widgets/arrow-down-white.png"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Fun = function Fun(_ref) {
  var content = _ref.content,
      payloadData = _ref.payloadData,
      index = _ref.index,
      TEMPLATE_TYPE = _ref.TEMPLATE_TYPE;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var toggleShow = function toggleShow() {
    setShow(!show);
  };

  var barsContent = [];
  var bodyContent = [];

  var _iterator = _createForOfIteratorHelper(payloadData.body),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var bar = _step.value;

      if (bar.showBar) {
        barsContent.push( /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "bar ".concat(bar.done ? "bar-done" : "bar-none"),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "bar-bullet"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "bar-line"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "bar-title",
            children: bar.title.text.replace("|", "")
          })]
        }, bar.title.text));
      }

      var bodyListContent = [];

      var _iterator2 = _createForOfIteratorHelper(bar.body),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var body = _step2.value;
          bodyListContent.push( /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "list-container",
            children: [body.title && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "body-title",
              children: body.title
            }), body.desc && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "body-desc",
              children: body.desc
            })]
          }, body.title + body.desc));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      bodyContent.push( /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "body-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "status-title-container",
          children: [bar.title.text && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "status-title",
            children: bar.title.text
          }), bar.title.desc && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "status-desc",
            children: bar.title.desc
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "body-list-container",
          children: bodyListContent
        })]
      }, bar.title.text));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var data = /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "order-status",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "bar-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "title-container",
        onClick: toggleShow,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "title",
          children: payloadData.title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: "icon ".concat(show ? "icon-down" : "icon-up"),
          src: _arrowDownWhite.default,
          alt: "arrow"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "bars",
        children: barsContent
      })]
    }), show && bodyContent]
  }, index + TEMPLATE_TYPE + show + "status");
  content.push(data);
  return content;
};

var _default = Fun;
exports.default = _default;

//# sourceMappingURL=OrderStatus.js.map