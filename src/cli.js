import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = () => {
  const Name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${Name}!`);
};
export default userName;
