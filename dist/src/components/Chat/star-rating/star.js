"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Star = /*#__PURE__*/function (_React$Component) {
  _inherits(Star, _React$Component);

  var _super = _createSuper(Star);

  function Star() {
    _classCallCheck(this, Star);

    return _super.apply(this, arguments);
  }

  _createClass(Star, [{
    key: "starContainerStyle",
    get: function get() {
      var _this$props = this.props,
          changeRating = _this$props.changeRating,
          starSpacing = _this$props.starSpacing,
          isFirstStar = _this$props.isFirstStar,
          isLastStar = _this$props.isLastStar,
          ignoreInlineStyles = _this$props.ignoreInlineStyles;
      var starContainerStyle = {
        position: "relative",
        display: "inline-block",
        verticalAlign: "middle",
        paddingLeft: isFirstStar ? undefined : starSpacing,
        paddingRight: isLastStar ? undefined : starSpacing,
        cursor: changeRating ? "pointer" : undefined
      };
      return ignoreInlineStyles ? {} : starContainerStyle;
    }
  }, {
    key: "starSvgStyle",
    get: function get() {
      var _this$props2 = this.props,
          ignoreInlineStyles = _this$props2.ignoreInlineStyles,
          isCurrentHoveredStar = _this$props2.isCurrentHoveredStar,
          starDimension = _this$props2.starDimension;
      var starSvgStyle = {
        width: starDimension,
        height: starDimension,
        transition: "transform .2s ease-in-out",
        transform: isCurrentHoveredStar ? "scale(1.1)" : undefined
      };
      return ignoreInlineStyles ? {} : starSvgStyle;
    }
  }, {
    key: "pathStyle",
    get: function get() {
      var _this$props3 = this.props,
          isStarred = _this$props3.isStarred,
          isPartiallyFullStar = _this$props3.isPartiallyFullStar,
          isHovered = _this$props3.isHovered,
          hoverMode = _this$props3.hoverMode,
          starEmptyColor = _this$props3.starEmptyColor,
          starRatedColor = _this$props3.starRatedColor,
          starHoverColor = _this$props3.starHoverColor,
          gradientPathName = _this$props3.gradientPathName,
          fillId = _this$props3.fillId,
          ignoreInlineStyles = _this$props3.ignoreInlineStyles;
      var fill;

      if (hoverMode) {
        if (isHovered) fill = starHoverColor;else fill = starEmptyColor;
      } else {
        if (isPartiallyFullStar) fill = "url('".concat(gradientPathName, "#").concat(fillId, "')");else if (isStarred) fill = starRatedColor;else fill = starEmptyColor;
      }

      var pathStyle = {
        fill: fill,
        transition: "fill .2s ease-in-out"
      };
      return ignoreInlineStyles ? {} : pathStyle;
    }
  }, {
    key: "starClasses",
    get: function get() {
      var _this$props4 = this.props,
          isSelected = _this$props4.isSelected,
          isPartiallyFullStar = _this$props4.isPartiallyFullStar,
          isHovered = _this$props4.isHovered,
          isCurrentHoveredStar = _this$props4.isCurrentHoveredStar,
          ignoreInlineStyles = _this$props4.ignoreInlineStyles;
      var starClasses = (0, _classnames.default)({
        "widget-svg": true,
        "widget-selected": isSelected,
        "multi-widget-selected": isPartiallyFullStar,
        hovered: isHovered,
        "current-hovered": isCurrentHoveredStar
      });
      return ignoreInlineStyles ? {} : starClasses;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          changeRating = _this$props5.changeRating,
          hoverOverStar = _this$props5.hoverOverStar,
          unHoverOverStar = _this$props5.unHoverOverStar,
          svgIconViewBox = _this$props5.svgIconViewBox,
          svgIconPath = _this$props5.svgIconPath;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "star-container",
        style: this.starContainerStyle,
        onMouseEnter: hoverOverStar,
        onMouseLeave: unHoverOverStar,
        onClick: changeRating,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          viewBox: svgIconViewBox,
          className: this.starClasses,
          style: this.starSvgStyle,
          fill: "none",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            className: "star",
            style: this.pathStyle,
            d: svgIconPath
          })
        })
      });
    }
  }]);

  return Star;
}(_react.default.Component);

Star.propTypes = {
  fillId: _propTypes.default.string.isRequired,
  changeRating: _propTypes.default.func,
  hoverOverStar: _propTypes.default.func,
  unHoverOverStar: _propTypes.default.func,
  isStarred: _propTypes.default.bool.isRequired,
  isPartiallyFullStar: _propTypes.default.bool.isRequired,
  isHovered: _propTypes.default.bool.isRequired,
  hoverMode: _propTypes.default.bool.isRequired,
  isCurrentHoveredStar: _propTypes.default.bool.isRequired,
  isFirstStar: _propTypes.default.bool.isRequired,
  isLastStar: _propTypes.default.bool.isRequired,
  starDimension: _propTypes.default.string.isRequired,
  starSpacing: _propTypes.default.string.isRequired,
  starHoverColor: _propTypes.default.string.isRequired,
  starRatedColor: _propTypes.default.string.isRequired,
  starEmptyColor: _propTypes.default.string.isRequired,
  gradientPathName: _propTypes.default.string.isRequired,
  ignoreInlineStyles: _propTypes.default.bool.isRequired,
  svgIconPath: _propTypes.default.string.isRequired,
  svgIconViewBox: _propTypes.default.string.isRequired
};
var _default = Star;
exports.default = _default;

//# sourceMappingURL=star.js.map