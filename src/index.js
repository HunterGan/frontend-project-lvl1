import readlineSync from 'readline-sync';

const startGame = (gameQuestion, initialData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(gameQuestion);
  for (let i = 0; i < 3; i += 1) {
    const [rightAnswer, gameExpression] = initialData();
    console.log(`Question: ${gameExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
