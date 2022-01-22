"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Buttons = _interopRequireDefault(require("./List/Buttons"));

var _Product = _interopRequireDefault(require("./List/Product"));

var _OrderStatus = _interopRequireDefault(require("./List/OrderStatus"));

var _Article = _interopRequireDefault(require("./List/Article"));

var _Video = _interopRequireDefault(require("./List/Video"));

var _Share = _interopRequireDefault(require("./Share"));

var _Download = _interopRequireDefault(require("./Download"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(props) {
  var data = props.data;
  var payload = data.attachment.payload;
  var TEMPLATE_TYPE = payload.template_type;
  var MESSAGE_ID = data.id;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "rasa-list-widget rasa-green rasa-custom-chat-box ".concat(payload.class),
    children: [payload.title && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "title",
      style: {
        textAlign: payload.textAlign || "center"
      },
      children: payload.title
    }), payload.elements.map(function (element, index) {
      var keys = Object.keys(element);
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
            MESSAGE_ID: MESSAGE_ID
          });
        }
        /**
         * Product Template Render
         */


        if (key === "products") {
          content = (0, _Product.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID
          });
        }
        /**
         * Order Status Template Render
         */


        if (key === "orderStatus") {
          content = (0, _OrderStatus.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID
          });
        }
        /**
         * Article Template Render
         */


        if (key === "article") {
          content = (0, _Article.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID
          });
        }
        /**
         * Video Template Render
         */


        if (key === "video") {
          content = (0, _Video.default)({
            content: content,
            payloadData: payloadData,
            index: index,
            props: props,
            options: options,
            optionsClass: optionsClass,
            TEMPLATE_TYPE: TEMPLATE_TYPE,
            MESSAGE_ID: MESSAGE_ID
          });
        }
        /**
         * Share Template Render
         */


        if (key === "share") {
          content.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Share.default, {
            payload: payloadData,
            index: index
          }, index));
        }
        /**
         * Download Template Render
         */


        if (key === "download") {
          content.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Download.default, {
            payload: payloadData,
            index: index
          }, index));
        }
      }

      return content;
    })]
  });
};

var _default = List;
exports.default = _default;

//# sourceMappingURL=List.jsx.map