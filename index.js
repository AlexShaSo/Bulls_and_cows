import readlineSync from 'readline-sync';
import { greetingsPlayer, chooseOpponent, getOpponentNumber } from './greetings.js';


function generateNumber() {
	const digits = [];
	while (digits.length < 4) {
	  const digit = Math.floor(Math.random() * 10);
	  if (!digits.includes(digit)) {
		digits.push(digit);
	  }
	}
	return digits;
  }

  function compareNumbers(secret, guess) {
	let cows = 0;
	let bulls = 0;
  
	// Сначала считаем быков
	for (let i = 0; i < 4; i++) {
	  if (secret[i] === guess[i]) {
		bulls++;
	  }
	}
  
	// Затем считаем коров, включая быков
	for (let i = 0; i < 4; i++) {
	  for (let j = 0; j < 4; j++) {
		if (secret[i] === guess[j]) { 
		  cows++;
		  break;
		}
	  }
	}
  
	return { cows, bulls };
  }
  
  function playGame(userName, secretNumber) {
	for (let attempts = 0; attempts < 10; attempts++) {
	  const guessStr = readlineSync.question(`Попытка ${attempts + 1}. Введи свой набор из 4 цифр: `);
	  const guess = guessStr.split('').map(Number);
	  const result = compareNumbers(secretNumber, guess);
	  console.log(`Коровы: ${result.cows}, Быки: ${result.bulls}`);
	  if (result.cows === 4 && result.bulls === 4) {
		console.log(`Поздравляю, ${userName}! Копытные в сборе!`);
		return;
	  }
	}
	console.log('Все животные разбежались!\n Будем собирать их снова?  Да(Y)/Нет(N)');
	const playAgain = readlineSync.question('').toUpperCase();
	if (playAgain === 'Y') {
	  startGame();
	} else {
	  console.log('Пока! До следующего раза!');
	}
  }
  
  function startGame() {
	const userName = greetingsPlayer();
	const opponent = chooseOpponent();
	let secretNumber;
  
	switch (opponent) {
	  case 'computer':
		secretNumber = generateNumber();
		break;
	  case 'player':
		console.log(`Пусть теперь ${userName} собирает стадо!`);
		secretNumber = getOpponentNumber(userName);
		break;
	}
  
	playGame(userName, secretNumber);
  }
  
  startGame();