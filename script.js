// Браузерные команды:
// 1.Модальное окно - Выводит какой либо сообщение для исполнения какого-либо действия
// alert('Hello!')
// 2. Модальное окно - Выводит какой либо сообщение для исполнения какого-либо действия с вариантом "Отмена"
// confirm('Вы учите JS?')
// 3. Модальное окно - Выводит какой либо сообщение для исполнения какого-либо действия с вариантом "Отмена" и ответом по умолчанию
// prompt('Как вы учите JS?', 'Упорно!')

// Задать переменную (let во многом схож с var, но в var есть отличия, которые делают его(var) не желательным)
// let a = 5
// Задать постоянную
// const skill = document.getElementById('skill')
// const isLove = document.getElementById('isLove')

// Вывод элемента в консоль
// console.log(span)
// Вывод внутреннего текста элемента - вытаскивает "буквально всё" - весь HTML-код
// console.log(span.innerHTML)

// Вывод внутреннего текста элемента - вытаскивает HTML-тэги - только текст, котрый находится внутри элемента
// console.log(span.innerText)

// const skillText = prompt('Какой язык Вы учите?', 'ХЗ!')
// const isLoveValue = confirm('Любите ли Вы этот язык???', "Да", "Нет")

// console.log(isLoveValue)
// console.log(document.getElementById('example').innerHTML) 

// skill.innerText = skillText
// isLove.innerText = isLoveValue
// console.log(skillText.innerText)

// STRING
// const str1 = 'Greeting'
// const str2 = "Text"
// const str3 = `Revers`

// Обратный слеш для дублирующих кавычек
// const str_1 = 'I\'m OK'
// const str_2 = "Саша сказал: \"Привет\""

// При использовании обратных кавычек, проблемы с кавычками внутри нет
// const str_3 = `I'm say "Hello"`

// Но основная причина применения обратных кавычек - возможность встраивания переменных в строки
// const str_3_1 = `I'm say ${str_1}`

// Так же обратные кавычки поддерживают перенос строки
// const str_3_2 = `I'm
//  say ${str_1}`

// Синтаксис разрыва строки при одинарных и двойных кавычках
// const str_3_3 = `I'm say\n"Hello"`

// typeof - посмотреть тип переменной
// console.log(str1, typeof str1)

// console.log(str1)
// console.log(str2)
// console.log(str3)
// console.log(str_3_1)
// console.log(str_3_2)
// console.log(str_3_3)

//NUMBER - от -(2**53 -1) до +(2**53 -1)
// console.log(999999999999999999)
// > 1000000000000000000

// const num1 = 79*3
// alert(num1)

// Если в матеметическом выражении стоит строка с числом (например так - "5"), то строка преобразуется в число - КРОМЕ СЛОЖЕНИЯ "+"
// const num2 = 79* " 3   "
// console.log(num2)

// const num3 = 79+"3"
// console.log(num3)

// Здесь сначала идёт сложение первых двух чисел, затем сумма склеиватеся в 3-кой
// const num4 = 7 + 9 +"3"
// console.log(num4)

// const rem = 8 * 'a'
// > NaN - Not a Number
// console.log(rem)

//Бесконечность - Infinity - такой результат тоже может быть
// const inf = 17/0
// console.log(inf)

// BIGINT - большое целое число
// const bigint = 103123123123459780542730457n
// console.log(bigint)

//BOOLEAN
//true / false
// > < >= <= >== <== == ===
// const bool_1 = 10 > 5
// console.log(bool_1)
// > true

// const bool_2 = 'a' > 'AAAA'
// console.log(bool_2)
// > true - т.к. 'a'= 61, 'A' = 41   см.https://www.utf8-chartable.de/

// NULL
// let empty = null
// console.log(empty, typeof empty)

// UNDEFINED 
// let box = undefined
// аналогично - без присваивания. т.е. перменная объявлен, но в неё ни чего не поместили
// let box
// console.log(box, typeof box)

//SYMBOL создаются для того, чтобы быть уникальным свойством, даже если в разные SYMBOL'ы
//записно одно и тоже, они не будут равны
// const unic = Symbol('id')
// const unic2 = Symbol('id')
// console.log(unic)
// console.log(unic2)
// console.log(unic == unic2) // >false

//OBJECT
// const obj = {
//     name: 'Sasha',
//     age: 19,
//     isHappy: true
// }

// console.log(obj.name)
// console.log(obj['name']) //аналогичный способ

// obj.job = 'Google'
// console.log(obj)

// const array = ['Аня', 18, false]
// array[3] = 'Facebook'
// console.log(array)
// console.log(array[0])

// // Операторы
// console.log(5 == '5') //сравнение по значению
// // true

// console.log(5 === '5') //сравнение по значению и типу, в большенстве случаев предпочтительнее ==
// // false

// //null
// //https://youtu.be/KHLFTTA4KFc?t=662
// console.log(null == 0)
// //false
// console.log(null <= 0)
// //true
// console.log(null >= 0)
// //true

// console.log(undefined == 0)
// //false - всегда при любом сравнении

// console.log(undefined == null)
// //true

//Превращение строки в число
//https://youtu.be/KHLFTTA4KFc?t=831
// Number('15')
//или
// +'15'

//Превращение числа строку
//https://youtu.be/KHLFTTA4KFc?t=909
// String(15)
// или
// 15 + ""

// //Приведение к булевому значению
// //https://youtu.be/KHLFTTA4KFc?t=935
// Boolean(15)
// //true
// Boolean(-15)
// //true
// Boolean(0)
// //false
// Boolean(null)
// //false
// Boolean('')
// //false
// Boolean(' ')
// //true

// //Отрицание
// //https://youtu.be/KHLFTTA4KFc?t=1109
// !'true'
// //false
// !''
// //true
// !'qwerwe'
// //false
// !!'qwerwe'
// //true

//IF
//https://youtu.be/KHLFTTA4KFc?t=1174
// const go = confirm('Будем ли мы бегать?')
// if (go) {
//     alert('побежали')
// } else {
//     alert('стоим')
// }

// //https://youtu.be/KHLFTTA4KFc?t=1388
// const go = prompt('куда мы побежим?', "Домой")
// if (go) {
//     alert('побежали')
// } else {
//     alert('стоим')
// }

//https://youtu.be/KHLFTTA4KFc?t=1501
// const userName = prompt('Who you are?', "anonim")
// if (userName === 'admin') {
//     alert('Hello boss!')
// } else if (userName === 'anonim') {
//     alert('I don\'t know you...')
// } else if (!userName){ //аналогично userName == null
//         alert('You does not exist')
// } else {
//     alert(`Hi ${userName}`)
// }

// //Оптимизация кода выше
// //https://youtu.be/KHLFTTA4KFc?t=1978
// const userName = prompt('Who you are?', "anonim")
// if (userName === 'admin') {
//     alert('Hello boss!')
// } else if (userName === 'anonim' || !userName) {
//     alert('I don\'t know you...')
// } else {
//     alert(`Hi ${userName}`)
// }

//WHALE
//https://youtu.be/KHLFTTA4KFc?t=2265
// const counts = prompt('До скольки вы хотите досчитать?', 10)
// let i = 0
// while (i <= counts) {
//     console.log(++i)
//     // i = i + 1 //аналог
//     // i += 1 //аналог
//     // i++ //можно так, если прибавляем именно единицу, отсчёт начнётся с 0 (let i = 0)
//     // ++i //можно так, если прибавляем именно единицу, отсчёт начнётся с 1 (let i = 0), т.к. единица прибавиться сразу
// }

// DO-WHALE - Цикл выполняется хотя бы один раз при любых условиях
//https://youtu.be/KHLFTTA4KFc?t=2562
// const counts = prompt('До скольки вы хотите досчитать?', 10)
// let i = 10
// do {
//     console.log(i++)
// } while (i <= counts)

// //FOR
// //https://youtu.be/KHLFTTA4KFc?t=2797
// const arr = []
// for (let i = 1; i <=50; ++i) {
//     arr.push(i) //push добавляет элемент в конец массива
// }
// // console.log(arr)

// // % - остаток от деления
// //Данный цикл for с синтаксисом of работате намного быстрее чем объект
// // https://youtu.be/KHLFTTA4KFc?t=3495
// const newArr = []

// for (elem of arr) {
//     const marker = elem % 3
//     if (!marker) {
//         newArr.push(elem)
//     }
// }
// console.log(newArr)

//Цикл для объектов
//https://youtu.be/KHLFTTA4KFc?t=3791
const obj = {
    name: 'Sasha',
    age: 20,
    sity: 'Voronej'
}

for (key in obj) {
    console.log(key, obj[key])
}