import React from "react";

const Separator = ({
  props,
  index,
  payloadData,
  TEMPLATE_TYPE,
  MESSAGE_ID,
  name,
  CUSTOM_PAYLOAD,
}) => {
  return (
    <div className="separator" key={index}>
      <span>{payloadData.text}</span>
    </div>
  );
};

export default Separator;
