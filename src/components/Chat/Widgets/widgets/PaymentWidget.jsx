import React, { useState } from "react";

const Paymentwidget = (props) => {
  const { data, submit, addGetLocalstorage } = props;
  const storageKey = `RASA_WIDGET_${data.attachment.payload.template_type}_${data.id}`;
  const defaultValue = addGetLocalstorage(storageKey, null, "GET");
  const [selected, setSelected] = useState(defaultValue ? defaultValue : 0);
  const elements = data.attachment.payload.elements;
  const confirm = () => {
    let payload = {
      value: data.attachment.payload.elements.items[selected].payload,
    };
    addGetLocalstorage(storageKey, selected, "ADD");
    submit(
      `/${data.attachment.payload.template_type}${JSON.stringify(payload)}`,
      data.attachment.payload.elements.items[selected].title
    );
  };

  const select = (index) => {
    setSelected(index);
  };

  return (
    <div className="rasa-payment-widget rasa-green rasa-custom-chat-box">
      <div className="title">{elements.title}</div>
      <div className="items">
        {data.attachment.payload.elements.items.map((item, index) => {
          return (
            <div
              className={`radio ${index === selected ? "selected" : ""}`}
              onClick={() => select(index)}
              key={index}
            >
              <div className="circle">
                <span></span>
              </div>
              <div className="title">{item.title}</div>
            </div>
          );
        })}
      </div>
      <div className="submit">
        <button className="submit-button" onClick={confirm}>
          {elements.submit.title}
        </button>
      </div>
    </div>
  );
};

export default Paymentwidget;
