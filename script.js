// Получем случайные значения функцией
// https://youtu.be/A-5mX6OrXXc?t=2016
const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

//Задача со случайными числами
// https://youtu.be/A-5mX6OrXXc?t=2740 - 2я версия, после рефакторинга
const getTask = () => {
    // Унарный оператор
    // https://youtu.be/A-5mX6OrXXc?t=2740
    const simbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${simbol} ${getRandomNumInRange(0, 100)}`
    //Ответ задачи с помощью функции "eval" https://youtu.be/A-5mX6OrXXc?t=2928
    gameState.rigthAnswer = eval(task)
    return task
}

// Функция изменения состояния
// https://youtu.be/A-5mX6OrXXc?t=3838
const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

// Скрипт для Play game
const gameElements = document.getElementById('my_game').children
// https://youtu.be/A-5mX6OrXXc?t=1482
// console.log(gameElements)
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

//Состояния
//https://youtu.be/A-5mX6OrXXc?t=1692
const gameState = {
    taskInProcess: false,
    rigthAnswer: null
}

// https://youtu.be/A-5mX6OrXXc?t=1632
//метод onclick
// https://youtu.be/A-5mX6OrXXc?t=1900
btnGame.onclick = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        // генерируем задачу и ответ
        // const task = getTask()
        // показываю задачу пользователю
        // https://youtu.be/A-5mX6OrXXc?t=3112
        userTask.innerText = getTask()
        // Сделать input видимым https://youtu.be/A-5mX6OrXXc?t=3180
        userAnswer.hidden = false
        // меняю кнопку
        btnGame.innerText = "Проверить!"
        // меняю состояние
        // gameState.taskInProcess = true
        // https://youtu.be/A-5mX6OrXXc?t=3838
        toggleGameState()

    } else {
        // Проверка задачи: сравнить ответ пользователя с правильным
        // https://youtu.be/A-5mX6OrXXc?t=3323
        const isRight = gameState.rigthAnswer == userAnswer.value
        // вывести результат
        // https://youtu.be/A-5mX6OrXXc?t=3483
        userTask.innerText = userTask.innerText + " = " + gameState.rigthAnswer
        // вывести поздравление
        // https://youtu.be/A-5mX6OrXXc?t=3571
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        // поменять кнопку и состояние
        // https://youtu.be/A-5mX6OrXXc?t=3633
        // меняю кнопку
        btnGame.innerText = "Начать заново!"
        // меняю состояние
        // gameState.taskInProcess = false
        // https://youtu.be/A-5mX6OrXXc?t=3838
        toggleGameState()
    }
}
// console.log(document)

// Свойства и методы
// console.dir(document)

// Обращение по классам - Qwery-селекторы
// https://youtu.be/hTlQd-gme8M?t=768

// Qwery-селектор для первого попавшегося
const choosedEl = document.querySelector('.my_game')
// console.log(choosedEl)

// Qwery-селектор для всех подходящих
const choosedElAll = document.querySelectorAll('.my_game')
// console.log(choosedElAll)

// Обращение к id-шникам и тегам
// https://youtu.be/hTlQd-gme8M?t=926
const choosedElId = document.querySelectorAll('#my_game p')
// console.log(choosedElId)
// console.log(choosedElId[0])