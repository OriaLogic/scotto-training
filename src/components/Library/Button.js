import React from 'react';

function Button(props) {
  return <button
          type="button/submit"
          disabled={props.disabled}
          color="primary/danger/success/info/default"
          size="large/normal/small"
          onClick={props.onClick}
        >
            {props.name}
        </button>
}

Button.defaultProps = {
  color: 'primary',
  size: 'normal'
};

export default Button;
