let redCircle = document.querySelector('.one_item')
const colorText = document.querySelector('.color')
let body = document.body
let total = 0
let headerFixed = document.querySelector('.header_fixed')
let exit = document.querySelector('.exit')
let item = document.querySelectorAll('.item')
let modalbtn = document.querySelector('.modal')
let modalWindow = document.querySelector('.modal_window')
let modalBg = document.querySelector('.modal_bg')
let modalExit = document.querySelectorAll('.modal_exit')
let first = document.querySelector('.first')
let second = document.querySelector('.second')
let two = document.querySelector('#two')
let lines = document.querySelectorAll('.line')
const colorItems = document.querySelectorAll('.color_item')
const asideImg = document.querySelector('.left_aside')
const imgIphones = {
    'blue': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027942322',
    'purple': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-purple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027938735',
    'yellow': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-yellow?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1676505838319',
    'midnight': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-midnight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027925267',
    'starlight': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027935971',
    'red_prod': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027939728',
}
const colorTexts = {
    blue: 'Color - Blue',
    purple: 'Color - Purple',
    yellow: 'Color - Yellow',
    midnight: 'Color - Midnight',
    starlight: 'Color - Starlight',
    red_prod: 'Color - (PRODUCT)RED',

}
colorItems.forEach(item => {
    item.onclick = () => {
        let key = item.getAttribute('data-color')
        asideImg.style.backgroundImage = `url(${imgIphones[key]})`
    }
    item.onmouseenter = () => {
        let key = item.getAttribute('data-color')
        item.classList.add("border")
        colorText.innerHTML = colorTexts[key]
    }
    item.onmouseleave = () => {
        item.classList.remove("border")
        colorText.innerHTML = 'Color'
    }
})

body.onscroll = () => {
    total++
    if (total > 35) {
        headerFixed.classList.add('view')
    }
}
item.forEach(a => a.onclick = () => {
    a.classList.toggle('item_border')
})
exit.onclick = () => {
    headerFixed.style.display = 'none'
}
modalbtn.onclick = () => {
    modalWindow.style.display = 'block'
    modalBg.style.display = 'block'
    modalWindow.classList.add('modal_act')
    setTimeout(() => {
        modalBg.style.opacity = '1'
        modalWindow.style.opacity = '1'
    }, 200);

    body.onscroll = () => {
        lines.forEach(line => {
            line.style.display = 'block'
            setTimeout(() => {
                line.style.opacity = '1'
            }, 200);
        })
    }
}
modalExit.forEach(btn => {
    btn.onclick = () => {
        modalBg.style.opacity = '0'
        modalWindow.style.opacity = '0'
        setTimeout(() => {
            modalWindow.style.display = 'none'
            modalBg.style.display = 'none'
        }, 200);
        lines.forEach(line => {
            line.style.opacity = '0'
            setTimeout(() => {
                line.style.display = 'none'
            }, 200);
        })
    }
})
first.onclick = () => {
    first.classList.toggle('height_two')
    if (one.style.rotate === '0deg') {
        one.style.rotate = '180deg'
    } else {
        one.style.rotate = '0deg'
    }
}
second.onclick = () => {
    second.classList.toggle('height')
    if (two.style.rotate === '180deg') {
        two.style.rotate = '0deg'
    } else {
        two.style.rotate = '180deg'
    }
}