"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Index = _interopRequireDefault(require("./components/Chat/Index"));

var _Index2 = _interopRequireDefault(require("./components/TestWidgets/Index"));

var _headerIcon = _interopRequireDefault(require("./assets/images/header/header-icon.png"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DEFAULT_TEST_MODE = window.localStorage.getItem("TEST_MODE") || 1;
var DEFAULT_SAMPLE_SCHEMA = window.localStorage.getItem("sampleSchema") || "rate";

function App() {
  var _useState = (0, _react.useState)(DEFAULT_TEST_MODE),
      _useState2 = _slicedToArray(_useState, 2),
      TEST_MODE = _useState2[0],
      setTestMode = _useState2[1];

  var _useState3 = (0, _react.useState)(DEFAULT_SAMPLE_SCHEMA),
      _useState4 = _slicedToArray(_useState3, 2),
      sampleSchema = _useState4[0],
      setSampleSchema = _useState4[1];

  (0, _react.useEffect)(function () {
    window.localStorage.setItem("TEST_MODE", TEST_MODE);
    window.localStorage.setItem("sampleSchema", sampleSchema);
  }, [TEST_MODE, sampleSchema]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "App",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Index.default, {
      initPayload: window.location.href,
      title: "Norton customer care",
      subtitle: "We reply immediately",
      socketUrl: "http://localhost:5005",
      profileAvatar: _headerIcon.default,
      botAvatar: "N",
      socketPath: "/socket.io/",
      customData: {
        language: "en"
      },
      TEST_MODE: TEST_MODE,
      sampleSchema: sampleSchema,
      setSampleSchema: setSampleSchema,
      setTestMode: setTestMode
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Index2.default, {
      setSampleSchema: setSampleSchema,
      setTestMode: setTestMode,
      sampleSchema: sampleSchema,
      TEST_MODE: TEST_MODE
    })]
  });
}

var _default = App;
exports.default = _default;

//# sourceMappingURL=App.js.map