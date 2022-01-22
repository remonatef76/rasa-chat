import React, { useState } from "react";
import arrowDown from "./../../../../../assets/images/widgets/arrow-down-white.png";

const Fun = ({ content, payloadData, index, TEMPLATE_TYPE }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const barsContent = [];

  const bodyContent = [];

  for (let bar of payloadData.body) {
    if (bar.showBar) {
      barsContent.push(
        <div
          className={`bar ${bar.done ? "bar-done" : "bar-none"}`}
          key={bar.title.text}
        >
          <div className="bar-bullet"></div>
          <div className="bar-line"></div>
          <span className="bar-title">{bar.title.text.replace("|", "")}</span>
        </div>
      );
    }

    const bodyListContent = [];

    for (let body of bar.body) {
      bodyListContent.push(
        <div className="list-container" key={body.title + body.desc}>
          {body.title && <div className="body-title">{body.title}</div>}
          {body.desc && <div className="body-desc">{body.desc}</div>}
        </div>
      );
    }

    bodyContent.push(
      <div className="body-container" key={bar.title.text}>
        <div className="status-title-container">
          {bar.title.text && (
            <div className="status-title">{bar.title.text}</div>
          )}
          {bar.title.desc && (
            <div className="status-desc">{bar.title.desc}</div>
          )}
        </div>

        <div className="body-list-container">{bodyListContent}</div>
      </div>
    );
  }

  const data = (
    <div className="order-status" key={index + TEMPLATE_TYPE + show + "status"}>
      <div className="bar-container">
        <div className="title-container" onClick={toggleShow}>
          <div className="title">{payloadData.title}</div>
          <img
            className={`icon ${show ? "icon-down" : "icon-up"}`}
            src={arrowDown}
            alt="arrow"
          />
        </div>
        <div className="bars">{barsContent}</div>
      </div>

      {show && bodyContent}
    </div>
  );

  content.push(data);
  return content;
};

export default Fun;
