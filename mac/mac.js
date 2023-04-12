let openBtn = document.querySelector('.brg_open')
let closeBtn = document.querySelector('.brg_close')
let burger = document.querySelector('.burger')
let bgrbg = document.querySelector('.bgr_bg')
let spaceGrey = document.querySelector('.space_grey')
let white = document.querySelector('.white')
let priceView = document.querySelector('b')
let addPrices = document.querySelectorAll('.space_item')
let orgPrice = +priceView.innerHTML
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
openBtn.onclick = () => {
    burger.style.right = '0'
    openBtn.style.display = 'none'
    bgrbg.style.display = "block"
    setTimeout(() => {
        bgrbg.style.opacity = "1"
    }, 200);
}
closeBtn.onclick = () => {
    burger.style.right = '-20%'
    bgrbg.style.opacity = "0"
    setTimeout(() => {
        bgrbg.style.display = "none"
        openBtn.style.display = 'flex'
    }, 200);
}
btns.forEach(btn => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-img')
        wrapText.innerText = `${macTexts[key]}`
        wrapImg.style.backgroundImage = `url(${macImages[key]})`
        btn.classList.add('btn_active')
    }
    btn.onmouseleave = () => {
        btn.classList.remove('btn_active')
    }
    
});
addPrices.forEach(btn => {
    btn.onclick = () => {
        btn.style.border = '2px solid #007FFF'
    }
    btn.onmouseleave = () => {
        btn.style.border = '2px solid #CFE7FF'
    }
})