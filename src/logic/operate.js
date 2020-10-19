import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  switch (operation) {
    case '-':
      return x.minus(y);
    case '+':
      return x.plus(y);
    case '*':
      return x.times(y);
    case '%':
      return x.div(100);
    default:
      return x.times(y);
  }
};

export default operate;
