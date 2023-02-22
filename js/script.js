let names = 'refat shakhnoza amal jamshed shoxrux abdulbosit manucher'
let userName = prompt('Enter a name').toLocaleLowerCase().trim()
userName == 'refat' || userName == 'shakhnoza' || userName == 'manucher' || userName == 'amal' || userName == 'shoxrux' || userName == 'abdulbosit' || userName == 'jamshed'
    ? alert(`Hello ${userName[0].toUpperCase() + userName.slice(1)}`)
    : alert(`${userName[0].toUpperCase() + userName.slice(1)} is not find`)
// let name = prompt('Как вас зовут?').toLowerCase().trim()
// if (name === "alex") {
//     console.log(name);
//     let account = prompt('Номер счета?')
//     if (account == 7777) {
//         console.log(account);
//         let money = 10000
//         let expenses = prompt('Сколько обналичить?')
//         if (money >= expenses) {
//             console.log(`Снято ${expenses}`, `
// Осталось ${money - expenses}`);
//         }
//         else {
//             console.log('Недостаточно средств');
//         }
//     } else {
//         console.log('Пользователь не найден досвсидули');
//     }

// } else {
//     console.log('Пользователь не найден досвсидули');
// }
// let user = prompt('Введите имя').toLocaleLowerCase().trim()
// if (user.charAt(0) == 'a') {
//     console.log(user);
//     let age = prompt('Введите возраст')
//     if (age >= 20 && age <= 40) {
//         console.log(age);
//         let pocketBalance = prompt('Сколько при себе денег?')
//         if (pocketBalance >= 100) {
//             console.log(pocketBalance);
//             let capacity = 10
//             let booked = 8
//             let freePlaces = +prompt('Сколько вас?')
//             if (freePlaces + booked <= capacity) {
//                 console.log('Входите');
//             } else (
//                 console.log('Мест недостаточно')
//             )
//         }
//         else {
//             console.log('Недостаточно средств');
//         }
//     } if(isNaN(Number(age))){
//         console.log('Введите число!');
//     }
//     else {
//         console.log('Возраст не тот');
//     }
// } else {
//     console.log('Мы дескриминируем людей с именами не на "А"');
// }
// let month = prompt('Enter a date')
// if (month >= 1 && month <= 10) {
//     console.log("First decade");
// } else if (month >= 11 && month <= 20) {
//     console.log("Second decade");
// } else if (month >= 21 && month <= 31) {
//     console.log("Third decade");
// } else {
//     console.log("Incorrect");
// }
// let num = prompt('Enter a number')
// if (num >= 3 && num <= 5) {
//     console.log("Spring");
// } else if (num >= 6 && num <= 8) {
//     console.log("Summer");
// } else if (num >= 9 && num <= 11) {
//     console.log("Autumn");
// } else if (num >= 1 && num <= 2 || num == 12) {
//     console.log("Winter");
// }
// else {
//     console.log("Incorrect");
// }
// let digit = prompt("Enter a number")
// if (digit % 2 !== 0 && typeof(digit) !== 'string') {
//     console.log('Odd');
// } else if (digit % 2 == 0) {
//     console.log('Even');
// } else{
//     console.log('Incorrect');
// }
// let digit = prompt("Enter a number");
// if (isNaN(digit)) {
//   console.log("Incorrect");
// } else if (digit % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }
// let count = 1;
// do {
//     console.log(count);
//     count++;
// } while (count < 6);
// let figure = 1;
// while (figure < 6) {
//     console.log(figure);
//     figure++;
// }
// let digit = 1;
// for (; digit < 6; digit++) {
//     if (digit == 4) continue;
//     console.log(digit);
// }
// console.log(`Итог цикла: ${digit}`);
// let sum = 0
// while (sum < 3) {
//     console.log(sum);
//     sum++;
// }
// console.log(`Число: ${sum}`)
// firstForfor: for (let unit = 0; unit < 2; unit++) {
//     for (let size = 0; size < 3; size++) {
//         if (size == 2) break
//         console.log(size)
//     }

// }