"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _star = _interopRequireDefault(require("./star"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StarRatings = /*#__PURE__*/function (_React$Component) {
  _inherits(StarRatings, _React$Component);

  var _super = _createSuper(StarRatings);

  function StarRatings() {
    var _this;

    _classCallCheck(this, StarRatings);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      highestStarHovered: -Infinity
    });

    _defineProperty(_assertThisInitialized(_this), "fillId", "starGrad".concat(Math.random().toFixed(15).slice(2)));

    _defineProperty(_assertThisInitialized(_this), "hoverOverStar", function (starRating) {
      return function () {
        _this.setState({
          highestStarHovered: starRating
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "unHoverOverStar", function () {
      _this.setState({
        highestStarHovered: -Infinity
      });
    });

    return _this;
  }

  _createClass(StarRatings, [{
    key: "starRatingsStyle",
    get: function get() {
      var starRatingsStyle = {
        position: "relative",
        boxSizing: "border-box",
        display: "inline-block"
      };
      return this.props.ignoreInlineStyles ? {} : starRatingsStyle;
    }
  }, {
    key: "starGradientStyle",
    get: function get() {
      var starGradientStyle = {
        position: "absolute",
        zIndex: "0",
        width: "0",
        height: "0",
        visibility: "hidden"
      };
      return this.props.ignoreInlineStyles ? {} : starGradientStyle;
    }
  }, {
    key: "stopColorStyle",
    value: function stopColorStyle(color) {
      var stopColorStyle = {
        stopColor: color,
        stopOpacity: "1"
      };
      return this.props.ignoreInlineStyles ? {} : stopColorStyle;
    }
  }, {
    key: "titleText",
    get: function get() {
      var _this$props = this.props,
          typeOfWidget = _this$props.typeOfWidget,
          selectedRating = _this$props.rating;
      var hoveredRating = this.state.highestStarHovered;
      var currentRating = hoveredRating > 0 ? hoveredRating : selectedRating; // fix it at 2 decimal places and remove trailing 0s

      var formattedRating = parseFloat(currentRating.toFixed(2)).toString();

      if (Number.isInteger(currentRating)) {
        formattedRating = String(currentRating);
      }

      var starText = "".concat(typeOfWidget, "s");

      if (formattedRating === "1") {
        starText = typeOfWidget;
      }

      return "".concat(formattedRating, " ").concat(starText);
    }
  }, {
    key: "offsetValue",
    get: function get() {
      var rating = this.props.rating;
      var ratingIsInteger = Number.isInteger(rating);
      var offsetValue = "0%";

      if (!ratingIsInteger) {
        var firstTwoDecimals = rating.toFixed(2).split(".")[1].slice(0, 2);
        offsetValue = "".concat(firstTwoDecimals, "%");
      }

      return offsetValue;
    }
  }, {
    key: "renderStars",
    get: function get() {
      var _this2 = this;

      var _this$props2 = this.props,
          changeRating = _this$props2.changeRating,
          selectedRating = _this$props2.rating,
          numberOfStars = _this$props2.numberOfStars,
          starDimension = _this$props2.starDimension,
          starSpacing = _this$props2.starSpacing,
          starRatedColor = _this$props2.starRatedColor,
          starEmptyColor = _this$props2.starEmptyColor,
          starHoverColor = _this$props2.starHoverColor,
          gradientPathName = _this$props2.gradientPathName,
          ignoreInlineStyles = _this$props2.ignoreInlineStyles,
          name = _this$props2.name;
      var highestStarHovered = this.state.highestStarHovered;
      var numberOfStarsArray = Array.apply(null, Array(numberOfStars));
      return numberOfStarsArray.map(function (_, index) {
        var starRating = index + 1;
        var isStarred = starRating <= selectedRating; // hovered only matters when changeRating is true

        var hoverMode = highestStarHovered > 0;
        var isHovered = starRating <= highestStarHovered;
        var isCurrentHoveredStar = starRating === highestStarHovered; // only matters when changeRating is false
        // given star 5 and rating 4.2:  5 > 4.2 && 4 < 4.2;

        var isPartiallyFullStar = starRating > selectedRating && starRating - 1 < selectedRating;
        var isFirstStar = starRating === 1;
        var isLastStar = starRating === numberOfStars;
        var svgIconPath = !isStarred && !isHovered ? "M10.3821 3.5499L12.2958 7.41887L12.6147 8.11224L13.3081 8.21624L17.5792 8.83334L14.5423 11.8148L14.0223 12.321L14.1471 13.0143L14.8751 17.2646L11.0547 15.2608L10.3821 14.9765L9.73728 15.3163L5.91684 17.2924L6.6102 13.0421L6.73501 12.3487L6.22192 11.8148L3.15725 8.79867L7.42837 8.18157L8.12174 8.07757L8.44068 7.38421L10.3821 3.5499ZM10.3821 0.415894L7.2273 6.80871L0.175781 7.82796L5.27894 12.8063L4.07249 19.8301L10.3821 16.5158L16.6917 19.8301L15.4853 12.8063L20.5884 7.83489L13.5369 6.80871L10.3821 0.415894Z" : "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z";
        var svgIconViewBox = !isStarred && !isHovered ? "0 0 21 20" : "0 0 51 48";
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_star.default, {
          fillId: _this2.fillId,
          changeRating: changeRating ? function () {
            return changeRating(starRating, name);
          } : null,
          hoverOverStar: changeRating ? _this2.hoverOverStar(starRating) : null,
          unHoverOverStar: changeRating ? _this2.unHoverOverStar : null,
          isStarred: isStarred,
          isPartiallyFullStar: isPartiallyFullStar,
          isHovered: isHovered,
          hoverMode: hoverMode,
          isCurrentHoveredStar: isCurrentHoveredStar,
          isFirstStar: isFirstStar,
          isLastStar: isLastStar,
          starDimension: starDimension,
          starSpacing: starSpacing,
          starHoverColor: starHoverColor,
          starRatedColor: starRatedColor,
          starEmptyColor: starEmptyColor,
          gradientPathName: gradientPathName,
          ignoreInlineStyles: ignoreInlineStyles,
          svgIconPath: svgIconPath,
          svgIconViewBox: svgIconViewBox
        }, starRating);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          starRatedColor = _this$props3.starRatedColor,
          starEmptyColor = _this$props3.starEmptyColor;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "star-ratings",
        title: this.titleText,
        style: this.starRatingsStyle,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          className: "star-grad",
          style: this.starGradientStyle,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("defs", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("linearGradient", {
              id: this.fillId,
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "0%",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
                offset: "0%",
                className: "stop-color-first",
                style: this.stopColorStyle(starRatedColor)
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
                offset: this.offsetValue,
                className: "stop-color-first",
                style: this.stopColorStyle(starRatedColor)
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
                offset: this.offsetValue,
                className: "stop-color-final",
                style: this.stopColorStyle(starEmptyColor)
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
                offset: "100%",
                className: "stop-color-final",
                style: this.stopColorStyle(starEmptyColor)
              })]
            })
          })
        }), this.renderStars]
      });
    }
  }]);

  return StarRatings;
}(_react.default.Component);

StarRatings.propTypes = {
  rating: _propTypes.default.number.isRequired,
  numberOfStars: _propTypes.default.number.isRequired,
  changeRating: _propTypes.default.func,
  starHoverColor: _propTypes.default.string.isRequired,
  starRatedColor: _propTypes.default.string.isRequired,
  starEmptyColor: _propTypes.default.string.isRequired,
  starDimension: _propTypes.default.string.isRequired,
  starSpacing: _propTypes.default.string.isRequired,
  gradientPathName: _propTypes.default.string.isRequired,
  ignoreInlineStyles: _propTypes.default.bool.isRequired,
  svgIconPath: _propTypes.default.string.isRequired,
  svgIconViewBox: _propTypes.default.string.isRequired,
  name: _propTypes.default.string
};
StarRatings.defaultProps = {
  rating: 0,
  typeOfWidget: "Star",
  numberOfStars: 5,
  changeRating: null,
  starHoverColor: "rgb(230, 67, 47)",
  starRatedColor: "rgb(109, 122, 130)",
  starEmptyColor: "rgb(203, 211, 227)",
  starDimension: "50px",
  starSpacing: "7px",
  gradientPathName: "",
  ignoreInlineStyles: false,
  svgIconPath: "M10.3821 3.5499L12.2958 7.41887L12.6147 8.11224L13.3081 8.21624L17.5792 8.83334L14.5423 11.8148L14.0223 12.321L14.1471 13.0143L14.8751 17.2646L11.0547 15.2608L10.3821 14.9765L9.73728 15.3163L5.91684 17.2924L6.6102 13.0421L6.73501 12.3487L6.22192 11.8148L3.15725 8.79867L7.42837 8.18157L8.12174 8.07757L8.44068 7.38421L10.3821 3.5499ZM10.3821 0.415894L7.2273 6.80871L0.175781 7.82796L5.27894 12.8063L4.07249 19.8301L10.3821 16.5158L16.6917 19.8301L15.4853 12.8063L20.5884 7.83489L13.5369 6.80871L10.3821 0.415894Z",
  svgIconViewBox: "0 0 51 48"
};
var _default = StarRatings;
exports.default = _default;

//# sourceMappingURL=star-ratings.js.map