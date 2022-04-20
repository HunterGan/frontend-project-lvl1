/* eslint-disable import/prefer-default-export */

export const getRandomNumber = (minRange, maxRange) => {
  const num1 = Math.ceil(minRange);
  const num2 = Math.floor(maxRange);
  return Math.floor(Math.random() * (num2 - num1)) + num1;
};
