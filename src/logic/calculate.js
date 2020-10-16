const calculate = ({ total, next, operation }, btnName) => {
  const calcObj = {
    total,
    next,
    operation,
  };

  switch (btnName) {
    case 'AC':
      calcObj.total = '';
      calcObj.next = '';
      calcObj.operation = '';
      break;
    case '+/-':
      calcObj.total *= -1;
      calcObj.next *= -1;
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%':
      calcObj.operation = btnName;
      break;
    case '=':
      return total;

    default:
      return calcObj;
  }
  return calcObj;
};

export default calculate;
