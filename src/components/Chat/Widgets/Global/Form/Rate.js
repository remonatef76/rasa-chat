import React, { useState } from "react";
import StarRatings from "./../../../star-rating";

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
    setTimeout(() => {
      confirm();
    }, 100);
  };

  return (
    <div className="rates" key={index}>
      {elements.map((item, i) => {
        return (
          <div className="rate" key={update + i}>
            <StarRatings
              rating={rate[item.name]}
              starRatedColor="#FFDF00"
              starHoverColor="#FFDF00"
              starEmptyColor="#FFF"
              changeRating={(v) => updateRating(item.name, v)}
              numberOfStars={5}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
