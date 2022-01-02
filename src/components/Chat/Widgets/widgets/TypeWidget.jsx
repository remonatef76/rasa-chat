import React from "react";
import Button from "../Global/Button";

const TypeWidget = (props) => {
  const { data } = props;
  const elements = data.attachment.payload.elements;
  return (
    <div className="rasa-type-widget rasa-green rasa-custom-chat-box">
      <div className="title">{elements.title}</div>
      <div className="buttons">
        {elements.buttons.map((button, i) => (
          <Button key={i} button={button} {...props}></Button>
        ))}
      </div>
    </div>
  );
};

export default TypeWidget;
