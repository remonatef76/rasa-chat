import React from "react";
import PropTypes from "prop-types";
import Star from "./star";

class StarRatings extends React.Component {
  state = {
    highestStarHovered: -Infinity,
  };
  fillId = `starGrad${Math.random().toFixed(15).slice(2)}`;

  get starRatingsStyle() {
    const starRatingsStyle = {
      position: "relative",
      boxSizing: "border-box",
      display: "inline-block",
    };
    return this.props.ignoreInlineStyles ? {} : starRatingsStyle;
  }

  get starGradientStyle() {
    const starGradientStyle = {
      position: "absolute",
      zIndex: "0",
      width: "0",
      height: "0",
      visibility: "hidden",
    };
    return this.props.ignoreInlineStyles ? {} : starGradientStyle;
  }

  stopColorStyle(color) {
    const stopColorStyle = {
      stopColor: color,
      stopOpacity: "1",
    };
    return this.props.ignoreInlineStyles ? {} : stopColorStyle;
  }

  get titleText() {
    const { typeOfWidget, rating: selectedRating } = this.props;
    const hoveredRating = this.state.highestStarHovered;
    const currentRating = hoveredRating > 0 ? hoveredRating : selectedRating;
    // fix it at 2 decimal places and remove trailing 0s
    let formattedRating = parseFloat(currentRating.toFixed(2)).toString();
    if (Number.isInteger(currentRating)) {
      formattedRating = String(currentRating);
    }
    let starText = `${typeOfWidget}s`;
    if (formattedRating === "1") {
      starText = typeOfWidget;
    }
    return `${formattedRating} ${starText}`;
  }

  get offsetValue() {
    const rating = this.props.rating;
    const ratingIsInteger = Number.isInteger(rating);
    let offsetValue = "0%";
    if (!ratingIsInteger) {
      const firstTwoDecimals = rating.toFixed(2).split(".")[1].slice(0, 2);
      offsetValue = `${firstTwoDecimals}%`;
    }
    return offsetValue;
  }

  hoverOverStar = (starRating) => {
    return () => {
      this.setState({
        highestStarHovered: starRating,
      });
    };
  };

  unHoverOverStar = () => {
    this.setState({
      highestStarHovered: -Infinity,
    });
  };

  get renderStars() {
    const {
      changeRating,
      rating: selectedRating,
      numberOfStars,
      starDimension,
      starSpacing,
      starRatedColor,
      starEmptyColor,
      starHoverColor,
      gradientPathName,
      ignoreInlineStyles,
      name,
    } = this.props;
    const { highestStarHovered } = this.state;

    const numberOfStarsArray = Array.apply(null, Array(numberOfStars));

    return numberOfStarsArray.map((_, index) => {
      const starRating = index + 1;
      const isStarred = starRating <= selectedRating;

      // hovered only matters when changeRating is true
      const hoverMode = highestStarHovered > 0;
      const isHovered = starRating <= highestStarHovered;
      const isCurrentHoveredStar = starRating === highestStarHovered;

      // only matters when changeRating is false
      // given star 5 and rating 4.2:  5 > 4.2 && 4 < 4.2;
      const isPartiallyFullStar =
        starRating > selectedRating && starRating - 1 < selectedRating;

      const isFirstStar = starRating === 1;
      const isLastStar = starRating === numberOfStars;

      const svgIconPath =
        !isStarred && !isHovered
          ? "M10.3821 3.5499L12.2958 7.41887L12.6147 8.11224L13.3081 8.21624L17.5792 8.83334L14.5423 11.8148L14.0223 12.321L14.1471 13.0143L14.8751 17.2646L11.0547 15.2608L10.3821 14.9765L9.73728 15.3163L5.91684 17.2924L6.6102 13.0421L6.73501 12.3487L6.22192 11.8148L3.15725 8.79867L7.42837 8.18157L8.12174 8.07757L8.44068 7.38421L10.3821 3.5499ZM10.3821 0.415894L7.2273 6.80871L0.175781 7.82796L5.27894 12.8063L4.07249 19.8301L10.3821 16.5158L16.6917 19.8301L15.4853 12.8063L20.5884 7.83489L13.5369 6.80871L10.3821 0.415894Z"
          : "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z";

      const svgIconViewBox =
        !isStarred && !isHovered ? "0 0 21 20" : "0 0 51 48";

      return (
        <Star
          key={starRating}
          fillId={this.fillId}
          changeRating={
            changeRating ? () => changeRating(starRating, name) : null
          }
          hoverOverStar={changeRating ? this.hoverOverStar(starRating) : null}
          unHoverOverStar={changeRating ? this.unHoverOverStar : null}
          isStarred={isStarred}
          isPartiallyFullStar={isPartiallyFullStar}
          isHovered={isHovered}
          hoverMode={hoverMode}
          isCurrentHoveredStar={isCurrentHoveredStar}
          isFirstStar={isFirstStar}
          isLastStar={isLastStar}
          starDimension={starDimension}
          starSpacing={starSpacing}
          starHoverColor={starHoverColor}
          starRatedColor={starRatedColor}
          starEmptyColor={starEmptyColor}
          gradientPathName={gradientPathName}
          ignoreInlineStyles={ignoreInlineStyles}
          svgIconPath={svgIconPath}
          svgIconViewBox={svgIconViewBox}
        />
      );
    });
  }

  render() {
    const { starRatedColor, starEmptyColor } = this.props;

    return (
      <div
        className="star-ratings"
        title={this.titleText}
        style={this.starRatingsStyle}
      >
        <svg className="star-grad" style={this.starGradientStyle}>
          <defs>
            <linearGradient id={this.fillId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                className="stop-color-first"
                style={this.stopColorStyle(starRatedColor)}
              />
              <stop
                offset={this.offsetValue}
                className="stop-color-first"
                style={this.stopColorStyle(starRatedColor)}
              />
              <stop
                offset={this.offsetValue}
                className="stop-color-final"
                style={this.stopColorStyle(starEmptyColor)}
              />
              <stop
                offset="100%"
                className="stop-color-final"
                style={this.stopColorStyle(starEmptyColor)}
              />
            </linearGradient>
          </defs>
        </svg>
        {this.renderStars}
      </div>
    );
  }
}

StarRatings.propTypes = {
  rating: PropTypes.number.isRequired,
  numberOfStars: PropTypes.number.isRequired,
  changeRating: PropTypes.func,
  starHoverColor: PropTypes.string.isRequired,
  starRatedColor: PropTypes.string.isRequired,
  starEmptyColor: PropTypes.string.isRequired,
  starDimension: PropTypes.string.isRequired,
  starSpacing: PropTypes.string.isRequired,
  gradientPathName: PropTypes.string.isRequired,
  ignoreInlineStyles: PropTypes.bool.isRequired,
  svgIconPath: PropTypes.string.isRequired,
  svgIconViewBox: PropTypes.string.isRequired,
  name: PropTypes.string,
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
  svgIconPath:
    "M10.3821 3.5499L12.2958 7.41887L12.6147 8.11224L13.3081 8.21624L17.5792 8.83334L14.5423 11.8148L14.0223 12.321L14.1471 13.0143L14.8751 17.2646L11.0547 15.2608L10.3821 14.9765L9.73728 15.3163L5.91684 17.2924L6.6102 13.0421L6.73501 12.3487L6.22192 11.8148L3.15725 8.79867L7.42837 8.18157L8.12174 8.07757L8.44068 7.38421L10.3821 3.5499ZM10.3821 0.415894L7.2273 6.80871L0.175781 7.82796L5.27894 12.8063L4.07249 19.8301L10.3821 16.5158L16.6917 19.8301L15.4853 12.8063L20.5884 7.83489L13.5369 6.80871L10.3821 0.415894Z",
  svgIconViewBox: "0 0 51 48",
};

export default StarRatings;
