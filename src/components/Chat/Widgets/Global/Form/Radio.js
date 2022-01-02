import React, { useState, useEffect } from "react";

const Product = ({
  props,
  index,
  payloadData,
  TEMPLATE_TYPE,
  MESSAGE_ID,
  name,
  CUSTOM_PAYLOAD,
}) => {
  const { addGetLocalstorage } = props;
  const storageKey = `RASA_WIDGET_${TEMPLATE_TYPE}_${MESSAGE_ID}_${name}`;
  const storageKeyPayload = `RASA_WIDGET_${TEMPLATE_TYPE}_${MESSAGE_ID}_PAYLOAD`;
  const defaultValue = addGetLocalstorage(storageKey, null, "GET");

  const [selected, setSelected] = useState(defaultValue ? defaultValue : 0);
  const elements = payloadData;

  const confirm = () => {
    let defaultPayload = addGetLocalstorage(storageKeyPayload, null, "GET");

    if (!defaultPayload || typeof defaultPayload !== "object") {
      defaultPayload = {};
    }

    defaultPayload[name] = selected;
    defaultPayload[name + "_custom"] = CUSTOM_PAYLOAD;

    addGetLocalstorage(storageKey, selected, "ADD");
    addGetLocalstorage(
      storageKeyPayload,
      JSON.stringify(defaultPayload),
      "ADD"
    );
  };

  const select = (i) => {
    setSelected(i);
  };

  useEffect(() => {
    confirm();
  }, [selected]);

  return (
    <div className="radios" key={index}>
      {elements.map((item, i) => {
        return (
          <div
            className={`radio ${i === selected ? "selected" : ""}`}
            onClick={() => select(i)}
            key={i}
          >
            <div className="circle">
              <span></span>
            </div>
            <div className="title">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
