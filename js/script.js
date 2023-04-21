// forms

let forms = document.querySelectorAll('form')

forms.forEach((form) => {
    let inputs = form.querySelectorAll('.needed')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        let allInputsFilled = true

        inputs.forEach((input) => {
            input.style.border = '2px solid #543FD3'

            if (input.value.length === 0) {
                input.style.border = '2px solid #EE0004'
                allInputsFilled = false
            }
        })

        if (allInputsFilled) {
            submit(form)
        } else {
            alert('Please fill in all fields')
        }
    })
})

function submit(form) {
    let user = {}
    let formData = new FormData(form)

    formData.forEach((value, key) => {
        user[key] = value
    })

    form.reset()
    console.log(user)
}