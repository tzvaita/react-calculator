import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnName }) => (
  <button className="btn" type="button">
    {btnName}
  </button>
);

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
