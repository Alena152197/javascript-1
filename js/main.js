//Задания от 5.06

//задание 1

age = prompt('Введите ваш возраст')
function whoAreYou(age) {
    if (age > 60) return 'вы пенсионер'
    if (age > 18) return 'вы взрослый'
    if (age > 12) return 'вы подросток'
    return 'Вы ребенок'
}
alert(whoAreYou(age))

//задание 2

(function printSpecialSymbol(a = prompt("Введите число от 0 до 9 для выхода оставьте поле пустым и нажмите OK")) {
    if (a === "") return
    const s = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('][parseInt(a)]
    switch (s) {
        case undefined:
            alert("ОШИБКА ВВОДА")
            break;
            default:
                alert(s)
    }
    printSpecialSymbol()
})()

//задание 3

let str = prompt('Введите число');
str = Array.from(str);
alert(str.some((v,i,a) => str.lastIndexOf(v) != i ) ? 'Есть одинаковые' : 'Нет одинаковых');

//задание 4

let leap_year1 = Math.trunc(
    +prompt("Введите год для проверки на високосность: ")
);
alert(
    !(leap_year1 % 400) || (!(leap_year1 % 4) && leap_year1 % 100)
    ? "Високосный год!"
    : "Невисокосный год!"
)

//задание 5

let palindrom = 0;
do {
    palindrom = Math.abs(
        +prompt("Введите пятиразрядное число для проверки на палиндром: ")
    );
} while (palindrom < 10000 || palindrom > 99999);
let array = [];
for (i = 0; i < 5; i++) {
    array[i] = palindrom % 10;
    palindrom = Math.trunc(palindrom / 10);
}
if (array[0] == array[4] && array[1] == array[3]) {
    alert("Да, это число палиндром!");
} else {
    alert("Нет, введенное число не палиндром!");
}

//задание 6

let summa = Math.abc(+prompt("Введите сумму USD для обмена: "));
const eur = Number(1.08);
const uan = Number(0.15);
const azn = Number(0.59);
let rate = "";
do {
    rate = prompt("На какую валюту вы хотите обменять доллары? Введите EUR для обмена на евро, UAN для обмена на юани, либо AZN для азербайджанских манатов.");
} while (rate != "EUR" && rate != "UAN" && rate != "AZN");
let convert_summa = 0;
if (rate == "EUR") {
    convert_summa = (summa * eur).toFixed(2);
}
if (rate == "UAN") {
    convert_summa = (summa * uan).toFixed(2);
}
if (rate == "AZN") {
    convert_summa = (summa * azn).toFixed(2);
}
alert(`Вы поменяли ${summa} USD на ${convert_summa} ${rate}`);


//задание 7

let check_sale = Math.abs(+prompt("Введите сумму вашей покупки: "));
let discount = Number(0);
if (check_sale >= 200 && check_sale <= 300) {
    discount = 3;
    check_sale = check_sale - (check_sale * discount) / 100;
}
if (check_sale > 300 && check_sale <=500) {
    discount = 5;
    check_sale = check_sale - (check_sale * discount);
}
if (check_sale > 500) {
    discount = 5;
    check_sale = check_sale - (check_sale * discount);
}
alert(`Вы купили товары на сумму ${
    check_sale / (1 - discount / 100)
} рублей. Ваша скидка ${
    discount
}% - ${
    ((check_sale / (1 - discount / 100)) * discount) / 100
} рублей. Всего к оплате ${
    check_sale
} рублей.`);



