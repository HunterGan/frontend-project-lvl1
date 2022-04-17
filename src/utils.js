/* eslint-disable import/prefer-default-export */

export const getRandomNumber = (minOfRange, maxOfRange) => {
  const num1 = Math.ceil(minOfRange);
  const num2 = Math.floor(maxOfRange);
  return Math.floor(Math.random() * (num2 - num1)) + num1;
};

export const checkPrime = (num) => {
  const highRange = Math.sqrt(num);
  for (let i = 2; i < highRange; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const highestDivider = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else number2 -= number1;
  }
  return number1;
};

export const isNumberEven = (num) => (num % 2 === 1);
