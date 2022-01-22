"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Select = function Select(_ref) {
  var props = _ref.props,
      index = _ref.index,
      payloadData = _ref.payloadData,
      TEMPLATE_TYPE = _ref.TEMPLATE_TYPE,
      MESSAGE_ID = _ref.MESSAGE_ID,
      name = _ref.name,
      CUSTOM_PAYLOAD = _ref.CUSTOM_PAYLOAD;
  var addGetLocalstorage = props.addGetLocalstorage;
  var storageKey = "RASA_WIDGET_".concat(TEMPLATE_TYPE, "_").concat(MESSAGE_ID, "_").concat(name);
  var storageKeyPayload = "RASA_WIDGET_".concat(TEMPLATE_TYPE, "_").concat(MESSAGE_ID, "_PAYLOAD");
  var defaultValue = addGetLocalstorage(storageKey, null, "GET");

  var _useState = (0, _react.useState)(defaultValue ? defaultValue : {}),
      _useState2 = _slicedToArray(_useState, 2),
      rate = _useState2[0],
      setRate = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      update = _useState4[0],
      setUpdate = _useState4[1];

  var elements = payloadData;

  var confirm = function confirm() {
    var defaultPayload = addGetLocalstorage(storageKeyPayload, null, "GET");

    if (!defaultPayload || _typeof(defaultPayload) !== "object") {
      defaultPayload = {};
    }

    for (var k in rate) {
      defaultPayload[k] = rate[k];
      defaultPayload[k + "_custom"] = CUSTOM_PAYLOAD;
    }

    addGetLocalstorage(storageKey, JSON.stringify(rate), "ADD");
    addGetLocalstorage(storageKeyPayload, JSON.stringify(defaultPayload), "ADD");
    setUpdate(update + 1);
  };

  var updateRating = function updateRating(i, v) {
    var rates = rate;
    rates[i] = v;
    setRate(rates);
    confirm();
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "select-container",
    children: elements.map(function (item, i) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "select",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
          value: rate[item.name],
          onChange: function onChange(e) {
            return updateRating(item.name, e.target.value);
          },
          name: item.name,
          children: item.items.map(function (select) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: select.value,
              children: select.label
            }, select.value);
          })
        })
      }, i);
    })
  }, index);
};

var _default = Select;
exports.default = _default;

//# sourceMappingURL=Select.js.map