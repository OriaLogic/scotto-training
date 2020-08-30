import React from 'react';

function Button({
  children,
  additionalClassName,
  disabled,
  onClick,
  color,
  size,
  style
}) {

  let className = "button "
  switch (color) {
    case "success":
      className = className + " is-success"
      break
    case "primary":
      className = className + " is-primary"
      break
    case "danger":
      className = className + " is-danger"
      break
    case "warning":
      className = className + " is-warning"
      break
    case "info":
      className = className + " is-info"
      break
  }

  switch (size) {
    case "small":
      className = className + " is-small"
      break
    case "normal":
      className = className + " is-normal"
      break
    case "large":
      className = className + " is-large"
      break
  }

  return (
    <button
      className={`${className} ${additionalClassName}`}
      type="button/submit"
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  color: 'default',
  size: 'normal'
};

export default Button;
