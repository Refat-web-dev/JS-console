let num
do {
    num = +prompt('Enter a num')
} while (!Number(num))
for (let i = 0; i <= num; i++) {
    for (let k = 0; k < i; k++) {
        document.write('* ')
    }
    document.write('<br>')
}

// let arr = [{
//         id: 1,
//         name: "AZIZs_KABLUK",
//         budget: 500000,
//         tax: 12,
//         expensesPerYear: [{
//                 for: "design",
//                 total: 60000,
//             },
//             {
//                 for: "material",
//                 total: 70000,
//             },
//             {
//                 for: "place",
//                 total: 120000,
//             },
//         ],
//     },
//     {
//         id: 2,
//         name: "KAMERON_CINEMA",
//         budget: 600000,
//         tax: 12,
//         expensesPerYear: [{
//                 for: "camera",
//                 total: 90000,
//             },
//             {
//                 for: "actors",
//                 total: 140000,
//             },
//             {
//                 for: "electricity",
//                 total: 50000,
//             },
//         ],
//     },
//     {
//         id: 3,
//         name: "ISKANDARs_ZOO",
//         budget: 450000,
//         tax: 12,
//         expensesPerYear: [{
//                 for: "animals",
//                 total: 100000,
//             },
//             {
//                 for: "cloune",
//                 total: 15000,
//             },
//             {
//                 for: "food",
//                 total: 70000,
//             },
//         ],
//     },
//     {
//         id: 4,
//         name: "AMINs_SOOOO",
//         budget: 800000,
//         tax: 12,
//         expensesPerYear: [{
//                 for: "house",
//                 total: 200000,
//             },
//             {
//                 for: "cars",
//                 total: 150000,
//             },
//             {
//                 for: "family",
//                 total: 300000,
//             },
//             {
//                 for: "girls",
//                 total: 90000,
//             },
//         ],
//     },
//     {
//         id: 5,
//         name: "new comp",
//         budget: 1000000,
//         tax: 12,
//         expensesPerYear: [{
//                 for: "house",
//                 total: 200000,
//             },
//             {
//                 for: "cars",
//                 total: 150000,
//             },
//             {
//                 for: "family",
//                 total: 300000,
//             },
//             {
//                 for: "girls",
//                 total: 90000,
//             },
//         ],
//     },
// ];

// for (let el of arr) {
//     el.expensesPerMonth = el.expensesPerYear.reduce((a, b) => a + b.total, 0) / el.tax
//     el.monthBudget = el.budget / el.tax
//     let ratio = el.monthBudget - el.expensesPerMonth
//     console.log('Разница ' +
//         Math.round(ratio));
// }
// max = arr.reduce((a, b) => a.taxSum > b.taxSum ? a : b)
// min = arr.reduce((a, b) => a.taxSum < b.taxSum ? a : b)
// console.log(max, min);

// let products = [{
//         name: "milk",
//         type: "milk",
//         price: 12000
//     },
//     {
//         name: "tomato",
//         type: "vegetables",
//         price: 20000
//     },
//     {
//         name: "govyadina",
//         type: "meat",
//         price: 88000
//     },
//     {
//         name: "konyak",
//         type: "alcohol",
//         price: 50000
//     },
//     {
//         name: "tvorog",
//         type: "milk",
//         price: 13000
//     },
//     {
//         name: "potato",
//         type: "vegetables",
//         price: 5000
//     },
//     {
//         name: "kruryatina",
//         type: "meat",
//         price: 30000
//     },
//     {
//         name: "baranina",
//         type: "meat",
//         price: 80000
//     },
//     {
//         name: "kolbasa",
//         type: "meat",
//         price: 60000
//     },
//     {
//         name: "pivo",
//         type: "alcohol",
//         price: 6000
//     },
//     {
//         name: "vine",
//         type: "alcohol",
//         price: 45000
//     },
//     {
//         name: "whiskey",
//         type: "alcohol",
//         price: 100000
//     },
//     {
//         name: "cheese",
//         type: "milk",
//         price: 600000
//     },
//     {
//         name: "yogurt",
//         type: "milk",
//         price: 10000
//     },
// ]
// let sortered = products.sort((a, b) => a.price - b.price)
// console.log(sortered.at(-1), sortered[0]);
// Отфильтровать задачи в переменные а и b
// Сохранить количество в ключе count
// Сохранить сами задачи в массиве-ключе arr
// let arr = [{
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",

//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,

//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]
// let a = {
//     count: 0,
//     arrOne: []
// }

// let b = {
//     count: 0,
//     arrTwo: []
// }
// arr.forEach(el => {
//     let key = el.completed
//     if (key) {
//         a.arrOne.push(el.title)
//         a.count++
//     } else {
//         b.arrTwo.push(el.title)
//         b.count++
//     }
// })
// console.log(a, b);
// refat = {
//         age: 19,
//         hairColor: "Braun",
//         webDev: true,
//         object: {
//             something: 'something ',
//             something: 'something ',
//             something: 'something ',
//             something: 'something ',
//         }
//     },
//     amal = {
//         footSize: 40,
//         eyeColor: "Black",
//         SMM: false,
//         objectTwo: {
//             something: 'something ',
//             something: 'something ',
//             something: 'something ',
//             something: 'something ',
//         }
//     };
// let newCopy = Object.assign({}, refat, amal);
// let allKeyses = Object.keys(newCopy);
// let allValues = Object.values(newCopy);
// let totalData = Object.assign({}, { allKeyses }, { allValues })
// console.log(totalData);
// totalData = [...allKeyses, ...allValues]
// let types = {
//     string: [],
//     number: [],
//     object: [],
//     boolean: [],
// };
// totalData.forEach((item) => types[typeof item].push(item))
// console.log(types);
// if (typeof(types) === "string") {

// }
// let arr = [
//     {
//         name: 'alex',
//         age: 18
//     },
//     {
//         name: 'refat',
//         age: 19
//     },
//     {
//         name: 'amal',
//         age: 14
//     },
//     {
//         name: 'shoxrux',
//         age: 17
//     },
//     {
//         name: 'abdulvosid',
//         age: 16
//     },
//     {
//         name: 'jamshed',
//         age: 18
//     },
//     {
//         name: 'manuchexr',
//         age: 18
//     },
//     {
//         name: 'Faxriddin',
//         age: 24
//     },
//     {
//         name: 'Shakhnoza',
//         age: 15
//     },
//     {
//         name: 'Timur',
//         age: 17
//     },
// ]

// let overEightTeen = arr.filter(over => over.age >= 18)
// let underEightTeen = arr.filter(under => under.age < 18)
// console.log(underEightTeen.sort((a, b) => a.age - b.age));
// console.log(overEightTeen.sort((a, b) => a.age - b.age));
// let carPrices = [9000, 4000, 16000, 15000, 22000, 37000, 70000, 55000, 40000]

// let from = prompt('from')
// let to = prompt('to')

// let filtered = carPrices.filter(price => price >= from & price <= to)

// alert(filtered.length > 0 ? filtered : "error");
// let arr = ['refat', 'amal', 'shakhnoza', 'jamshed', 'shoxrux', 'abdulbosit', 'manucher',]
// let name = prompt(`Какое имя удалить из списка:
// ${arr.join(', ')} ?`).toLowerCase().trim()
// if (arr.indexOf(name) > arr.length - 1 || arr.indexOf(name) < 0) {
//     alert('у нас такого нет')
// } else (
//     arr.splice(arr.indexOf(name), 1)

// )
// alert(`Оставшиеся имена:
// ${arr.join(', ')}`)
// console.log(arr);
// let name = prompt("Как вас зовут?").toLowerCase().trim();
// let money = 10000
// let expenses
// let account = 7777
// name === "alex" || name === "алекс"
//     ? prompt("Номер счета?") == account
//         ? (expenses = prompt("Сколько обналичить?")) <= money
//             ? alert(`Снято ${expenses}
// Осталось ${money - expenses}`)
//             : alert('Недостаточно средств')
//         : alert("Пользователь не найден досвидули")
//     : alert("Пользователь не найден досвидули");
// let user = prompt('Введите имя').toLocaleLowerCase().trim()
// let pocketBalance
// let capacity = 10
// let booked = 8
// let places
// user.charAt(0) == 'a'
//     ? (age = prompt(`Здравствуйте ${user[0].toUpperCase() + user.slice(1)} введите возраст`))
//         ? age >= 20 && age <= 40
//             ? (pocketBalance = prompt('Сколько при себе денег?')) >= 100
//                 ? (places = +prompt('Сколько вас?')) + booked <= capacity
//                     ? alert('Входите')
//                     : alert('Мест недостаточно')
//                 : alert('Недостаточно средств')
//             : alert('Возраст не тот')
//         : alert('Возраст не тот')
//     : alert('Мы дескриминируем людей с именами не на "А"')
// let names = 'refat shakhnoza amal jamshed shoxrux abdulbosit manucher'
// let userName = prompt('Enter a name').toLocaleLowerCase().trim()
// userName == 'refat' || userName == 'shakhnoza' || userName == 'manucher' || userName == 'amal' || userName == 'shoxrux' || userName == 'abdulbosit' || userName == 'jamshed'
//     ? alert(`Hello ${userName[0].toUpperCase() + userName.slice(1)}`)
//     : alert(`${userName[0].toUpperCase() + userName.slice(1)} is not find`)
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
// }
// }
// }
// }