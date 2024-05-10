const greetingsPlayer = () => {
	const name = readlineSync.question('Здравствуй! Как обращаться к тебе? ');
	console.log(`Приветствую тебя, ${name}!`/n + 'Нужно собрать стадо из быков и коров');
};

const chooseOpponent = () => {
    const opponentChoice = readlineSync.question('С кем хочешь соревноваться? С компьютером(c) или с другим игроком(o)? (c/o) ').toLowerCase();
    switch (opponentChoice) {
      case 'c':
        return 'computer';
      case 'o':
        return 'other';
      default:
        return console.log('Не понял вашего ответа.'), opponentChoice;
    }
  }

export default { greetingsPlayer, chooseOpponent };

// 1. greetingsPlayer Функция с приветствием игрока и выбора оппонента
// 2. chooseOpponent Функция предоставляющая выбор игроку, с кем будет соревноваться

