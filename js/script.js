import arr from "../modules/db"
let icons = ['usd.svg', 'star.svg', 'box.svg']
let cont = document.querySelector(".container")

for (let item of arr) {
    let item_div = document.createElement('div')
    let img_content = document.createElement('img')
    let decr_div = document.createElement('div')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let row = document.createElement('div')
    let btn = document.createElement('button')

    for (let item of icons) {
        let feature = document.createElement('div')
        let img = document.createElement('img')
        let span = document.createElement('span')

        feature.classList.add('feature')
        img.src = "./img/icons/" + item
        span.innerHTML = "100"

        feature.append(img, span)
        row.append(feature)
    }

    item_div.classList.add('item')
    img_content.classList.add('content')
    decr_div.classList.add('description')
    row.classList.add('row')

    h3.innerHTML = item.category
    p.innerHTML = item.description.slice(0, 90).toLowerCase()
    btn.innerHTML = "В избранные"

    img_content.src = item.image

    item_div.append(img_content, decr_div)
    decr_div.append(h3, p, row, btn)
    cont.append(item_div)
}   