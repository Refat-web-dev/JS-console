let sortArray = (arr) => {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let k = i + 1; k < len; k++) {
            if (arr[i] > arr[k]) {
                let temp = arr[i]
                arr[i] = arr[k]
                arr[k] = temp
            }

        }
    }
    return arr
}
console.log(sortArray([13,-20, 43, 24, 23, 5, -425, 5443, 2, 341, 21]));