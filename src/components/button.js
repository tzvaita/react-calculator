import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnName, color, wide, clickHandler } ) => {
  const handleClick = btName => clickHandler(btName);

  return (
    <button
      className="btn"
      type="button"
      onClick={() => handleClick(btnName)}
      style={{
        backgroundColor: color ? '#dfdfdf' : null,
        width: wide ? '50%' : null,
      }}
    >
      {btnName}
    </button>
  );
};

Button.defaultProps = {
  color: false,
  wide: false,
  clickHandler: null,
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};

export default Button;
