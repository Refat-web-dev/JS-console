let min = (...arg) => Math.min(...(arg).flatMap(n => (n instanceof Object) ? Object.values(n) : n))

console.log(min(1, 2))
console.log(min([5, 4], [2, 3]))
console.log(min({ a: 1, b: 2 }))
console.log(min({ a: 1, b: 2 }, { a: 11, b: 12 })) 