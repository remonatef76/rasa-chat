import React, { useState, useEffect } from "react";
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
    <div className="article" key={index + TEMPLATE_TYPE + show + "article"}>
      <div className="img-container">
        <img src={payloadData.img} title={payloadData.desc} className="img" />
        {payloadData.fileType === "pdf" && (
          <img src={play} alt={payloadData.fileType} className="file-type" />
        )}
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
