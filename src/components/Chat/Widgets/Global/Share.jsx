import React from "react";
import shareIcon from "./../../../../assets/images/widgets/share.png";

const Share = ({ payload, index }) => {
  return (
    <div
      className={`rasa-share rasa-share-location-${payload?.location}`}
      key={index}
    >
      <img src={shareIcon} alt="Share" />
    </div>
  );
};

export default Share;
