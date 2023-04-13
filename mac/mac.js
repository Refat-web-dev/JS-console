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
        burger.style.right = '-20%'
        bgrbg.style.opacity = "0"
        setTimeout(() => {
            bgrbg.style.display = "none"
            openBtn.style.display = 'flex'
        }, 200);
    }
})
const btns = document.querySelectorAll('.btns')
const wrapImg = document.querySelector('.wrap_img')
const wrapText = document.querySelector('.wrap_text')
const macImages = {
    'White': "../img/silver.png",
    'Space Grey': "../img/spacegray.png"
}
const macTexts = {
    'White': "White",
    'Space Grey': "Space Grey"
}
btns.forEach(btn => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-img')
        wrapText.innerText = `${macTexts[key]}`
        wrapImg.style.backgroundImage = `url(${macImages[key]})`
        if (key === 'Space Grey') {
            btns[1].classList.add("btn_active")
            btns[0].classList.remove("btn_active")
        } else {
            btns[0].classList.add("btn_active")
            btns[1].classList.remove("btn_active")
        }
    }

});
let priceView = document.querySelector('b')
let addPrices = document.querySelectorAll('.space_item')
let orgPrice = priceView.innerHTML
let split = document.querySelector(".split")
addPrices.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.act')?.classList.remove('act')
        btn.classList.add('act')
        let key = +btn.getAttribute('data-price')
        priceView.innerText = [+orgPrice.split(',').join('') + key].join('').split('').join(' ').replace(' ', ',').replaceAll(' ','')
    })
    
})
