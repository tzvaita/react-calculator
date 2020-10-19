import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  switch (operation) {
    case '-':
      return x.minus(numberTwo);
    case '+':
      return x.plus(numberTwo);
    case '*':
      return x.times(numberTwo);
    case '%':
      return x.mod(numberTwo);
    default:
      return x.times(numberTwo);
  }
};

export default operate;
