
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

form.onsubmit = (event) => {
    event.preventDefault()
    let allInputsFilled = true
    blue = 0
    red = 0
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

            btn.style.backgroundColor = 'blue'

            blue++
            if (blue === 7) {
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

}
