import React, { useState, useEffect } from "react";

const OrderStatus = ({ props, index, payloadData, TEMPLATE_TYPE, MESSAGE_ID }) => {
  const { addGetLocalstorage } = props;
  const storageKey = `RASA_WIDGET_${TEMPLATE_TYPE}_${MESSAGE_ID}`;
  const storageKeyPayload = `RASA_WIDGET_${TEMPLATE_TYPE}_${MESSAGE_ID}_PAYLOAD`;
  const defaultValue = addGetLocalstorage(storageKey, null, "GET");

  const [units, setUnites] = useState(defaultValue ? defaultValue : {});
  const [update, setUpdate] = useState(1);
  const elements = payloadData;
  const confirm = () => {
    let payload = [];
    for (let x in elements) {
      payload.push({
        id: elements[x].id,
        units: units[x],
      });
    }
    addGetLocalstorage(storageKey, units, "ADD");
    addGetLocalstorage(storageKeyPayload, JSON.stringify(payload), "ADD");
  };

  const addUnit = (i) => {
    let newUnits = units;
    newUnits[i] = newUnits[i] + 1;
    setUnites(newUnits);
    setUpdate(update + 1);
  };

  const removeUnit = (i) => {
    let newUnits = units;
    if (!newUnits[i]) {
      return false;
    }
    newUnits[i] = newUnits[i] - 1;
    setUnites(newUnits);
    setUpdate(update + 1);
  };

  useEffect(() => {
    confirm();
  }, [update]);

  return (
    <div className="products" key={index}>
      {elements.map((product, i) => {
        if (!units[i]) {
          let newUnits = units;
          newUnits[i] = product.defaultUnits;
          setUnites(newUnits);
        }
        return (
          <div key={i} className="product-container">
            <div className="img">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="content">
              <div className="title">{product.title}</div>
              <div className="desc">{product.description}</div>
              <div className="unit">{product.unitsTitle}</div>
            </div>
            <div className="unit-selector">
              <div className="unit-container">
                <div className="minus" onClick={() => removeUnit(i)}>
                  <span>-</span>
                </div>
                <span className="value">
                  <span>{units[i]}</span>
                </span>
                <div className="plus" onClick={() => addUnit(i)}>
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderStatus;
