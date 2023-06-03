let students = []
let studentsID
let tbody = document.querySelector("tbody")
let window = document.querySelector(".modal")
let closes = document.querySelectorAll(".close")
let modal_bg = document.querySelector(".modal_bg")
let newData
let base_url = "http://localhost:6969"
const getAllData = async () => {
    try {
        const res = await fetch(base_url + "/todos")
        if (res.status === 200 || res.status === 201) {
            const data = await res.json()
            reload(data, tbody)
        }
    } catch (e) {
        alert("error " + e)
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

        student.birth = new Date().getFullYear() - parseFloat(student.age)

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

        student.birth = new Date().getFullYear() - parseFloat(student.age)

        // let finded = students.find(el => el.id === studentsID)
        // students.forEach(item => {
        //     if (item.id === studentsID) {
        //         Object.assign(item, student)
        //     }
        // })
        // reload(students, tbody)
        try {
            const res = await fetch(base_url + "/todos/" + studentsID, {
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

function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let delet = document.createElement("button")
        let edit = document.createElement("button")
        let btns = document.createElement("td")
        let tr = document.createElement("tr")
        for (let data of [(arr.indexOf(item) + 1), item.name, item.birth]) {
            let td = document.createElement('td')
            td.innerHTML = data
            tr.append(td)
        }
        edit.classList.add('edit')
        delet.classList.add('trash')
        tr.append(btns)
        btns.prepend(edit, delet)
        place.append(tr)

        delet.onclick = async () => {
            const res = await fetch(base_url + "/todos/" + item.id, {
                method: "delete"
            })
            if (res.status === 200 || res.status === 201) {
                tr.style.opacity = "0"
                tr.style.scale = "0"
                setTimeout(() => {
                    tr.remove()
                }, 500);

            }

        }

        edit.onclick = async () => {
            studentsID = item.id
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
