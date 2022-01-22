"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _googleMapReact = _interopRequireDefault(require("google-map-react"));

var _Share = _interopRequireDefault(require("./Share"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Map = function Map(props) {
  var data = props.data;
  var payload = data.attachment.payload;
  var elements = payload.elements;
  return elements.map(function (element, i) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "rasa-map-widget rasa-custom-chat-box rasa-".concat(element.element_style),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "map-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "map",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "share-container",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Share.default, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "google-map-container",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_googleMapReact.default, {
              defaultCenter: element.map,
              defaultZoom: element.map.zoom,
              bootstrapURLKeys: {
                key: "AIzaSyDnOBMxd05U41lL-bjqOFjtK67u3iaqyOg"
              }
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "place-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "place",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: element.place.image,
              alt: element.place.title
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "content",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "place-title",
                children: element.place.title
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "place-subtitle",
                children: element.place.title
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "sep"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "address-title",
                children: "Address"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "address",
                children: element.place.address
              })]
            })]
          })
        })]
      })
    }, i);
  });
};

var _default = Map;
exports.default = _default;

//# sourceMappingURL=Map.jsx.map