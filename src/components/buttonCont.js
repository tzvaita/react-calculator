import React from 'react';
import Button from './button';

export default function ButtonCont() {
  const grp1 = ['AC', '+/-', '%', '÷'];
  const grp2 = ['7', '8', '9', 'X'];
  const grp3 = ['4', '5', '6', '-'];
  const grp4 = ['1', '2', '3', '+'];
  const grp5 = ['0', '.', '='];

  const grps = [grp1, grp2, grp3, grp4, grp5];
  const opsKeys = ['÷', 'X', '-', '+', '='];

  return (
    <div className="btnPanel">
      {grps.map(grp => (
        <div className="grp" key={grp}>
          {grp.map(char => {
            if (opsKeys.includes(char)) {
              return <Button key={char} btnName={`${char}`} />;
            } if (char === '0') {
              return <Button key={char} btnName={`${char}`} wide color />;
            }
            return <Button key={char} btnName={`${char}`} color />;
          })}
        </div>
      ))}
    </div>
  );
}
