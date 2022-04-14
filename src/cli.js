import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = () => {
  const nam = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nam}!`);
};
export default userName;
