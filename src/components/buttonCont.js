import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

export default function ButtonCont({ clickHandler }) {
  const grp1 = ['AC', '+/-', '%', '÷'];
  const grp2 = ['7', '8', '9', 'X'];
  const grp3 = ['4', '5', '6', '-'];
  const grp4 = ['1', '2', '3', '+'];
  const grp5 = ['0', '.', '='];

  const grps = [grp1, grp2, grp3, grp4, grp5];
  const opsKeys = ['÷', 'X', '-', '+', '='];

  const handleClick = btnName => clickHandler(btnName);

  return (
    <div className="btnPanel">
      {grps.map(grp => (
        <div className="grp" key={grp}>
          {grp.map(char => {
            if (opsKeys.includes(char)) {
              return <Button key={char} btnName={`${char}`} clickHandler={handleClick} />;
            } if (char === '0') {
              return <Button key={char} btnName={`${char}`} wide color clickHandler={handleClick} />;
            }
            return <Button key={char} btnName={`${char}`} color clickHandler={handleClick} />;
          })}
        </div>
      ))}
    </div>
  );
}

ButtonCont.defaultProps = {
  clickHandler: null,
};

ButtonCont.propTypes = {
  clickHandler: PropTypes.func,
};
