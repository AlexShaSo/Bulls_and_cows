const randomNumbers = () => {
    // Генерируем массив с числами от 0 до 9
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Генерируем четыре случайных индекса
    const indices = [];
    for (let i = 0; i < 4; i++) {
        // Генерируем случайное число от 0 до 9
        const index = Math.floor(Math.random()  *  numbers.length);
        // Проверяем, не выбран ли уже этот индекс
        while (indices.includes(index)) {
            index = Math.floor(Math.random()  *  numbers.length);
        }
        indices.push(index);
    }
    // Возвращаем массив с четырьмя случайными числами
    return indices.map(index => numbers[index]);
};
export default randomNumbers;