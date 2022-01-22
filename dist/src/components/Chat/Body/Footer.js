"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _mic = _interopRequireDefault(require("./../../../assets/images/footer/mic.png"));

var _logo = _interopRequireDefault(require("./../../../assets/images/footer/logo.png"));

var _smile = _interopRequireDefault(require("./../../../assets/images/footer/smile.png"));

var _attachment = _interopRequireDefault(require("./../../../assets/images/footer/attachment.png"));

var _emojiPickerReact = _interopRequireDefault(require("emoji-picker-react"));

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

var Footer = function Footer() {
  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      emojiPicker = _useState4[0],
      setEmojiPicker = _useState4[1];

  var onEmojiClick = function onEmojiClick(event, emojiObject) {
    setMessage(message + emojiObject.emoji);
  };

  var toggleEmojiPicker = function toggleEmojiPicker() {
    setEmojiPicker(!emojiPicker);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "footer-container",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "up",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
        className: "rw-new-message rendered",
        placeholder: "Type a message",
        name: "message",
        type: "text",
        value: message,
        onChange: function onChange(e) {
          return setMessage(e.target.value);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: _mic.default,
        alt: "Mic",
        className: "record"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "down",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "emojis-file",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "emojis-picker-container",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "picker ".concat(!emojiPicker ? 'hide-picker' : ''),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_emojiPickerReact.default, {
              onEmojiClick: onEmojiClick
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: _smile.default,
            alt: "Emojis",
            onClick: toggleEmojiPicker
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: _attachment.default,
          alt: "Attachment"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "powered",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: "Powered by Pinnaka"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: _logo.default,
          alt: "logo"
        })]
      })]
    })]
  });
};

var _default = Footer;
exports.default = _default;

//# sourceMappingURL=Footer.jsx.map