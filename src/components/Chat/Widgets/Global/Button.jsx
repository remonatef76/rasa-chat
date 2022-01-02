import React from "react";

const Button = ({
  button,
  submit,
  data,
  widget,
  confirmFunc = null,
  TEMPLATE_TYPE,
  MESSAGE_ID,
}) => {
  const storageKeyPayload = `RASA_WIDGET_${TEMPLATE_TYPE}_${MESSAGE_ID}_PAYLOAD`;

  const confirm = () => {
    const DYNAMIC_STATE_PAYLOAD =
      window.localStorage.getItem(storageKeyPayload);
    if (
      button.type === "postback" &&
      button.payload === "DYNAMIC_STATE_PAYLOAD"
    ) {
      console.log(DYNAMIC_STATE_PAYLOAD);
      submit(
        `/${data.attachment.payload.template_type}${DYNAMIC_STATE_PAYLOAD}`,
        button.showText === true ? button.title : false
      );

      return true;
    }

    if (button.type === "postback") {
      submit(
        `/${data.attachment.payload.template_type}${JSON.stringify({
          value: button.payload,
        })}`,
        button.showText === true ? button.title : false
      );
    }

    if (button.type === "confirm" && confirmFunc) {
      confirmFunc();
    }
  };

  let title;

  if (button.image) {
    title = <img src={button.image} alt={button.title} />;
  } else {
    title = <span>{button.title}</span>;
  }

  return (
    <button
      className={
        "rasa-button rasa-default-button " +
        (button.image ? "rasa-button-image " : "") +
        (button.background ? `rasa-button-${button.background} ` : "")
      }
      onClick={confirm}
    >
      {title}
    </button>
  );
};

export default Button;
