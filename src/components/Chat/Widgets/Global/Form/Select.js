import React, { useState } from "react";

const Select = ({
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
  const [rate, setRate] = useState(defaultValue ? defaultValue : {});
  const [update, setUpdate] = useState(0);
  const elements = payloadData;

  const confirm = () => {
    let defaultPayload = addGetLocalstorage(storageKeyPayload, null, "GET");

    if (!defaultPayload || typeof defaultPayload !== "object") {
      defaultPayload = {};
    }

    for (let k in rate) {
      defaultPayload[k] = rate[k];
      defaultPayload[k + "_custom"] = CUSTOM_PAYLOAD;
    }

    addGetLocalstorage(storageKey, JSON.stringify(rate), "ADD");
    addGetLocalstorage(
      storageKeyPayload,
      JSON.stringify(defaultPayload),
      "ADD"
    );

    setUpdate(update + 1);
  };

  const updateRating = (i, v) => {
    let rates = rate;
    rates[i] = v;
    setRate(rates);
    confirm();
  };

  return (
    <div className="select-container" key={index}>
      {elements.map((item, i) => {
        return (
          <div className="select" key={i}>
            <select
              value={rate[item.name]}
              onChange={(e) => updateRating(item.name, e.target.value)}
              name={item.name}
            >
              {item.items.map((select) => (
                <option value={select.value} key={select.value}>
                  {select.label}
                </option>
              ))}
            </select>
          </div>
        );
      })}
    </div>
  );
};

export default Select;
