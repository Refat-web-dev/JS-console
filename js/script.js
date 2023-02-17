let month = prompt('Enter date')
if (month >= 1 && month <= 10) {
    console.log("First decade");
} else if (month >= 11 && month <= 20) {
    console.log("Second decade");
} else if (month >= 21 && month <= 31) {
    console.log("Third decade");
} else {
    console.log("Incorrect");
}
let num = prompt('Enter number')
if (num >= 3 && num <= 5) {
    console.log("Spring");
} else if (num >= 6 && num <= 8) {
    console.log("Summer");
} else if (num >= 9 && num <= 11) {
    console.log("Autumn");
} else if (num >= 1 && num <= 2 || num == 12) {
    console.log("Winter");
}
else {
    console.log("Incorrect");
}
let digit = prompt("Enter number")
if (digit % 2 !== 0) {
    console.log('Odd');
} else if (digit % 2 == 0) {
    console.log('Even');
} else {
    console.log('Incorrect');
}
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