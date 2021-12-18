import React from "react";
import Button from "./../Button";

const fun = ({
  content,
  payloadData,
  index,
  props,
  options,
  optionsClass,
  TEMPLATE_TYPE,
  MESSAGE_ID,
}) => {
  let buttonsContent = [];
  let x = 0;
  for (let button of payloadData) {
    let buttonContent = (
      <Button
        button={button}
        {...props}
        TEMPLATE_TYPE={TEMPLATE_TYPE}
        MESSAGE_ID={MESSAGE_ID}
        key={x}
      ></Button>
    );
    buttonsContent.push(buttonContent);
    x++;
  }

  content.push(
    <div className={"buttons" + optionsClass} key={index}>
      <div className="button-container">{buttonsContent}</div>
    </div>
  );
  return content;
};

export default fun;
