import React, { useState, useEffect } from "react";
import arrowDown from "./../../../../../assets/images/widgets/arrow-down-white.png";

const Fun = ({
  content,
  payloadData,
  index,
  props,
  options,
  optionsClass,
  TEMPLATE_TYPE,
  MESSAGE_ID,
}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const barsContent = [];

  for (let bar of payloadData.body) {
    if (bar.showBar) {
      barsContent.push(
        <div className={`bar ${bar.done ? "bar-done" : "bar-none"}`}>
          <div className="bar-bullet"></div>
          <div className="bar-line"></div>
          <span className="bar-title">{bar.title.text.replace("|", "")}</span>
        </div>
      );
    }
  }

  const data = (
    <div className="order-status" key={index + TEMPLATE_TYPE + show + "status"}>
      <div className="bar-container">
        <div className="title-container" onClick={toggleShow}>
          <div className="title">{payloadData.title}</div>
          <img
            className={`icon ${show ? "icon-down" : "icon-up"}`}
            src={arrowDown}
          />
        </div>
        <div className="bars">{barsContent}</div>
      </div>
    </div>
  );

  content.push(data);
  return content;
};

export default Fun;
