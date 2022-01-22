"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("./Widgets/Global/List"));

var _Form = _interopRequireDefault(require("./Widgets/Global/Form"));

var _Map = _interopRequireDefault(require("./Widgets/Global/Map"));

var _SizeWidget = _interopRequireDefault(require("./Widgets/Samples/SizeWidget.json"));

var _TypeWidget = _interopRequireDefault(require("./Widgets/Samples/TypeWidget.json"));

var _BrandWidget = _interopRequireDefault(require("./Widgets/Samples/BrandWidget.json"));

var _CartWidget = _interopRequireDefault(require("./Widgets/Samples/CartWidget.json"));

var _PaymentWidget = _interopRequireDefault(require("./Widgets/Samples/PaymentWidget.json"));

var _RateWidget = _interopRequireDefault(require("./Widgets/Samples/RateWidget.json"));

var _ReturnWidget = _interopRequireDefault(require("./Widgets/Samples/ReturnWidget.json"));

var _ReturnConfirmWidget = _interopRequireDefault(require("./Widgets/Samples/ReturnConfirmWidget.json"));

var _ReasonWidget = _interopRequireDefault(require("./Widgets/Samples/ReasonWidget.json"));

var _ProductListWidget = _interopRequireDefault(require("./Widgets/Samples/ProductListWidget.json"));

var _FeedbackWidget = _interopRequireDefault(require("./Widgets/Samples/FeedbackWidget.json"));

var _OTPWidget = _interopRequireDefault(require("./Widgets/Samples/OTPWidget.json"));

var _LocationWidget = _interopRequireDefault(require("./Widgets/Samples/LocationWidget.json"));

var _UserLocationWidget = _interopRequireDefault(require("./Widgets/Samples/UserLocationWidget.json"));

var _AddreessInfoWidget = _interopRequireDefault(require("./Widgets/Samples/AddreessInfoWidget.json"));

var _CitySelectWidget = _interopRequireDefault(require("./Widgets/Samples/CitySelectWidget.json"));

var _PersonalInfoWidget = _interopRequireDefault(require("./Widgets/Samples/PersonalInfoWidget.json"));

var _MapPopupWidget = _interopRequireDefault(require("./Widgets/Samples/MapPopupWidget.json"));

var _PersonalInfoOutlineWidget = _interopRequireDefault(require("./Widgets/Samples/PersonalInfoOutlineWidget.json"));

var _AddreessInfoOutlineWidget = _interopRequireDefault(require("./Widgets/Samples/AddreessInfoOutlineWidget.json"));

var _CitySelectOutlineWidget = _interopRequireDefault(require("./Widgets/Samples/CitySelectOutlineWidget.json"));

var _LocationOutlineWidget = _interopRequireDefault(require("./Widgets/Samples/LocationOutlineWidget.json"));

var _OrderStatus = _interopRequireDefault(require("./Widgets/Samples/OrderStatus.json"));

var _OrderStatusMapWidget = _interopRequireDefault(require("./Widgets/Samples/OrderStatusMapWidget.json"));

var _Article = _interopRequireDefault(require("./Widgets/Samples/Article.json"));

var _Video = _interopRequireDefault(require("./Widgets/Samples/Video.json"));

var _GeneralWidget = _interopRequireDefault(require("./Widgets/Samples/GeneralWidget.json"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Sample Widgets Payloads
 */
var widgetsPayloads = {
  size: _SizeWidget.default,
  typeWidget: _TypeWidget.default,
  brand: _BrandWidget.default,
  cart: _CartWidget.default,
  payment: _PaymentWidget.default,
  rate: _RateWidget.default,
  reason: _ReasonWidget.default,
  productList: _ProductListWidget.default,
  returnTemplate: _ReturnWidget.default,
  returnConfirm: _ReturnConfirmWidget.default,
  feedback: _FeedbackWidget.default,
  otp: _OTPWidget.default,
  location: _LocationWidget.default,
  userLocation: _UserLocationWidget.default,
  addressInfo: _AddreessInfoWidget.default,
  citySelect: _CitySelectWidget.default,
  personalInfo: _PersonalInfoWidget.default,
  maps: _MapPopupWidget.default,
  personalInfoOutline: _PersonalInfoOutlineWidget.default,
  addressInfoOutline: _AddreessInfoOutlineWidget.default,
  citySelectOutline: _CitySelectOutlineWidget.default,
  locationOutline: _LocationOutlineWidget.default,
  general: _GeneralWidget.default,
  OrderStatus: _OrderStatus.default,
  OrderStatusMapWidget: _OrderStatusMapWidget.default,
  article: _Article.default,
  video: _Video.default
};

var ComponentsManager = function ComponentsManager(props) {
  var _data$attachment$payl, _data$attachment$payl2;

  var data = props.data,
      TEST_MODE = props.TEST_MODE,
      sampleSchema = props.sampleSchema;

  if (parseInt(TEST_MODE) && widgetsPayloads[sampleSchema]) {
    data.attachment.payload = widgetsPayloads[sampleSchema].payload;
  }

  if (data.attachment.payload.template_type === "general" && (_data$attachment$payl = data.attachment.payload) !== null && _data$attachment$payl !== void 0 && (_data$attachment$payl2 = _data$attachment$payl.elements) !== null && _data$attachment$payl2 !== void 0 && _data$attachment$payl2.length) {
    var WigetsContent = [];
    var newProps = [];
    var len = data.attachment.payload.elements.length;

    for (var x = 0; x < len; x++) {
      var widgetData = data.attachment.payload.elements[x];
      newProps[x] = JSON.parse(JSON.stringify(props));
      newProps[x].data.attachment.payload = widgetData;
      var WidgetContent = void 0;

      if (widgetData.template_type === "list") {
        WidgetContent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.default, _objectSpread({}, newProps[x]));
      } else if (widgetData.template_type === "form") {
        WidgetContent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Form.default, _objectSpread({}, newProps[x]));
      } else if (widgetData.template_type === "map") {
        WidgetContent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Map.default, _objectSpread({}, newProps[x]));
      }

      var content = WidgetContent ? WidgetContent : "";
      WigetsContent.push( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "custom-rasa-widget-container",
        style: {
          marginBottom: 20,
          paddingLeft: x > 0 ? 40 : 0
        },
        children: content
      }));
    }

    return WigetsContent;
  } else {
    var _widgetData = data.attachment.payload;

    var _WidgetContent;

    if (_widgetData.template_type === "list") {
      _WidgetContent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.default, _objectSpread({}, props));
    } else if (_widgetData.template_type === "form") {
      _WidgetContent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Form.default, _objectSpread({}, props));
    } else if (_widgetData.template_type === "map") {
      _WidgetContent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Map.default, _objectSpread({}, props));
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "custom-rasa-widget-container",
      children: _WidgetContent ? _WidgetContent : ""
    });
  }
};

var _default = ComponentsManager;
exports.default = _default;

//# sourceMappingURL=ComponentsManager.jsx.map