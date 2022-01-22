import React, { useState } from "react";
import play from "./../../../../../assets/images/widgets/play.png";

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

  const data = (
    <div
      className="video rasa-green"
      key={index + TEMPLATE_TYPE + show + "video"}
    >
      <div className="img-container">
        <img src={payloadData.img} title={payloadData.desc} className="img" />
        <img src={play} alt={"play"} className="play" />
      </div>
      <div className="desc-container">
        <span>
          {!show
            ? payloadData.desc.split(" ").slice(0, 17).join(" ")
            : payloadData.desc}{" "}
          <span className="read-more" onClick={toggleShow}>
            {show ? "Read Less >>" : "Read More >>"}
          </span>
        </span>
      </div>
    </div>
  );

  content.push(data);
  return content;
};

export default Fun;
