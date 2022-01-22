"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var button = _ref.button,
      submit = _ref.submit,
      data = _ref.data,
      widget = _ref.widget,
      _ref$confirmFunc = _ref.confirmFunc,
      confirmFunc = _ref$confirmFunc === void 0 ? null : _ref$confirmFunc,
      TEMPLATE_TYPE = _ref.TEMPLATE_TYPE,
      MESSAGE_ID = _ref.MESSAGE_ID;
  var storageKeyPayload = "RASA_WIDGET_".concat(TEMPLATE_TYPE, "_").concat(MESSAGE_ID, "_PAYLOAD");

  var confirm = function confirm() {
    var DYNAMIC_STATE_PAYLOAD = window.localStorage.getItem(storageKeyPayload);

    if (button.type === "postback" && button.payload === "DYNAMIC_STATE_PAYLOAD") {
      console.log(DYNAMIC_STATE_PAYLOAD);
      submit("/".concat(data.attachment.payload.template_type).concat(DYNAMIC_STATE_PAYLOAD), button.showText === true ? button.title : false);
      return true;
    }

    if (button.type === "postback") {
      submit("/".concat(data.attachment.payload.template_type).concat(JSON.stringify({
        value: button.payload
      })), button.showText === true ? button.title : false);
    }

    if (button.type === "confirm" && confirmFunc) {
      confirmFunc();
    }
  };

  var title;

  if (button.image) {
    title = /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: button.image,
      alt: button.title
    });
  } else {
    title = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: button.title
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: "rasa-button rasa-default-button " + (button.image ? "rasa-button-image " : "") + (button.background ? "rasa-button-".concat(button.background, " ") : ""),
    onClick: confirm,
    children: title
  });
};

var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.jsx.map