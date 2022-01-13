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

  useEffect(() => {
    console.log(show);
  }, show);

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
      </div>
    </div>
  );

  content.push(data);
  return content;
};

export default Fun;
