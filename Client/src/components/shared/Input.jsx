import React from "react";

const Input = ({ ...props }) => {
  return <input type={props.type || "text"} {...props} />;
};

export default Input;
