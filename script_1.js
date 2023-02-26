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
// btnGame.onclick = () => { //Строка: Первоначальный вариант
const startGameFunc = () => { //Строка: 2й вариант, см.ниже
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
//К строке 2го варианта, см.функцию выше
// https://youtu.be/hTlQd-gme8M?t=3552
btnGame.addEventListener('click', startGameFunc)

// keydown и keyup – когда пользователь нажимает / отпускает клавишу
// Обработчик события на INPUT'е, чтобы вводить ответ ENTER'ом
// https://youtu.be/hTlQd-gme8M?t=3782
userAnswer.addEventListener('keydown', (e) => {
    // console.log(e)
    if (e.key === 'Enter') {
        startGameFunc()
    } else if (e.key === 'Escape') {
        userAnswer.blur()
    }
})


// console.log(document)

// Свойства и методы
// console.dir(document)

// Обращение по классам - Qwery-селекторы
// https://youtu.be/hTlQd-gme8M?t=768

// Qwery-селектор для первого попавшегося
// const choosedEl = document.querySelector('.my_game')
// console.log(choosedEl)

// Qwery-селектор для всех подходящих
// const choosedElAll = document.querySelectorAll('.my_game')
// console.log(choosedElAll)

// Обращение к id-шникам и тегам
// https://youtu.be/hTlQd-gme8M?t=926
const choosedElId = document.querySelectorAll('.choosed_block-container > div')
// console.log(choosedElId)
// console.log(choosedElId[0])
const counterEl = document.querySelector('.choosed_block span')

// Количество выбранных элементов - функциональный подход
// https://youtu.be/hTlQd-gme8M?t=2586
// const choosedState = {
//     countElement: 0,
// }
// Функция изменения счётчика
// const changeCount = (value) => {
//     choosedState.countElement += value
//     counterEl.innerText = choosedState.countElement
// }

// Количество выбранных элементов - ООП-подход
// https://youtu.be/hTlQd-gme8M?t=3041
const choosedState = {
    countElement: 0,
    setCountValue(value) {
        this.countElement += value
        counterEl.innerText = this.countElement
    }
}

// Проход по элементам блока квадратов - 2й вариант (1й ниже)
// https://youtu.be/hTlQd-gme8M?t=3282
const eventFunc = (e) => {
    if (e.target.className === '') {
        e.target.className = 'choosed_element'
        choosedState.setCountValue(1)
    } else {
        e.target.className = ''
        choosedState.setCountValue(-1)
    }
}

for (let i= 0; i < choosedElId.length; i++) {
    choosedElId[i].addEventListener('click', eventFunc)
}
//Блокирует выбор 3го(2го) элемента
// choosedElId[2].removeEventListener('click', eventFunc)


// // Проход по элементам блока квадратов - 1й вариант
// // https://youtu.be/hTlQd-gme8M?t=1813
// for (let i= 0; i < choosedElId.length; i++) {
//     choosedElId[i].addEventListener('click', (e) => {
//         // console.log("click")
//         //выбрать элемент, т.е. выделить его с помощью класса
//         // choosedElId[i].className = 'choosed_element'
//         // console.log(e)
//         // e.target.className = 'choosed_element'
//         //запустить счётчик
//         // counterEl.innerText = +counterEl.innerText + 1
//         //отмена выбора выбранного элемента
//         // https://youtu.be/hTlQd-gme8M?t=2425
//         if (e.target.className === '') {
//             e.target.className = 'choosed_element'
//             // counterEl.innerText = +counterEl.innerText + 1
//             // changeCount(1)
//             choosedState.setCountValue(1)
//         } else {
//             e.target.className = ''
//             // counterEl.innerText = counterEl.innerText - 1
//             // changeCount(-1)
//             choosedState.setCountValue(-1)
//         }
//     })
// }

const getRandomAnswer = (question) => {

    return (Math.random() > 0.5) ? "YES!" : "No("

}

console.log("Всё будет хорошо?")


// //Таймер
// // https://youtu.be/kZ-xLBjQTJM?t=272
// const timeIsOver = () => {
//     alert('Время вышло!')
// }
// // setTimeout(timeIsOver, 2000)

// //Интервал
// const alarm = setInterval(() =>{
//     let wantToSleep = confirm('Хотите ли Вы спать?')
//     if (wantToSleep) {
//         console.log('tic')
//     } else {
//         clearInterval(alarm)
//     }
// }, 3000)

// Про асинхронное выполнение
// https://youtu.be/kZ-xLBjQTJM?t=801


const postBlock = document.querySelector('.posts_block-container')
// https://youtu.be/kZ-xLBjQTJM?t=3876
const showPostBTN = document.querySelector('.posts_block button')

// https://youtu.be/kZ-xLBjQTJM?t=2139
function addPost(title, body) {
    const postTitle = document.createElement('h3')
    const postBody = document.createElement('span')
    const postItem = document.createElement('p')
    
    postTitle.innerText = title
    postBody.innerText = body

    postItem.append(postTitle, postBody)
    postBlock.append(postItem)
}

// Запросы на сервер / сайт с фейковыми запросами
// https://youtu.be/kZ-xLBjQTJM?t=927
function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
        // console.log(response)
    .then(data => {
        for (el of data) {
            addPost(el.title, el.body) 
        }
        // addPost(data[7].title, data[7].body)
        // console.log(data)
    })
    // https://youtu.be/kZ-xLBjQTJM?t=1571
    .catch(err => console.log(err.message))
}

//Метод POST
// https://youtu.be/kZ-xLBjQTJM?t=3105
// function creatPost(title, body, userId) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             // title: title,
//             // body: body,
//             // userId: userId,
//             title,
//             body,
//             userId,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         },
//     })

//         .then(response => {
//             console.log(response)
//         })
//         .catch(err => console.log(err.message))
// }

// creatPost('title', 'body', 15)

// Про DELITE, PUT, PATCH
// https://youtu.be/kZ-xLBjQTJM?t=3826

showPostBTN.onclick = getPost