import React, { useState } from "react";
import play from "./../../../../../assets/images/widgets/play.png";

const Fun = ({ content, payloadData, index, TEMPLATE_TYPE }) => {
  const [show, setShow] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleShowVideo = () => {
    setShowVideo(!showVideo);
  };

  const data = (
    <div
      className="video rasa-green"
      key={index + TEMPLATE_TYPE + show + "video"}
    >
      <div className="img-container">
        {showVideo && <video controls src={payloadData.src}></video>}
        {!showVideo && (
          <>
            <img
              src={payloadData.img}
              title={payloadData.desc}
              className="img"
              alt="Thumbnail"
            />
            <img
              src={play}
              alt={"play"}
              className="play"
              onClick={toggleShowVideo}
            />
          </>
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
