"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _rasaWebchat = _interopRequireDefault(require("rasa-webchat"));

var _ComponentsManager = _interopRequireDefault(require("./ComponentsManager"));

var _Icon = _interopRequireDefault(require("./Body/Icon"));

var _Header = _interopRequireDefault(require("./Body/Header"));

require("./../../assets/scss/Chat.scss");

var _helpers = require("./helpers");

var _server = _interopRequireDefault(require("react-dom/server"));

var _Footer = _interopRequireDefault(require("./Body/Footer"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Chat = function Chat(_ref) {
  var initPayload = _ref.initPayload,
      title = _ref.title,
      subtitle = _ref.subtitle,
      profileAvatar = _ref.profileAvatar,
      socketPath = _ref.socketPath,
      socketUrl = _ref.socketUrl,
      customData = _ref.customData,
      botAvatar = _ref.botAvatar,
      TEST_MODE = _ref.TEST_MODE,
      sampleSchema = _ref.sampleSchema;
  var widget = (0, _react.useRef)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      chatContainer = _useState2[0],
      setChatContainer = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      chatHead = _useState4[0],
      setChatHead = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      chatShowButton = _useState6[0],
      setChatShowButton = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      scrollContainer = _useState8[0],
      setScrollContainer = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      chatSession = _useState10[0],
      setChatSession = _useState10[1];

  var hide = function hide() {
    if (chatShowButton) {
      chatShowButton.click();
      return true;
    }

    document.querySelector(".rw-launcher").click();
  }; // eslint-disable-next-line


  var HeaderContent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
    icon: profileAvatar,
    hide: hide,
    title: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "Norton"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "customer care"
      })]
    }),
    subTitle: "We reply immediately"
  });

  var IconContent = _server.default.renderToString( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
    icon: botAvatar,
    cc: "rw-avatar"
  }));

  var reSkinChat = function reSkinChat() {
    if (document.getElementById("customRasaWebChat")) {
      var _document$getElementB, _chat$childNodes$, _chat$childNodes$2;

      var chat = (_document$getElementB = document.getElementById("customRasaWebChat").childNodes[0]) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.childNodes[0];
      var head = chat === null || chat === void 0 ? void 0 : (_chat$childNodes$ = chat.childNodes[0]) === null || _chat$childNodes$ === void 0 ? void 0 : _chat$childNodes$.childNodes[0];
      var chatSohwbuttonElement = chat === null || chat === void 0 ? void 0 : chat.childNodes[1];
      var messagesContainer = chat === null || chat === void 0 ? void 0 : (_chat$childNodes$2 = chat.childNodes[0]) === null || _chat$childNodes$2 === void 0 ? void 0 : _chat$childNodes$2.childNodes[1];
      setChatContainer(chat);
      setChatHead(head);
      setChatShowButton(chatSohwbuttonElement);
      setScrollContainer(messagesContainer);
      setChatSession(window.localStorage.getItem("chat_session"));
    }

    setTimeout(function () {
      reSkinChat();
    }, 100);
  };

  (0, _react.useEffect)(function () {
    if (widget.current) {
      reSkinChat();
    } // eslint-disable-next-line

  }, [widget]);
  (0, _react.useEffect)(function () {
    if (chatHead && chatContainer && chatContainer.classList.contains("rw-chat-open") && scrollContainer) {
      _reactDom.default.render(HeaderContent, chatHead);

      var footerTextarea = chatHead.nextSibling.nextSibling.querySelector(".rw-new-message");
      var btn = chatHead.nextSibling.nextSibling.querySelector(".rw-send");
      btn.disabled = false;

      if (footerTextarea && !footerTextarea.classList.contains("rendered")) {
        var footerChild = document.createElement("div");

        _reactDom.default.render( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {}), footerChild);

        footerTextarea.parentNode.prepend(footerChild);
        footerTextarea.remove();
      }

      var images = scrollContainer.querySelectorAll(".rw-with-avatar > img");

      if (_typeof(images) === "object") {
        var _iterator = _createForOfIteratorHelper(images),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            var child = document.createElement("div");
            child.innerHTML = IconContent;
            child = child.firstChild;
            item.parentNode.prepend(child);
            item.remove();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, [chatHead, HeaderContent, chatContainer, scrollContainer, chatSession]);

  var widgetSubmit = function widgetSubmit(payload, title) {
    if (widget.current && widget.current.sendMessage) {
      var _widget$current;

      var params = [payload];

      if (title) {
        params.push(title);
      }

      (_widget$current = widget.current).sendMessage.apply(_widget$current, params);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    id: "customRasaWebChat",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_rasaWebchat.default, {
      ref: widget,
      initPayload: initPayload,
      customComponent: function customComponent(messageData) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentsManager.default, {
          data: messageData,
          TEST_MODE: TEST_MODE,
          widget: widget,
          submit: widgetSubmit,
          addGetLocalstorage: _helpers.addGetLocalstorage,
          sampleSchema: sampleSchema
        });
      },
      title: title,
      subtitle: subtitle,
      socketUrl: socketUrl,
      profileAvatar: profileAvatar,
      showMessageDate: _helpers.handleMessageTime,
      socketPath: socketPath,
      customData: customData
    })
  });
};

var _default = Chat;
exports.default = _default;

//# sourceMappingURL=Index.jsx.map