import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = () => {
  const nam = readlineSync.question('May I have your name? ');
  console.log(`Hi ${nam}!`);
};
export default userName;
