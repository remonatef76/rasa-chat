import React from "react";
import Buttons from "./Form/Buttons";
import Radio from "./Form/Radio";
import Textarea from "./Form/Textarea";
import Input from "./Form/Input";
import Separator from "./Form/Separator";
import CurrentLocation from "./Form/CurrentLocation";
import Rate from "./Form/Rate";
import Select from "./Form/Select";
import SelectSmall from "./Form/SelectSmall";

const Form = (props) => {
  const { data } = props;
  const payload = data.attachment.payload;
  const TEMPLATE_TYPE = payload.template_type;
  const MESSAGE_ID = data.id;
  return (
    <div
      className={`rasa-form-widget rasa-green rasa-custom-chat-box ${payload.class}`}
    >
      {payload.title && <div className="title">{payload.title}</div>}

      {payload.elements.map((element, index) => {
        const keys = Object.keys(element);
        const name = element.name;
        const CUSTOM_PAYLOAD = element.custom_payload;
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
              name,
              CUSTOM_PAYLOAD,
            });
          }
          /**
           * Radio Template Render
           */
          if (key === "radio") {
            content = Radio({
              content,
              payloadData,
              index,
              props,
              options,
              optionsClass,
              TEMPLATE_TYPE,
              MESSAGE_ID,
              name,
              CUSTOM_PAYLOAD,
            });
          }

          /**
           * Rate Template Render
           */
          if (key === "rate") {
            content = Rate({
              content,
              payloadData,
              index,
              props,
              options,
              optionsClass,
              TEMPLATE_TYPE,
              MESSAGE_ID,
              name,
              CUSTOM_PAYLOAD,
            });
          }

          /**
           * Textarea Template Render
           */
          if (key === "textarea") {
            content = Textarea({
              content,
              payloadData,
              index,
              props,
              options,
              optionsClass,
              TEMPLATE_TYPE,
              MESSAGE_ID,
              name,
              CUSTOM_PAYLOAD,
            });
          }

          /**
           * Input Template Render
           */
          if (key === "input") {
            content = Input({
              content,
              payloadData,
              index,
              props,
              options,
              optionsClass,
              TEMPLATE_TYPE,
              MESSAGE_ID,
              name,
              CUSTOM_PAYLOAD,
            });
          }

          /**
           * Separator Template Render
           */
          if (key === "separator") {
            content = Separator({
              content,
              payloadData,
              index,
              props,
              options,
              optionsClass,
              TEMPLATE_TYPE,
              MESSAGE_ID,
              name,
              CUSTOM_PAYLOAD,
            });
          }

          /**
           * Current Location Template Render
           */

          if (key === "current_location") {
            content = CurrentLocation({
              content,
              payloadData,
              index,
              props,
              options,
              optionsClass,
              TEMPLATE_TYPE,
              MESSAGE_ID,
              name,
              CUSTOM_PAYLOAD,
            });
          }

          /**
           * Select Template Render
           */

          if (key === "select") {
            content = Select({
              content,
              payloadData,
              index,
              props,
              options,
              optionsClass,
              TEMPLATE_TYPE,
              MESSAGE_ID,
              name,
              CUSTOM_PAYLOAD,
            });
          }

          /**
           * Select Small Template Render
           */

          if (key === "select_small") {
            content = SelectSmall({
              content,
              payloadData,
              index,
              props,
              options,
              optionsClass,
              TEMPLATE_TYPE,
              MESSAGE_ID,
              name,
              CUSTOM_PAYLOAD,
            });
          }
        }
        return content;
      })}
    </div>
  );
};

export default Form;
