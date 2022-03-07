import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import { GradientPickerPopover } from "react-linear-gradient-picker";
import "react-linear-gradient-picker/dist/index.css";
import { StyleSheetBuilder } from "./StyleSheetBuilder";

const rgbToRgba = (rgb, a = 1) =>
  rgb.replace("rgb(", "rgba(").replace(")", `, ${a})`);

const WrappedSketchPicker = ({ onSelect, ...rest }) => {
  return (
    <SketchPicker
      {...rest}
      color={rgbToRgba(rest.color, rest.opacity)}
      onChange={(c) => {
        const { r, g, b, a } = c.rgb;
        onSelect(`rgb(${r}, ${g}, ${b})`, a);
      }}
    />
  );
};

const getColors = (color) => {
  let colors = [];
  let colorsString = color.split("deg, ")[1].replace(/\($/, "");
  colorsString.split(", ").map((c) => {
    let colorsList = c.split(" ");
    let colorObj = {};
    colorObj.color = colorsList[0];
    colorObj.offset = parseInt(colorsList[1]) / 100;
    if (colorObj.color.length > 0) {
      colors.push(colorObj);
    }
  });
  return colors;
};

const getAngel = (color) => {
  return color.replace("linear-gradient(", "").split("deg")[0];
};

const ColorsPicker = ({ variable, color }) => {
  const initialPallet = [
    { offset: "-0.1481", color: "#fff" },
    { offset: "1.00", color: "#000" },
  ];

  const [open, setOpen] = useState(false);
  const [angle, setAngle] = useState(getAngel(color));
  const [palette, setPalette] = useState(
    getColors(color).length > 0 ? getColors(color) : initialPallet
  );

  useEffect(() => {
    let colorStyle = `linear-gradient(${angle}deg, ${palette
      .map((c) => c.color.replace(/ /g, "") + " " + c.offset * 100 + "%")
      .join(", ")})`;
    StyleSheetBuilder(variable, colorStyle);
    window.localStorage.setItem(`color-${variable}`, colorStyle);
  }, [palette, angle]);

  useEffect(() => {
    const colors = getColors(color);
    if (colors.length > 0) {
      setPalette(colors);
    }
    setAngle(getAngel(color));
  }, [color]);

  return (
    <GradientPickerPopover
      {...{
        open,
        setOpen,
        angle,
        setAngle,
        showAnglePicker: true,
        width: 220,
        maxStops: 3,
        paletteHeight: 32,
        palette,
        onPaletteChange: setPalette,
      }}
    >
      <WrappedSketchPicker />
    </GradientPickerPopover>
  );
};

export default ColorsPicker;
