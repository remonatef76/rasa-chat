import React from "react";
import Buttons from "./List/Buttons";
import Product from "./List/Product";
import OrderStatus from "./List/OrderStatus";
import Article from "./List/Article";
import Share from "./Share";
import Download from "./Download";

const List = (props) => {
  const { data } = props;
  const payload = data.attachment.payload;
  const TEMPLATE_TYPE = payload.template_type;
  const MESSAGE_ID = data.id;
  return (
    <div
      className={`rasa-list-widget rasa-green rasa-custom-chat-box ${payload.class}`}
    >
      {payload.title && (
        <div
          className="title"
          style={{ textAlign: payload.textAlign || "center" }}
        >
          {payload.title}
        </div>
      )}

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

          /**
           * Order Status Template Render
           */
          if (key === "orderStatus") {
            content = OrderStatus({
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
           * Article Template Render
           */
          if (key === "article") {
            content = Article({
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
           * Share Template Render
           */
          if (key === "share") {
            content.push(
              <Share payload={payloadData} index={index} key={index} />
            );
          }

          /**
           * Download Template Render
           */
          if (key === "download") {
            content.push(
              <Download payload={payloadData} index={index} key={index} />
            );
          }
        }
        return content;
      })}
    </div>
  );
};

export default List;
