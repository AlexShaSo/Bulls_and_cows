import readlineSync from 'readline-sync';
import { greetingsPlayer, chooseOpponent } from 'greetings.js';

let roundsPlayed = 0;
const maxRounds = 8;
const checkMaxRounds = () => {
  if (roundsPlayed >= maxRounds) {
    console.log('Плохой пастух. Стадо разбежалось.');
    process.exit(); 
  }
}

// Раунды
checkMaxRounds();
roundsPlayed++;
// Генерация случайного набора чисел компом
const generateComputerCombination = () => {
  let combination = [];
  while (combination.length < 4) {
	const number = Math.floor(Math.random() * 10);
	  if (!combination.includes(number)) {
		combination.push(number);
	  }
	}
	return combination;
  }
  
  // Пользователь выбрал человека
  const playWithOtherUser = () => {
	const otherName = readlineSync.question('Как тебя зовут? ');
	const otherCombination = [];
	for (let i = 0; i < 4; i++) {
	  const number = parseInt(readlineSync.question(`${otherName}, введите число для позиции ${i + 1}: `));
	  otherCombination.push(number);
	}
	checkForRepeats(otherCombination);
  }
  
  //Проверка на повторения в наборе чисел
  const checkForRepeats = (combination) => {
	const uniqueNumbers = new Set(combination);
	if (combination.length !== uniqueNumbers.size) {
	  console.error('Числа не должны повторяться! Выбери другой набор чисел');
	  playWithOtherUser(); // Перезапуск 
	} else {
	  console.log(`Пусть теперь ${name} собирает стадо!`);
	}
  }
  
  // сравнение результата 
  const compareResults = (userCombination, opponentCombination) => {
	let cows = 0;
	let bulls = 0;
	for (let i = 0; i < 4; i++) {
	  if (userCombination[i] === opponentCombination[i]) {
		bulls++;
	  } else if (opponentCombination.includes(userCombination[i])) {
		cows++;
	  }
	}
	console.log(`Коровы: ${cows}, Быки: ${bulls}`);
	if (cows && bulls === 4) {
	  console.log(`Поздравляю, ${name} Копытные в сборе!`);
	}
  }
  
  
  greetPlayer(greetingsPlayer, chooseOpponent);
  const opponentType = chooseOpponent();
  if (opponentType === 'c') {
	const computerCombination = generateComputerCombination();
	console.log('Компьютер спрятал стадо, ищи!');
	compareResults(computerCombination, computerCombination);
  } else if (opponentType === 'o') {
	playWithOtherUser();
  }