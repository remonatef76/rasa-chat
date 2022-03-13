import React from "react";
import icon from "./../../../../assets/images/widgets/download.png";

const Download = ({ payload, index }) => {
  return (
    <div
      className={`rasa-download rasa-download-location-${payload?.location}`}
      key={index}
    >
      <img src={icon} alt="Download" />
    </div>
  );
};

export default Download;
