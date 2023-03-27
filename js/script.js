let n = +prompt('')

let random = (nums, num) => {
    for (let i = 1; i <= num; i++) {
        Math.random().toFixed() > 0 ? nums.push(Math.ceil(Math.random() * i)) : nums.unshift(Math.ceil(Math.random() * i))
    }
    return nums
}
console.log(random([], n));