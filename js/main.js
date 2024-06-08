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



