"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Buttons = _interopRequireDefault(require("./Form/Buttons"));

var _Radio = _interopRequireDefault(require("./Form/Radio"));

var _Textarea = _interopRequireDefault(require("./Form/Textarea"));

var _Input = _interopRequireDefault(require("./Form/Input"));

var _Separator = _interopRequireDefault(require("./Form/Separator"));

var _CurrentLocation = _interopRequireDefault(require("./Form/CurrentLocation"));

var _Rate = _interopRequireDefault(require("./Form/Rate"));

var _Select = _interopRequireDefault(require("./Form/Select"));

var _SelectSmall = _interopRequireDefault(require("./Form/SelectSmall"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(props) {
  var data = props.data;
  var payload = data.attachment.payload;
  var TEMPLATE_TYPE = payload.template_type;
  var MESSAGE_ID = data.id;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "rasa-form-widget rasa-green rasa-custom-chat-box ".concat(payload.class),
    children: [payload.title && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "title",
      children: payload.title
    }), payload.elements.map(function (element, index) {
      var keys = Object.keys(element);
      var name = element.name;
      var CUSTOM_PAYLOAD = element.custom_payload;
      var content = [];
      var options = element.options;

      for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
        var key = _keys[_i];
        var payloadData = element[key];
        var optionsClass = "";

        for (var optionKey in options) {
          optionsClass += " ".concat(key, "-").concat(optionKey, "-").concat(options[optionKey]);
        }
        /**
         * Button Template Render
         */


        if (key === "buttons") {
          content = (0, _Buttons.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID,
            name: name,
            CUSTOM_PAYLOAD: CUSTOM_PAYLOAD
          });
        }
        /**
         * Radio Template Render
         */


        if (key === "radio") {
          content = (0, _Radio.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID,
            name: name,
            CUSTOM_PAYLOAD: CUSTOM_PAYLOAD
          });
        }
        /**
         * Rate Template Render
         */


        if (key === "rate") {
          content = (0, _Rate.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID,
            name: name,
            CUSTOM_PAYLOAD: CUSTOM_PAYLOAD
          });
        }
        /**
         * Textarea Template Render
         */


        if (key === "textarea") {
          content = (0, _Textarea.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID,
            name: name,
            CUSTOM_PAYLOAD: CUSTOM_PAYLOAD
          });
        }
        /**
         * Input Template Render
         */


        if (key === "input") {
          content = (0, _Input.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID,
            name: name,
            CUSTOM_PAYLOAD: CUSTOM_PAYLOAD
          });
        }
        /**
         * Separator Template Render
         */


        if (key === "separator") {
          content = (0, _Separator.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID,
            name: name,
            CUSTOM_PAYLOAD: CUSTOM_PAYLOAD
          });
        }
        /**
         * Current Location Template Render
         */


        if (key === "current_location") {
          content = (0, _CurrentLocation.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID,
            name: name,
            CUSTOM_PAYLOAD: CUSTOM_PAYLOAD
          });
        }
        /**
         * Select Template Render
         */


        if (key === "select") {
          content = (0, _Select.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID,
            name: name,
            CUSTOM_PAYLOAD: CUSTOM_PAYLOAD
          });
        }
        /**
         * Select Small Template Render
         */


        if (key === "select_small") {
          content = (0, _SelectSmall.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID,
            name: name,
            CUSTOM_PAYLOAD: CUSTOM_PAYLOAD
          });
        }
      }

      return content;
    })]
  });
};

var _default = Form;
exports.default = _default;

//# sourceMappingURL=Form.jsx.map