let twentyFive = document.querySelector(".twentyFive")
let fifty = document.querySelector(".fifty")
let other = document.querySelector(".other")
let mansID

let window = document.querySelector(".modal")
let closes = document.querySelectorAll(".close")
let modal_bg = document.querySelector(".modal_bg")
let base_url = "http://localhost:6969"

const getAllData = async () => {
    try {
        const res = await fetch(base_url + "/todos")
        if (res.status === 200 || res.status === 201) {
            const data = await res.json()
            reload(data, fifty)
        }
    } catch (e) {
        alert("error " + e)
        console.log(e);
    }
}

getAllData()

// form

let form = document.forms.dateYear
let inputs = form.querySelectorAll('.row input')
let btn = form.querySelector(".row button")
inputs.forEach(inp => {
    let patterns = {
        name: /^[a-z а-я ,.'-]+$/i,
        age: /^\S[0-9]{0,2}$/
    }
    function validate(regex, field) {
        if (regex.test(field.value)) {
            field.style.border = "2px solid rgb(130, 190, 130)"
        } else {
            field.style.border = "2px solid rgb(255, 90, 90)"
        }
    }
    inp.onkeyup = () => validate(patterns[inp.name], inp)

})


form.onsubmit = (event) => {
    event.preventDefault()
    let allInputsFilled = true
    inputs.forEach(inp => {

        inp.style.border = "2px solid rgb(174, 193, 216)"
        btn.style.border = "2px solid royalblue"
        btn.style.backgroundColor = 'royalblue'

        if (inp.value.length === 0) {
            btn.style.border = "2px solid rgb(255, 90, 90)"
            btn.style.backgroundColor = 'rgb(255, 90, 90)'
            inp.style.border = '2px solid rgb(255, 90, 90)'
            allInputsFilled = false
        }

    })
    if (allInputsFilled) {
        let fm = new FormData(form)
        let student = {
            id: Math.random()
        }
        fm.forEach((value, key) => {
            student[key] = value
        });


        form.reset()
        createNewStudent(student)
    }

}

const createNewStudent = async (body) => {
    try {
        const res = await fetch(base_url + "/todos", {
            method: "post",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res.status === 200 || res.status === 201) {
            getAllData()
        }
    } catch (e) {
        console.log(e);
        alert("error" + e)
    }
}


closes.forEach(cls => {
    cls.onclick = () => {
        window.style.opacity = "0"
        window.style.scale = "0"
        setTimeout(() => {
            window.style.display = "none"
        }, 300);
        modal_bg.style.opacity = "0"
        setTimeout(() => {
            modal_bg.style.display = "none"
        }, 300);
    }
})


let formTwo = document.forms.dataEdit
let inputes = formTwo.querySelectorAll('input')
let bttn = formTwo.querySelector("button")
inputes.forEach(inp => {
    let patterns = {
        name: /^[a-z а-я ,.'-]+$/i,
        age: /^\S[0-9]{0,2}$/
    }
    function validate(regex, field) {
        if (regex.test(field.value)) {
            field.style.border = "2px solid rgb(130, 190, 130)"
        } else {
            field.style.border = "2px solid rgb(255, 90, 90)"
        }
    }
    inp.onkeyup = () => validate(patterns[inp.name], inp)

})


formTwo.onsubmit = async (event) => {
    event.preventDefault()
    let allInputsFilled = true
    inputes.forEach(inp => {

        inp.style.border = "2px solid rgb(174, 193, 216)"
        bttn.style.border = "2px solid royalblue"
        bttn.style.backgroundColor = 'royalblue'

        if (inp.value.length === 0) {
            bttn.style.border = "2px solid rgb(255, 90, 90)"
            bttn.style.backgroundColor = 'rgb(255, 90, 90)'
            inp.style.border = '2px solid rgb(255, 90, 90)'
            allInputsFilled = false
        }

    })
    if (allInputsFilled) {
        let fm = new FormData(formTwo)
        let student = {}
        fm.forEach((value, key) => {
            student[key] = value
        });


        // let finded = students.find(el => el.id === mansID)
        // students.forEach(item => {
        //     if (item.id === mansID) {
        //         Object.assign(item, student)
        //     }
        // })
        // reload(students, tbody)
        try {
            const res = await fetch(base_url + "/todos/" + mansID, {
                method: "PUT",
                body: JSON.stringify({ ...student }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (res.status === 200 || res.status === 201) {
                getAllData()
            }
        } catch (e) {
            console.log(e);
            alert("error" + e)
        }
        formTwo.reset()
        window.style.opacity = "0"
        window.style.scale = "0"
        setTimeout(() => {
            window.style.display = "none"
        }, 300);
        modal_bg.style.opacity = "0"
        setTimeout(() => {
            modal_bg.style.display = "none"
        }, 300);
    }

}

function reload(arr) {
    twentyFive.innerHTML = ""
    fifty.innerHTML = ""
    other.innerHTML = ""

    for (let item of arr) {
        let man = document.createElement("div")
        let name = document.createElement("h3")
        let age = document.createElement("div")
        let age_left = document.createElement("p")
        let age_right = document.createElement("p")
        let delet = document.createElement("div")

        delet.classList.add("delet")
        man.classList.add("man")
        name.classList.add("name")
        age.classList.add("age")

        delet.innerHTML = "X"
        name.innerHTML = item.name
        age_left.innerHTML = "Age"
        age_right.innerHTML = item.age

        man.append(name, age, delet)
        age.append(age_left, age_right)
        if (item.age <= 25) {
            twentyFive.prepend(man)
        }
        if (item.age > 25 && item.age <= 50) {
            fifty.prepend(man)
        }
        if (item.age > 50) {
            other.prepend(man)
        }

        delet.onclick = async () => {
            const res = await fetch(base_url + "/todos/" + item.id, {
                method: "delete"
            })
            if (res.status === 200 || res.status === 201) {
                man.style.opacity = "0"
                man.style.scale = "0"
                man.style.width = "0px"
                setTimeout(() => {
                    man.remove()
                }, 500);

            }

        }

        age.onclick = async () => {
            mansID = item.id
            window.style.display = "block"
            setTimeout(() => {
                window.style.opacity = "1"
                window.style.scale = "1"
            }, 300);
            modal_bg.style.display = "block"
            setTimeout(() => {
                modal_bg.style.opacity = "1"
            }, 300);

        }
    }

}
