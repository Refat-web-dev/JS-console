import products from "../modules/db.js"

let cont = document.querySelector(".container")
let brg_list = document.querySelector(".burger_list")
let total_rate = document.querySelector(".total_rate")

// modules

let icons = ['price', 'rate', 'count']
let includes = document.querySelector('#includes')
let round = document.querySelector(".after")
let cart = []
let selectedProducts = []

let five = document.querySelector('#five')
let all = document.querySelector('#all')
function reload(arr, place) {
    cont.innerHTML = ""
    includes.innerHTML = cart.length
    for (let item of arr) {
        let item_div = document.createElement('div')
        let img_content = document.createElement('img')
        let decr_div = document.createElement('div')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')
        let row = document.createElement('div')
        let btn = document.createElement('button')
        for (let icon of icons) {
            let feature = document.createElement('div')
            let img = document.createElement('img')
            let span = document.createElement('span')

            feature.classList.add('feature')
            img.src = "./img/icons/" + icon + '.svg'
            span.innerHTML = typeof (item[icon]) !== "undefined" ? item[icon] : item.rating[icon]

            feature.append(img, span)
            row.append(feature)
        }

        item_div.classList.add('item')
        img_content.classList.add('content')
        decr_div.classList.add('description')
        row.classList.add('row')

        h3.innerHTML = item.category.toUpperCase()
        p.innerHTML = item.description[0].toUpperCase() + item.description.slice(1, 90).toLowerCase()
        btn.innerHTML = "В избранные"

        img_content.src = item.image

        item_div.append(img_content, decr_div)
        decr_div.append(h3, p, row, btn)
        place.append(item_div)


        btn.onclick = () => {
            brg_list.innerHTML = ""

            if (cart.includes(item)) {
                cart = cart.filter(id => id !== item)
                btn.style.background = "#FFF"
                btn.style.color = "#000"
                btn.innerHTML = "В избранные"
            } else {
                btn.style.background = "#1F86FF"
                btn.style.color = "#FFF"
                btn.innerHTML = "Добавлено"
                cart.push(item)
            }
            includes.innerHTML = cart.length

            if (cart.length >= 1) {
                round.style.opacity = '1'
                round.style.scale = '1'
            }
            else {
                round.style.opacity = '0'
                round.style.scale = '0'
            }
            reloadTwo(cart, brg_list)
        }
    }
}

five.onclick = () => {
    reload(products.slice(0, 5), cont)

}

all.onclick = () => {
    reload(products, cont)

}
// burger

let openBtn = document.querySelector('.brg_open')
let burger = document.querySelector('.burger')

let bgrbg = document.querySelector('.bgr_bg')
openBtn.onclick = () => {
    burger.style.right = '0'
    openBtn.style.display = 'none'
    bgrbg.style.display = "block"
    setTimeout(() => {
        bgrbg.style.opacity = "1"
    }, 200);
}
let closeBtn = document.querySelectorAll('.brg_close')
closeBtn.forEach(btn => {
    btn.onclick = () => {
        burger.style.right = '-30%'
        bgrbg.style.opacity = "0"
        setTimeout(() => {
            bgrbg.style.display = "none"
            openBtn.style.display = 'flex'
        }, 200);
    }
})

// burger module

function reloadTwo(arr, place) {
    let total = 0

    for (let el of arr) {
        let brg_item = document.createElement('div')
        let item_left = document.createElement('div')
        let left_img = document.createElement('img')
        let item_center = document.createElement('div')
        let item_descr = document.createElement('h3')
        let center_row = document.createElement('div')
        let saler = document.createElement('p')
        let counter = document.createElement('div')
        let minus = document.createElement('button')
        let item_span = document.createElement('span')
        let plus = document.createElement('button')
        let one = document.createElement('p')
        let one_count = document.createElement('span')
        let item_right = document.createElement('div')
        let delet = document.createElement('button')
        let total_price = document.createElement('span')


        brg_item.classList.add('burger_item')
        item_left.classList.add('item_left')
        item_left.classList.add('item_left')
        item_center.classList.add('item_center')
        center_row.classList.add('center_row')
        saler.classList.add('saler')
        counter.classList.add('counter')
        minus.classList.add('minus')
        plus.classList.add('plus')
        item_right.classList.add('item_right')
        delet.classList.add('delete')
        total_price.classList.add('total_price')

        left_img.src = el.image
        left_img.alt = "invalid img"
        item_descr.innerHTML = el.category
        saler.innerHTML = el.title.slice(0, 20)
        item_span.innerHTML = "1"
        one.innerHTML = " сум/ед."
        one_count.id = "onlyOne"
        one_count.innerHTML = el.price
        one.style.display = 'none'
        delet.innerHTML = "Удалить"
        total_price.innerHTML = el.price *= item_span.innerHTML
        brg_item.append(item_left, item_center, item_right)
        item_left.append(left_img)
        item_center.append(item_descr, center_row)
        center_row.append(saler, counter)
        counter.append(minus, item_span, plus, one)
        one.prepend(one_count)
        item_right.append(delet, total_price)
        place.append(brg_item)


        total += el.price * item_span.innerHTML
        plus.onclick = () => {
            total += el.price * item_span.innerHTML
            item_span.innerHTML++
            total_price.innerHTML = one_count.innerHTML * item_span.innerHTML
            one.style.display = 'block'
            total_rate.innerHTML = total.toFixed(2)
        }
        
        minus.onclick = () => {
            total -= el.price * item_span.innerHTML
            if (item_span.innerHTML < 1) {
                item_span.innerHTML++
                one.style.display = 'none'
            }
            item_span.innerHTML--
            total_price.innerHTML = one_count.innerHTML * item_span.innerHTML
            one.style.display = 'block'
            total_rate.innerHTML = total.toFixed(2)
        }

        delet.onclick = () => {
            delet.parentNode.parentNode.remove()
            total_rate.innerHTML -= total_price.innerHTML

        }
        total_rate.innerHTML = total.toFixed(2)

    }
}
