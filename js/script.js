let blue = document.querySelector('.blue')
let purple = document.querySelector('.purple')
let yellow = document.querySelector('.yellow')
let midnight = document.querySelector('.midnight')
let starlight = document.querySelector('.starlight')
let red = document.querySelector('.red_prod')
let redCircle = document.querySelector('.one_item')
let colorText = document.querySelector('.color')
let asideImg = document.querySelector('.left_aside')
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

blue.onmouseenter = () => {
    blue.classList.add("border")
    colorText.innerHTML = 'Color - Blue'
}
blue.onmouseleave = () => {
    blue.classList.remove("border")
    colorText.innerHTML = 'Color'
}
purple.onmouseenter = () => {
    purple.classList.add("border")
    colorText.innerHTML = 'Color - Purple'
}
purple.onmouseleave = () => {
    purple.classList.remove("border")
    colorText.innerHTML = 'Color'
}
yellow.onmouseenter = () => {
    yellow.classList.add("border")
    colorText.innerHTML = 'Color - Yellow'
}
yellow.onmouseleave = () => {
    yellow.classList.remove("border")
    colorText.innerHTML = 'Color'
}
midnight.onmouseenter = () => {
    midnight.classList.add("border")
    colorText.innerHTML = 'Color - Midnight'
}
midnight.onmouseleave = () => {
    midnight.classList.remove("border")
    colorText.innerHTML = 'Color'
}
starlight.onmouseenter = () => {
    starlight.classList.add("border")
    colorText.innerHTML = 'Color - Starlight'
}
starlight.onmouseleave = () => {
    starlight.classList.remove("border")
    colorText.innerHTML = 'Color'
}
red.onmouseenter = () => {
    redCircle.classList.add("border")
    colorText.innerHTML = 'Color - (PRODUCT)RED'
}
red.onmouseleave = () => {
    redCircle.classList.remove("border")
    colorText.innerHTML = 'Color'
}
blue.onclick = () => {
    asideImg.innerHTML = '<img src="./img/iphone-bluejpg.jpg" width="100%" alt="">'
}
purple.onclick = () => {
    asideImg.innerHTML = '<img src="./img/iphone-purple.jpg" width="100%" alt="">'
}
yellow.onclick = () => {
    asideImg.innerHTML = '<img src="./img/iphone-yellow.jpg" width="100%" alt="">'
}
midnight.onclick = () => {
    asideImg.innerHTML = '<img src="./img/iphone-midnight.jpg" width="100%" alt="">'
}
starlight.onclick = () => {
    asideImg.innerHTML = '<img src="./img/iphone-starlight.jpg" width="100%" alt="">'
}
red.onclick = () => {
    asideImg.innerHTML = '<img src="./img/iphone-red.jpg" width="100%" alt="">'
}
body.onscroll = () => {
    total++
    if (total > 35) {
        headerFixed.classList.add('view')
    }
    lines.forEach(line =>{
        line.style.display = 'block'
        setTimeout(() => {
            line.style.opacity = '1'
        }, 200);
    })
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
}
modalExit.forEach(btn => {
    btn.onclick = () => {
        modalBg.style.opacity = '0'
        modalWindow.style.opacity = '0'
        setTimeout(() => {
            modalWindow.style.display = 'none'
            modalBg.style.display = 'none'
        }, 200);
        lines.forEach(line =>{
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