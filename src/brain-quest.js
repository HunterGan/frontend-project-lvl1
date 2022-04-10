import readlineSync from 'readline-sync';

const brainQuest = () => {
  console.log('Welcome to the Brain Games!');
  const nam = readlineSync.question('May I have your name? ');
  console.log(`Hi ${nam}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const quest = ['15', '6', '7'];
  console.log(quest);
  let itog = true;
  let num;
  // eslint-disable-next-line no-restricted-syntax
  for (num of quest) {
    console.log('Question: ', num);
    const answr = readlineSync.question('Your answer: ');
    const rightanswr = (num % 2 === 1) ? 'no' : 'yes';
    if (answr === rightanswr) {
      console.log('Correct!');
    } else {
      itog = false;
      console.log(`'${answr}' is wrong answer ;(. Correct answer was '${rightanswr}'`);
      console.log(`Let's try again, ${nam}!`);
      break;
    }
  }
  if (itog === true) {
    console.log(`Congratulations, ${nam}!`);
  }
};
export default brainQuest;
