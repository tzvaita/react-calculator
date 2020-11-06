import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, next }) => (
  <div className="display">
    {next || (result || 0)}
  </div>
);

Display.defaultProps = {
  result: '0',
  next: null,
};

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
};

export default Display;
