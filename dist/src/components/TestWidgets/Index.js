"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./../../assets/scss/TestWidgets.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var widgets = [{
  label: "Size",
  value: "size"
}, {
  label: "Type Widget",
  value: "typeWidget"
}, {
  label: "Brand",
  value: "brand"
}, {
  label: "Cart",
  value: "cart"
}, {
  label: "Payment",
  value: "payment"
}, {
  label: "Rate",
  value: "rate"
}, {
  label: "Reason",
  value: "reason"
}, {
  label: "Product List",
  value: "productList"
}, {
  label: "Return Template",
  value: "returnTemplate"
}, {
  label: "Return Confirm",
  value: "returnConfirm"
}, {
  label: "Feedback",
  value: "feedback"
}, {
  label: "OTP",
  value: "otp"
}, {
  label: "Location",
  value: "location"
}, {
  label: "User Location",
  value: "userLocation"
}, {
  label: "Address Info",
  value: "addressInfo"
}, {
  label: "City Select",
  value: "citySelect"
}, {
  label: "Personal Info",
  value: "personalInfo"
}, {
  label: "Maps",
  value: "maps"
}, {
  label: "Personal Info Outline",
  value: "personalInfoOutline"
}, {
  label: "Address Info Outline",
  value: "addressInfoOutline"
}, {
  label: "City Select Outline",
  value: "citySelectOutline"
}, {
  label: "Location Outline",
  value: "locationOutline"
}, {
  label: "General",
  value: "general"
}, {
  label: "Order Status",
  value: "OrderStatus"
}, {
  label: "Order Status Map Widget",
  value: "OrderStatusMapWidget"
}, {
  label: "Article",
  value: "article"
}, {
  label: "Video",
  value: "video"
}];

var TestWidgets = function TestWidgets(_ref) {
  var TEST_MODE = _ref.TEST_MODE,
      setTestMode = _ref.setTestMode,
      sampleSchema = _ref.sampleSchema,
      setSampleSchema = _ref.setSampleSchema;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: "TestWidgets",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Test Widgets"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "mode",
          children: "Select Mode"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
          name: "mode",
          id: "mode",
          value: TEST_MODE,
          onChange: function onChange(e) {
            return setTestMode(e.target.value);
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: 1,
            children: "Test Mode"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: 0,
            children: "Production Mode"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "widget",
          children: "Select Widget"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
          name: "widget",
          id: "widget",
          value: sampleSchema,
          onChange: function onChange(e) {
            return setSampleSchema(e.target.value);
          },
          children: widgets.map(function (widget, i) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: widget.value,
              children: widget.label
            }, i);
          })
        })]
      })]
    })]
  });
};

var _default = TestWidgets;
exports.default = _default;

//# sourceMappingURL=Index.jsx.map