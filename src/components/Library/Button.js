import React from "react";

function Button({
  children,
  additionalClassName,
  disabled,
  onClick,
  color,
  size,
  style,
  type,
  id
}) {
  let className = "button ";
  switch (color) {
    case "success":
      className = className + " is-success";
      break;
    case "primary":
      className = className + " is-primary";
      break;
    case "danger":
      className = className + " is-danger";
      break;
    case "warning":
      className = className + " is-warning";
      break;
    case "info":
      className = className + " is-info";
      break;
    case "white":
      className = className + " is-white";
      break;
  }

  switch (size) {
    case "small":
      className = className + " is-small";
      break;
    case "normal":
      className = className + " is-normal";
      break;
    case "large":
      className = className + " is-large";
      break;
  }

  return (
    <button
      className={`${className} ${additionalClassName}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={style}
      id={id}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: "default",
  size: "normal",
  type: "button"
};

export default Button;
