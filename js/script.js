let num = document.querySelector('h1')
let plus = document.querySelector('.button-plus')
let minus = document.querySelector('.button-minus')
let random = document.querySelector('.button-random')
let i = 0
plus.onclick = () => {
    i++
    num.innerHTML = i
}
minus.onclick = () => {
    i--
    num.innerHTML = i
}
random.onclick = () => {
    i = num.innerHTML = +(Math.random()).toFixed(3) * 1000
}