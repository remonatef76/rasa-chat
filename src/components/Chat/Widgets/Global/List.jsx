import React from "react";
import Buttons from "./List/Buttons";
import Product from "./List/Product";

const List = (props) => {
  const { data } = props;
  const payload = data.attachment.payload;
  const TEMPLATE_TYPE = payload.template_type;
  const MESSAGE_ID = data.id;
  return (
    <div
      className={`rasa-list-widget rasa-green rasa-custom-chat-box ${payload.class}`}
    >
      <div
        className="title"
        style={{ textAlign: payload.textAlign || "center" }}
      >
        {payload.title}
      </div>

      {payload.elements.map((element, index) => {
        const keys = Object.keys(element);
        let content = [];
        let options = element.options;
        for (let key of keys) {
          const payloadData = element[key];
          let optionsClass = "";
          for (let optionKey in options) {
            optionsClass += ` ${key}-${optionKey}-${options[optionKey]}`;
          }
          /**
           * Button Template Render
           */
          if (key === "buttons") {
            content = Buttons({
              content,
              payloadData,
              index,
              props,
              options,
              optionsClass,
              TEMPLATE_TYPE,
              MESSAGE_ID,
            });
          }
          /**
           * Product Template Render
           */
          if (key === "products") {
            content = Product({
              content,
              payloadData,
              index,
              props,
              options,
              optionsClass,
              TEMPLATE_TYPE,
              MESSAGE_ID,
            });
          }
        }
        return content;
      })}
    </div>
  );
};

export default List;
