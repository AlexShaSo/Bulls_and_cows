import readlineSync from 'readline-sync'
import randomNumbers from './random';

const greeetings = () => {
  const userName = readlineSync.question("Приветствую! Как тебя величать? ")
  	return console.log('Приступим к игре ' + userName+'!')
};

const chooseYourOpponent = () => {
  const opponent = [Компьютер, Игрок]
  const choose = readlineSync.keyInSelect(opponent, 'С кем будешь соревноваться? С компьютером или живым игроком? Нажми цифру для выбора')
  	return console.log(choose +'\n'+ opponent[index]) 
};

const gameLogic = (randomNumbers) => {
	// В качестве подсказок выступают “коровы” (цифра угадана, но её позиция — нет) и 
	// "быки" (когда совпадает и цифра и её позиция). То есть если загадано число “1234”,
	// а вы называете “6531”, то результатом будет 1 корова (цифра “1”) и 1 бык (цифра “3”).
	if (randomNumbers[index] === randomNumbers[index]) {
		
	}
}