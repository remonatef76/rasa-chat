import React from "react";
import Button from "../Global/Button";

const SizeWidget = (props) => {
  const { data } = props;
  const elements = data.attachment.payload.elements;
  return (
    <div className="rasa-size-widget rasa-green rasa-custom-chat-box">
      <div className="title">{elements.title}</div>
      <div className="buttons">
        {elements.buttons.map((buttonContainer, index) => {
          return (
            <div className="button-container" key={index}>
              {buttonContainer.map((button, i) => (
                <Button key={i} button={button} {...props}></Button>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SizeWidget;
