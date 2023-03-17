let arr = [0, 1]
let i
do {
    i = +prompt('Enter a num')
} while (!Number(i));
for (let index = 0; index <= i - 1; index++) {
    arr.push(arr.at(-1) + arr.at(-2))
}
document.write(arr.join('<br>'));