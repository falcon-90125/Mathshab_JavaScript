// Получем случайные значения функцией
const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

//Задача со случайными числами
const getTask = () => {
    // Унарный оператор
    const simbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${simbol} ${getRandomNumInRange(0, 100)}`
    //Ответ задачи с помощью функции "eval"
    gameState.rigthAnswer = eval(task)
    return task
}

// Функция изменения состояния
const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

// Скрипт для Play game
const gameElements = document.getElementById('my_game').children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

//Состояния
const gameState = {
    taskInProcess: false,
    rigthAnswer: null
}

//метод onclick
const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        // генерируем задачу и ответ
        // показываю задачу пользователю
        userTask.innerText = getTask()
        // Сделать input видимым
        userAnswer.hidden = false
        // меняю кнопку
        btnGame.innerText = "Проверить!"
        // меняю состояние
        toggleGameState()

    } else {
        // Проверка задачи: сравнить ответ пользователя с правильным
        const isRight = gameState.rigthAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + " = " + gameState.rigthAnswer
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        btnGame.innerText = "Начать заново!"
        toggleGameState()
    }
}

btnGame.addEventListener('click', startGameFunc)

// Обработчик события на INPUT'е, чтобы вводить ответ ENTER'ом
userAnswer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        startGameFunc()
    } else if (e.key === 'Escape') {
        userAnswer.blur()
    }
})

// Обращение к id-шникам и тегам
const choosedElId = document.querySelectorAll('.choosed_block-container > div')
const counterEl = document.querySelector('.choosed_block span')


// Количество выбранных элементов - ООП
const choosedState = {
    countElement: 0,
    setCountValue(value) {
        this.countElement += value
        counterEl.innerText = this.countElement
    }
}

// Проход по элементам блока квадратов
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

const postBlock = document.querySelector('.posts_block-container')
const showPostBTN = document.querySelector('.posts_block button')

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
function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        for (el of data) {
            addPost(el.title, el.body) 
        }
    })
    .catch(err => console.log(err.message))
}

showPostBTN.onclick = getPost