let arr = [0, 1]
let i = +prompt('Enter a num')
for (let index = 0; arr.length <= i - 1; index++) {
    arr.push(arr.at(-1) + arr.at(-2))
}
console.log(arr);