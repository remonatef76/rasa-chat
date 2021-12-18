import React, { useState } from "react";

const CartWidget = (props) => {
  const { data, submit, addGetLocalstorage } = props;
  const storageKey = `RASA_WIDGET_${data.attachment.payload.template_type}_${data.id}`;
  const defaultValue = addGetLocalstorage(storageKey, null, "GET");

  const [units, setUnites] = useState(defaultValue ? defaultValue : {});
  const [update, setUpdate] = useState(1);
  const elements = data.attachment.payload.elements;
  const confirm = () => {
    let payload = [];
    for (let x in data.attachment.payload.elements.products) {
      payload.push({
        productId: data.attachment.payload.elements.products[x].productId,
        units: units[x],
      });
    }
    addGetLocalstorage(storageKey, units, "ADD");
    submit(
      `/${data.attachment.payload.template_type}${JSON.stringify(payload)}`,
      null
    );
  };

  const addUnit = (index) => {
    let newUnits = units;
    newUnits[index] = newUnits[index] + 1;
    setUnites(newUnits);
    setUpdate(update + 1);
  };

  const removeUnit = (index) => {
    let newUnits = units;
    if (!newUnits[index]) {
      return false;
    }
    newUnits[index] = newUnits[index] - 1;
    setUnites(newUnits);
    setUpdate(update + 1);
  };

  return (
    <div
      className="rasa-cart-widget rasa-green rasa-custom-chat-box"
      data-update={update}
    >
      <div className="title">{elements.title}</div>
      <div className="products">
        {elements.products.map((product, index) => {
          if (!units[index]) {
            let newUnits = units;
            newUnits[index] = product.defaultUnits;
            setUnites(newUnits);
          }
          return (
            <div key={index} className="product-container">
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
                  <div className="minus" onClick={() => removeUnit(index)}>
                    <span>-</span>
                  </div>
                  <span className="value">
                    <span>{units[index]}</span>
                  </span>
                  <div className="plus" onClick={() => addUnit(index)}>
                    <span>+</span>
                  </div>
                </div>
              </div>
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

export default CartWidget;
