"use strict"
//ЗАДАНИЕ 1

//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2 - сначала a увеличивается на единицу (инкремент) и равняется a=1+1=2,
            // затем для с присваивается значение c=a=2;

//пример 2
d = b++;
alert(d); //ответ: 1 - сначала для d присвается значение d=b=1, а затем значение b увеличивается на 1 (b=1+1=2);

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5 - сначала выполняется префиксный инкремент с элементом a (a=++a=1+a=1+2=3),
          //затем математическое сложение с = 2+a = 2+3 =5

//пример 4
d = 2 + b++;
alert(d); //ответ: 4 - сначала выполняется постфиксный инкремент с элементом b (в отличии от префиксной формы он
            // возвращает значение b до увеличения (т.е. b=2), а затем математическое сложение: d=2+2=4 (ответ:4),
            // а затем b=b+1=3

alert(a); //3 - результат вычисления примера 3
alert(b); //3 - результат вычисления примера 4

//ЗАДАНИЕ 2: Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
// (описать последовательность действий).
//РЕШЕНИЕ: Сначала вычисляются скобки (a2 = a2*2= 2*2=4); затем сложение (x=1+4=5).

let a2 = 2;
let x = 1 + (a2 *= 2);
alert(a2); //a2=a2*2=2*2=4
alert(x); //x=1+4=5

//ЗАДАНИЕ 3: Объявить две переменные a и b и задать им целочисленные произвольные начальные
// значения. Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;

let a3 = -10;
let b3 = 5;
if (a3>=0 && b3>=0){
    alert(a3-b3);
} else if (a3<0 && b3<0){
    alert(a3*b3);
} else if ((a3<0 && b3>0) || (a3>0 && b3<0)){
    alert(a3+b3);
}

//ЗАДАНИЕ 4: Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return.

/**
 * Функция sumNumbers складывает 2 числа
 * @param {number} num1 - первое число
 * @param {number} num2 - второе число
 * @returns {number}
 */
function sumNumbers (num1,num2){
    return(num1+num2);
}
console.log((sumNumbers(5,2)));

/**
 * Функция differenceNumbers вычитает из первого числа второе число
 * @param {number} num1 - первое число
 * @param {number} num2 - второе число
 * @returns {number}
 */
function subtractNumbers(num1, num2){
    return(num1-num2);
}
console.log((subtractNumbers(10,5)));

/**
 * Функция divideNumbers делит первое число на второе число
 * @param {number} num1 - первое число
 * @param {number} num2 - второе число
 * @returns {number}
 */
function divideNumbers (num1, num2) {
    return(num1/num2);
}
console.log((divideNumbers(10,5)));

/**
 * Функция multiplyNumbers умножает первое число на второе число
 * @param {number} num1 - первое число
 * @param {number} num2 - второе число
 * @returns {number}
 */
function multiplyNumbers (num1, num2) {
    return(num1*num2);
}
console.log((multiplyNumbers (10,2)));

// ЗАДАНИЕ 5: Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций
// (использовать функции из задания 4) и вернуть полученное значение.

/**
 * Функция
 * @param arg1 - первое число
 * @param arg2 - второе число
 * @param {string} operation - строка с названием операции в кавычках
 */
let arg1 = +prompt("Введите первое число");
let arg2 = +prompt("Введите второе число");
let operation = prompt ("Введите арифметическую операцию");
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "sumNumbers":
            return(arg1 + arg2);
        case "subtractNumbers":
            return (arg1 - arg2);
        case "divideNumbers":
            return (arg1 / arg2);
        case "multiplyNumbers":
            return (arg1 * arg2);
    }
}
console.log((mathOperation(arg1, arg2, operation)));

//ЗАДАНИЕ 6: Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
// положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
// "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
// "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
// "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
// То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
// числа.

/**
 * функция, которая возвращает слово "рубль" в правильном падеже в зависимости от введенного числа
 * @param lastSymbol последний символ введенной строки
 * @returns {string}
 */
function getRoubles(lastSymbol){
    if(+lastSymbol===1){
        return "рубль";
    }
    if(+lastSymbol===2 || +lastSymbol===3 || +lastSymbol===4){
        return "рубля";
    }
    if(+lastSymbol===5 || +lastSymbol===6 || +lastSymbol===7 || +lastSymbol===8 || +lastSymbol===9 || +lastSymbol===0){
        return "рублей";
    }
}

let number = prompt("Введите количество рублей, которое Вы хотите положить на счет в банке");
// результат - строка
if(number ===""){
    alert ("Вы ничего не ввели");
} else
if (number == null){
    alert ("Вы нажали Отмена");
} else{
    let lastSymbol = number.charAt(number.length-1);//Отображение символа на последней позиции введенной строки
    if(isNaN(+lastSymbol)){
        alert ("Вы ввели некорректное значение");
    } else{
        alert("Ваша сумма " + number + " " + getRoubles(lastSymbol) + " успешно зачислена.");
    }
}
