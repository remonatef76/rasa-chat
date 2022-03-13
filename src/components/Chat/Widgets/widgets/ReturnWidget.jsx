import React, { useState } from "react";
import Button from "../Global/Button";

const ReturnWidget = (props) => {
  const { data, addGetLocalstorage } = props;
  const storageKey = `RASA_WIDGET_${data.attachment.payload.template_type}_${data.id}`;
  const defaultValue = addGetLocalstorage(storageKey, null, "GET");
  const [showReturnBox, setShowReturnBox] = useState(defaultValue);
  const elements = data.attachment.payload.elements;
  const returnConfirm = elements.returnConfirm;
  const showReturn = () => {
    addGetLocalstorage(storageKey, true, "ADD");
    setShowReturnBox(true);
  }
  return (
    <>
      <div className="rasa-return-widget rasa-green rasa-custom-chat-box">
        <div className="title">{elements.title}</div>
        <div className="buttons">
          <div className="button-container">
            <Button button={elements.buttons.replacement} {...props}></Button>
            <span className="return-button">
              <Button button={elements.buttons.return} {...props} confirmFunc={showReturn}></Button>
            </span>
          </div>
        </div>
      </div>

      {showReturnBox && (
        <div className="rasa-return-confirm-widget rasa-green rasa-custom-chat-box">
          <div className="title">{returnConfirm.title}</div>
          <div className="buttons">
            <div className="button-container">
              <span className="return-button">
                <Button button={elements.returnConfirm.button} {...props}></Button>
              </span>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default ReturnWidget;
