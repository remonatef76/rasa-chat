"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Paymentwidget = function Paymentwidget(props) {
  var data = props.data,
      submit = props.submit,
      addGetLocalstorage = props.addGetLocalstorage;
  var storageKey = "RASA_WIDGET_".concat(data.attachment.payload.template_type, "_").concat(data.id);
  var defaultValue = addGetLocalstorage(storageKey, null, "GET");

  var _useState = (0, _react.useState)(defaultValue ? defaultValue : 0),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var elements = data.attachment.payload.elements;

  var confirm = function confirm() {
    var payload = {
      value: data.attachment.payload.elements.items[selected].payload
    };
    addGetLocalstorage(storageKey, selected, "ADD");
    submit("/".concat(data.attachment.payload.template_type).concat(JSON.stringify(payload)), data.attachment.payload.elements.items[selected].title);
  };

  var select = function select(index) {
    setSelected(index);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "rasa-payment-widget rasa-green rasa-custom-chat-box",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "title",
      children: elements.title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "items",
      children: data.attachment.payload.elements.items.map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "radio ".concat(index === selected ? "selected" : ""),
          onClick: function onClick() {
            return select(index);
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "circle",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "title",
            children: item.title
          })]
        }, index);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "submit",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "submit-button",
        onClick: confirm,
        children: elements.submit.title
      })
    })]
  });
};

var _default = Paymentwidget;
exports.default = _default;

//# sourceMappingURL=PaymentWidget.jsx.map