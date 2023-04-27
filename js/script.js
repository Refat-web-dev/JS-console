
let form = document.forms.example_form
let inputs = form.querySelectorAll('.needed input')
let inputes = form.querySelectorAll('input')
let btn = form.querySelector("button")

let all = document.querySelector('#all')
let need = document.querySelector('#need')
let success = document.querySelector('#success')
let error = document.querySelector('#error')

all.innerHTML = inputes.length
need.innerHTML = inputs.length

inputes.forEach(inp => {
    let patterns = {
        name: /^[a-z а-я ,.'-]+$/i,
        mom: /^[a-z а-я ,.'-]+$/i,
        dad: /^[a-z а-я ,.'-]+$/i,
        surname: /^[a-z а-я ,.'-]+$/i,
        email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
        age: /^\S[0-9]{0,2}$/,
        jS: /\w/,
        cSS: /\w/,
        hTML: /\w/,
        about: /\w/,
        car: /\w/
    }
    function validate(regex, field) {
        if (regex.test(field.value)) {
            field.style.border = "1px solid green"
        } else {
            field.style.border = "1px solid red"
        }

        let greenInputs = form.querySelectorAll('.needed input[style="border: 1px solid green;"]')
        let redInputs = form.querySelectorAll('.needed input[style="border: 1px solid red;"]')
        success.innerHTML = `${greenInputs.length}/ ${inputs.length}`
        error.innerHTML = `${redInputs.length}/ ${inputs.length}`
    }
    inp.onkeyup = () => validate(patterns[inp.name], inp)

})


form.onsubmit = (event) => {
    event.preventDefault()
    let allInputsFilled = true
    let blue = 0
    let red = 0
    inputs.forEach(inp => {

        inp.style.border = "1px solid blue"

        let title = inp.previousElementSibling
        let text = inp.nextElementSibling

        if (inp.value.length === 0) {
            btn.style.backgroundColor = 'red'

            inp.style.border = '1px solid red'

            title.style.color = 'red'

            text.style.color = 'red'
            text.innerHTML = "Please fiil the field"

            red++
            if (red === 7) {
                success.innerHTML = `${0}/ ${inputs.length}`
            }
            error.innerHTML = `${red}/ ${inputs.length}`
            allInputsFilled = false
        } else {

            title.style.color = 'blue'

            text.style.color = 'blue'
            text.innerHTML = ""


            blue++
            if (blue === 7) {
                btn.style.backgroundColor = 'blue'
                error.innerHTML = `${0}/ ${inputs.length}`
            }
            success.innerHTML = `${blue}/ ${inputs.length}`
        }
    })

    if (allInputsFilled) {
        submit()
    }
}

function submit() {
    let fm = new FormData(form)
    let user = {}
    fm.forEach((value, key) => {
        user[key] = value
    });
    form.reset()
    console.log(user);
}
