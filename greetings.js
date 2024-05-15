import readlineSync from 'readline-sync'

export const greetingsPlayer = () => {
    const userName = readlineSync.question('Как тебя зовут? ');
    console.log(`Приветствую тебя, ${userName}!\n Твоя задача собрать стадо из коров и быков.\n Читай описание в readme`);
    return userName;
  }

export const chooseOpponent = () => {
  let attempts = 0;
  while (attempts < 3) {
    const opponentChoice = readlineSync.question('С кем будешь соревноваться? (c - компьютер, o - другой игрок): ').toLowerCase();
    
    switch (opponentChoice) {
      case 'c':
        return 'computer';
      case 'o':
        return 'player';
      default:
        console.log('Простите, не понял вашего запроса.');
        attempts++;
    }
  }
  console.log('Простите, пока мы дискутировали, животные окончательно разбежались. До свиданья.');
  process.exit();
}

export const getOpponentNumber = (userName) => {
  while (true) {
    const opponentName = readlineSync.question('Здравствуй, хитрец! Как тебя зовут? ');
    if (opponentName === userName) {
      console.log('Сам с собой играешь?!)))');
    } else {
      while (true) {
        const numberStr = readlineSync.question('Введи свой набор из 4 разных цифр: ');
        const numbers = numberStr.split('').map(Number);
        if (numbers.length === 4 && new Set(numbers).size === 4) {
          return numbers;
        } else {
          console.log('Числа не должны повторяться! Выбери другой набор чисел.');
        }
      }
    }
  }
};
