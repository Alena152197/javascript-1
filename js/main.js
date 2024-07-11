// задание 1

// let words = 'Рекорд одновременного пребывания 10,262, это было 09.08.2019 в 03:30'

// function countCharacters(input) {
//     let letters = 0;
//     let numbers = 0;
//     let symbols = 0;

//     for (let i = 0; i < input.length; i++) {
//         let char = input.charAt(i);
//         if (char.match(/[а-яА-Я]/)) {
//             letters++;
//         }
//         else if (char.match(/[0-9]/)) {
//             numbers++;
//         }
//         else {
//             symbols++;
//         }
//     }

//     return {
//         letters: letters,
//         numbers: numbers,
//         symbols: symbols
//     }

// }

// let input = 'Hello123';

// let result = countCharacters(words)
// console.log('количество букв:', result.letters);
// console.log('количество чисел:', result.numbers);
// console.log('количество символов:', result.symbols);


// задание 2

// function numToPr(number){
//     const h = ['сто'],
//     t = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
//     o = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
//     p = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
//     let str = number.toString(), out = '';
//     if(str.length == 1) return o[number-1];
//     else if(str.length == 2){
//         if(str[0] == 1) out = p[parseInt(str[1])-1];
//         else out = (t[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + o[parseInt(str[1])-1]):''));
//     }
//     else if(str.length == 3){
//         out = (h[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + t[parseInt(str[1])-1]):'') + ((str[2]!='0')?(' ' + o[parseInt(str[2])-1]):''));
//     }
//     let arr = out.split('');
//     arr[0] = arr[0].toUpperCase();
//     out = arr.join('');
//     return out;
// }

// console.log(numToPr(35));

// задание 3









// задание 3


// (function() {
//     let div = document.getElementsByClassName('block');
//     style = div[0].style;

//     style.color = "red";
//     style.fontSize = "50px";
//     style.textAlign = "center";
//     style.textDecoration = "underline"
    
// })()



// задание 1

// let shopping = [
//     {
//         name: 'banan',
//         count: 3,
//         isBought: false,
//     },
//     {
//         name: 'kivi',
//         count: 5,
//         isBought: true,
//     },
//     {
//         name: 'topt',
//         count: 1,
//         isBought: false,
//     },
//     {
//         name: 'mico',
//         count: 6,
//         isBought: true,
//     },
// ]

// let sortShoppingList = [...shopping];
// sortShoppingList.sort( (a,b) => {
//     if (a.isBought === true && b.isBought === false) {
//         return 1;
//     }
//     if (a.isBought === true && b.isBought === true) {
//         return -1;
//     }
//     return 0;
// })

// sortShoppingList.sort( (a,b) => a.isBought - b.isBought);

// console.log(sortShoppingList);


// let newShoppingList = (name = '', count = 0, arr = []) => {
//     let res = [...arr];
//     if (res.find(item => item.name === name)) {
//         for (let i = 0; i < res.length; i++)
//             if (name === res[i].name) {
//                 res[i].count;
//             }
//     } else {
//         res.push({
//             name,
//             count,
//             isBought: false,
//         })
//     }
//     return res;
// }

// let newList = [...shopping];
// console.log(newList)
// console.log(newShoppingList('kasha', 3, newList))
// console.log(newShoppingList('shocolad', 2, newList))


// let addFlitList = (arr = [], name = '') => {
//     let res = [...arr];
//     res.forEach(product => {
//         if (name === product.name) {
//             product.isBought = true;
//         }
//     });
//     return res;
// }

// console.log(addFlitList(shopping, 'tort'));
// console.log(addFlitList(shopping, 'banana'))


// задание 2

// let shopping = [
//     {
//         name: 'banan',
//         count: 3,
//         price: 80,
//     },
//     {
//         name: 'kivi',
//         count: 5,
//         price: 150,

//     },
//     {
//         name: 'topt',
//         count: 1,
//         price: 500,
//     },
//     {
//         name: 'mico',
//         count: 6,
//         price: 120,
//     },
// ]

// let printRes = (arr = []) => {
//     let res = [...arr];
//     res.forEach(product => {
//         let sum = product.count * product.price;
//         console.log(`${product.count} x ${product.price}\n ${product.name}.....Sum: ${sum}`);
//     });

//     let total = res.map((product) => product.count * product.price)
//         .reduce((sum, current) => sum + current, 0);
//         console.log(`Total: ${total}`);
//         return res;
// }

// printRes(shopping);


// let newProduct = (arr = []) => {
//     let res = [...arr];
//     let maxCost = 0;
//     for (let product of res) {
//         let cost = product.price * product.count
//         if ( cost > maxCost ) {
//             maxCost = cost;
//         }
//     }
//     return maxCost;
// }

// console.log(newProduct(shopping))


// let averageCost = (arr = []) => {
//     let res = [...arr];
//     let sum = 0;

//     for (let product of res) {
//         sum += product.price * product.count;
//     }
//     return (sum / res.length).toFixed(2);
// }

// console.log(averageCost(shopping));


// задание 3

// let academiy = [
//     {
//         name: '110',
//         places: '15',
//         faculty: 'Cybernetics'
//     },
//     {
//         name: '101',
//         places: '17',
//         faculty: 'Matematica'
//     },
//     {
//         name: '105',
//         places: '19',
//         faculty: 'Software'
//     },
//     {
//         name: '120',
//         places: '20',
//         faculty: 'Engineering'
//     },
// ];

// let group = {
//     name: 'SW-2019',
//     places: '25',
//     faculty: 'Engineering',
// };

// let classRoom = (arr = []) => {
//     let academiy = [];
//     for (let i of arr) {
//         academiy.push(i.name);
//     }
//     return `All rooms: ${academiy.join('; ')}.`;
// }
// console.log(classRoom(academiy));

// let showAcademia = (arr = [], faculty = '') => {
//     let facultyRoom = [];
    
//     for (let i of arr) {
//         if (i.faculty.toLowerCase() === faculty.toLocaleLowerCase()) {
//             facultyRoom.push(i.name);
//         }
//     }
//     return `All rooms for "${faculty}" faculty: ${facultyRoom.join('; ')}.`;

// } 

// console.log(showAcademia(academiy, 'Engineering'));

// let arrPlace = (arr = []) => {
//     let arr1 = [...arr];
//     arr1.sort( (a,b) => a.place - b.place );
//     return arr1;
// };

// let arrName = (arr = []) => {
//     let arr2 = [...arr];
//     arr2.sort( (a,b) => a.name - b.name );
//     return arr2
// }

// console.log(arrPlace(academiy))
// console.log(arrName(academiy))


















// //задание 1
// let car = {
//     manufacturer: "Mers",
//     model: "C230",
//     year: 2008,
//     averageSpeed: 70
// };

// function showCarInfo(obj) {
//     let str = "Производитель: " + obj.manufacturer + "\n"
//             + "Модель: " + obj.model + "\n"
//             + "Год выпуска: " + obj.year + " г\n"
//             + "Средняя скорость: " + obj.averageSpeed + " км/ч";
//     alert(str);
// }

// function showTravelTime() {
//     let length = prompt("Введите расстояние (км)", "");
//     let time = computeTravelTime(length)

//     alert("Средняя скорость: " + car.averageSpeed + " км/ч\n"
//             + "Расстояние: " + length + " км\n"
//             + "Время для преодоления: " + time + " ч");
// }

// function computeTravelTime(length) {
//     let t = Math.round(
//             (length / car.averageSpeed) * 100
//     ) / 100;

//     let ost = t % 1;
//     ost = ost * 0.6;

//     t = Math.floor(t) + ost;
//     let breakTime = Math.floor(t / 4);

//     return (t + breakTime).toFixed(2);
// }


// showTravelTime()
// console.log(car)


// задание 2

// let fraction1 = {
//     numerator: 3,
//     denominator: 9,
// }

// let showFraction = () => console.log(
//     `${fraction1.numerator}/${fraction1.denominator}`
// );
// console.log(showFraction(fraction1));

// function makeFraction(numerator, denominator) {
//     return {
//             numerator,
//             denominator,
//     };
// }

// let fraction2 = makeFraction(5, 2);
// console.log(fraction2);

// let commonDenominator = (fraction1 = {}, fraction2 = {}) => {
//     return fraction1.denominator * fraction2.denominator;
// }

// let sumOfFractions = (fraction1 = {}, fraction2 = {}) => {

//     return `${fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator} / ${commonDenominator(fraction1, fraction2)}`;
// }

// console.log(sumOfFractions(fraction1, fraction2));
// console.log(sumOfFractions({ numerator: 2, denominator: 4 }, { numerator: 4, denominator: 5 }));

// let subtractionOfFractions = (fraction1 = {}, fraction2 = {}) => {

//     return `${fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator} / ${commonDenominator(fraction1, fraction2)}`;
// }

// console.log(subtractionOfFractions(fraction1, fraction2));
// console.log(subtractionOfFractions({ numerator: 7, denominator: 9 }, { numerator: 2, denominator: 8 }));

// let multiplicationOfFrations = (fraction1 = {}, fraction2 = {}) => {
//     return `${fraction1.numerator * fraction2.numerator}/${fraction1.denominator * fraction2.denominator}`;
// }

// console.log(multiplicationOfFrations(fraction1, fraction2));

// let divisionOfFrations = (fraction1 = {}, fraction2 = {}) => {
//     return `${fraction1.numerator * fraction2.denominator}/${fraction1.denominator * fraction2.numerator}`;
// }

// console.log(divisionOfFrations(fraction1, fraction2));

// let fractionReduction = (fraction = {}, coefficient) => {
//     return `${fraction.numerator / coefficient}/${fraction.denominator / coefficient}`
// }

// let fraction = makeFraction(5, 7);
// console.log(fractionReduction(fraction, 5));


// задание 3

// let time = {
//     h: 5,
//     m: 46,
//     s: 40,
//     showTime() {
//             console.log(`${this.h}:${this.m}:${this.s}`);
//     },
//     changeSeconds(sec) {
//             let hours = sec / 3600;
//             this.h += Math.floor(hours);
//             let minutes = (sec - Math.floor(hours) * 3600) / 60;
//             this.m += Math.floor(minutes);
//             this.s = sec - (Math.floor(hours) * 3600) - (Math.floor(minutes) * 60);

//             if (this.s >= 60) {
//                     this.s %= 60;
//                     this.m += Math.floor(this.s / 60);
//             }
//             if (this.m >= 60) {
//                     this.m %= 60;
//                     this.h += Math.floor(this.m / 60);
//             }

//             return time;
//     },
//     changeMinutes(min) {
//             let hours = min / 60;
//             this.h += Math.floor(hours);
//             this.m += min - (Math.floor(hours) * 60);

//             if (this.m >= 60) {
//                     this.m %= 60;
//                     this.h += Math.floor(hours / 60);
//             }

//             return time;
//     },
//     changeHours(hour) {
//             this.h = this.h + hour;

//             return time;
//     },
// }

// console.log(time);
// time.showTime();

// let makeTime = (h = 0, m = 0, s = 0) => {
//     (h < 9 && h >= 0) ? (h = `0${h}`) : h;
//     return {
//             h,
//             m,
//             s,
//     };
// }
// let time1 = makeTime(20, 30, 45);
// let time3 = makeTime(3, 47, 62);
// let time4 = makeTime(20, 31, 15);



// let showTime = (time = {}) => {
// return console.log(`${time.h}:${time.m}:${time.s}`);

// }
// showTime(time1);
// showTime(time4);













// задание 1

// let userName = prompt("Как вас зовут?");
// alert(`Привет ${ userName }`);


// задание 2

// let age = prompt('В каком году вы родились?');

// const year = prompt('Какой сейчас год?');

// alert(`В этом году вам будет ` + ( year - age ) + ' лет');



// задание 3

// let age = prompt('Введите длину стороны квадрата:');
// alert(`Периметр квадрата равен: ` + 4 * age);



// задание 4

// let age = prompt('Введите радиус окружности: ');
// let user = Math.PI * age ** 2;
// alert(`Площадь окружности: ` + user);


// задание 5

// let age = prompt("Введите расстояние между городами в км: ");
// let user = prompt("За какое время вы хотите преодолеть это расстояние в часах? ");
// alert(`Вам необходимо двигаться со средней скоростью ` + age / user + ' км/ч');



// задание 6

// const user = prompt('Введите текущий курс доллара по отношению к евро: ');
// let dollar = prompt('Введите количество долларов для обмена: ');
// alert("По текущему курсу при обмене вы получите " + dollar * user + " евро");



// задание 7

// const GB_MB = 1024;
// let flash = prompt('Каков объем вашей флешки в Гб? ')
// let size = Math.trunc(flash * 1000 / GB_MB);
// if (size < 0) {
//     alert(`Ваша флешка перезаполнена, освободите пространство`);
// } else {
//     alert('На флешку поместится ' + size + ' файлов объемом 820 Мб')
// };




// задание 8

// let user = prompt("Cколько у вас в бумажнике денег? ");
// let price = prompt("И почем одна шоколадка? ");
// user = Number(user);
// price = Number(price);
// let sell = Math.trunc(user / price);
// let change = user - price * sell;
// if (sell < 1) {
//     alert('Сегодня вы на нуле. приходите в другой раз');
// } else {
//     alert('Получите свои ' + sell + ' шоколадки, а также сдачу ' + (user - price * sell) + ' рублей ');
// }



// задание 9

// user = prompt('Введите трехзначное число: ');
// let a = Number(user % 10);
// let b = Number((user - a) / 10 % 10);
// let c = Number((user - a - b * 10) / 100);
// alert(`Перевертыш: ` + (a * 100 + b * 10 + c));




// задание 10


// let a = prompt('Введите число для проверки на четность: ');
// a = Number(a);
// alert((parseInt(a) % 2 == 0) ? "четное" : "нечетное");

////////////////////////////////////////////////////////////////////////////

// задание от 10.06

// задание 1

// let a = Math.trunc(
//     +prompt("Задайте целое число, которое будет началом диапазона: ")
// );

// let fi = a;
// let b;
// do {
//     b = Math.trunc(
//         +prompt("Задайте целое число, которое будет концом диапазона: ")
//     );
// } while (a >= b);
// let summa = 0;
// while (a <= b) {
//     summa += a;
//     a++;
// }
// alert(`В диапозоне от ${fi} до ${b} включительно сумма всех чисел составляет: ${summa}.`);


// задание 2

// let n = +prompt("Введите первое число: ");
// let m = +prompt("Введите второе число: ");
// let new_n = Math.abs(n);
// let new_m = Math.abs(m);
// let max_divisor = 1;
// let i = 1;
// while (i <= new_n && i <= new_m) {
//     if (new_n % i == 0 && new_m % i == 0) {
//         max_divisor = i;
//     }
//     i++;
// }

// alert(`У чисел ${n} и ${m} наибольший общий делитель: ${max_divisor}`);



// задание 3

// let number = +prompt(' Введите число');
// let divisor = [];
// for (let i = 2; i < number; i++) {
//     if (number % i == 0 && number !== 1 ) {
//         console.log(i);
//         divisor.push(i);
//     };
// };
// alert(`Все делители числа ${number}: ${divisor}`);



// задание 4

// let n = Math.abs(+prompt("Введите число: "));
// let counter = 0;
// while (n > 0) {
//     n = Math.trunc(n / 10);
//     counter++;
// }

// alert(`В введенном вами числе (в его целой части) ${counter} цифр.`)


// задание 5

// let a = 0;
// positive_number = 0;
// negative_number = 0;
// null_number = 0;
// even_number = 0;
// odd_number = 0;
// for (let i = 0; i < 10; i++) {
//     n = +prompt("Введите число: ");
//     if (n > 0) {
//         positive_number += 1;
//     } else if (n < 0) {
//         negative_number += 1;
//     } else {
//         null_number += 1;
//     }
//     !(n % 2) ? (even_number += 1) : (odd_number += 1);
// };

// alert(`Из 10 введеных вами чисел ${positive_number} положительных, ${negative_number} отрицательных, ${null_number} равных нулю, ${even_number} четных и ${odd_number} нечетных`);



// задание 6

// let a = 0;
// let b = 0;
// let result = true;
// let action_sign = "";
// do {
//     a = +prompt("Введите первое число: ");
//     b = +prompt("Введите второе число: ");
//     action_sign = prompt("Введите знак операции (*, /, + либо -): ");
//     switch (action_sign) {
//         case "+":
//             alert(
//                 `${a} ${action_sign} ${b} = ${a + b}`
//             );
//             break;
//         case "*":
//             alert(
//                 `${a} ${action_sign} ${b} = ${a * b}`
//             );
//             break;
//         case "/":
//             alert(
//                 `${a} ${action_sign} ${b} = ${a / b}`
//             );
//             break;
//         case "-":
//             alert(
//                 `${a} ${action_sign} ${b} = ${a - b}`
//             );
//             break;
//         default:
//             alert(`Вы не ввели знак математической операции!`);
//             break;
//     }
//     result = confirm("Хотите выполнить еще одну математическую операцию?");
// } while (result == true);




// задание 8

// let a = [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//     "Воскресенье",
// ];
// let i = 0;
// let stop = true;
// while (stop == true) {
//     stop = confirm(`${a[i]}. Хотите увидеть следующий день недели?`);
//     i++;
//     if (i > 6) {
//         i = 0;
//     }
// };

// alert("Вывод дней недели окончен!");



// задание 9

// let table = "";
// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         table += `${i} x ${j} = ` + i * j + ", ";
//     }
// };

// console.log(table);

//////////////////////////////////////////////////////////////////////////////////

// следующее домашнее задание

// задание 1


// function Compare(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else if (a == b) {
//         return 0;
//     } else {
//         return "Вы ошиблись при вводе чисел";
//     }
// };

// let a = +prompt("Введите первое число для сравнения ");
// let b = +prompt("Введите второе число для сравнения ");

// alert(Compare(a, b));



// задание 2

// function Factorial(n) {
//     if (n == 1) return 1;
//     return n * Factorial(n - 1);
// };



// let x = 1;
// do {
//     x = Math.trunc(
//         +prompt("Для вычисления факториала введите положительное число от 1: ")
//     );
// } while (x < 1);

// alert(Factorial(x));


// задание 3

// function Splitter(a, b, c) {
//     return a * 100 + b * 10 + c;
// };

// let x = 0;
// let y = 0;
// let z = 0;
// do {
//     x = Math.trunc(Math.abs(+prompt("Введите первое число: ")));
//     y = Math.trunc(Math.abs(+prompt("Введите второе число: ")));
//     z = Math.trunc(Math.abs(+prompt("Введите третье число: ")));
// } while (x > 9 || y > 9 || z > 9);

// alert(Splitter(x, y, z));


// задание 4

// function Square(a, b) {
//     if (arguments.length == 1) {
//         return a * a;
//     }
//     return a * b;
// }

// alert(Square(3, 4));
// alert(Square(3));


// задание 5

// function PerfectNumber(a) {
//     let sum = 0;
//     for (let i = 1; i < a; i++) {
//         if (a % i === 0) {
//             sum += i;
//         }
//     }
//     if (sum === a) {
//         return "ДА! Это совершенное число!";
//     }
//     return "НЕТ! Это не совершенное число!";
// };

// let x = Math.trunc(+prompt("Введите число: "));
// alert(PerfectNumber(x));


// задание 6

// function PerfectNumber(a) {
//     let sum = 0;
//     a = Math.abs(a);
//     for (let i = 1; i < a; i++) {
//         if (a % i == 0) {
//             sum += i;
//         }
//     }
//     if (sum == a) {
//         return 1;
//     }
//     return 0;
// };

// let x = 0;
// let y = 0;
// let result = "";
// let perfectNumber = 0;

// do {
//     x = Math.trunc(+prompt("Введите первое число : "));
//     y = Math.trunc(+prompt("Введите конечное число : "));
// } while (x != +x || y != +y);

// for (let j = x; j <= y; j++) {
//     perfectNumber = PerfectNumber(j);
//     if (perfectNumber == 1) {
//         result += j + ", ";
//     }
// };

// if (result == "") {
//     alert("совершенных чисел нет");
// } else {
//     alert(result);
// };


// задание 7


// function Time(a, b = 0, c = 0) {
//     if (a < 10) {
//         a = "0" + a;
//     }
//     if (b < 10) {
//         b = "0" + b;
//     }
//     if (c < 10) {
//         c = "0" + c;
//     }
//     return `${a} : ${b} : ${c}`;
// };

// let x = 0;
// let y = 0;
// let z = 0;

// do {
//     x = Math.abs(Math.trunc(+prompt("Введите часы от 0 до 23: ")));
//     y = Math.abs(Math.trunc(+prompt("Введите минуты от 0 до 59: ")));
//     c = Math.abs(Math.trunc(+prompt("Введите секунды от 0 до 59: ")));
// } while (x > 23 || y > 59 || z > 59);

// alert("Текущее время: " + Time(x, y, z));



// задание 8

// function TimeToSeconds(a, b = 0, c = 0) {
//     let timeToSeconds = a * 3600 + b * 60 + c;
//     return timeToSeconds;
// }

// let x = 0;
// let y = 0;
// let z = 0;

// do {
//     x = Math.abs(Math.trunc(+prompt("Введите часы от 0 до 23: ")));
//     y = Math.abs(Math.trunc(+prompt("Введите минуты от 0 до 59: ")));
//     z = Math.abs(Math.trunc(+prompt("Введите секунды от 0 до 59: ")));
// } while (x > 23 || y > 59 || z > 59);

// alert(
//     "От начала суток это составляет " + TimeToSeconds(x, y, z) + " секунд."
// );

