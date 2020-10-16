import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnName, color, wide }) => (
  <button
    className="btn"
    type="button"
    style={{
      backgroundColor: color ? '#dfdfdf' : null,
      width: wide ? '50%' : null,
    }}
  >
    {btnName}
  </button>
);

Button.defaultProps = {
  color: false,
  wide: false,
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
