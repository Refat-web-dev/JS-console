import arr from "../modules/db.js"

// modules

let icons = ['price', 'rate', 'count']
let cont = document.querySelector(".container")

let five = document.querySelector('#five')
let all = document.querySelector('#all')

five.onclick = () => {
    cont.innerHTML = ''
    for (let i = 0; i < 5; i++) {
        let item = arr[i]
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
        cont.append(item_div)
    }
    includes()
}

all.onclick = () => {
    cont.innerHTML = ''
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
        cont.append(item_div)
    }
    includes()
}

function includes() {
    let includes = document.querySelector('#includes')
    let btns = cont.querySelectorAll('button')
    let count = []
    btns.forEach(btn => {
        includes.innerHTML = 0

        btn.onclick = () => {
            if (btn.innerHTML === "В избранные") {
                btn.style.background = "#1F86FF"
                btn.style.color = "#FFF"
                btn.innerHTML = "Добавлено"
                count.push(btn)
            } else {
                btn.style.background = "#FFF"
                btn.style.color = "#000"
                btn.innerHTML = "В избранные"
                count.splice(-1, 1)
            }
            includes.innerHTML = count.length
        }
    })

}