function sortArr(arr) {
    let len = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len; i++) {

            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        len--;
    } while (swapped);

    return arr;
}

console.log(sortArr([5, 2, 7, 1, 9])); 
function bubbleSort(array) {
    let arr = Array.from(array);
    let length = arr.length;
    while (length != 0) {
      for (let i = 1; i < length; i++) {
        if (arr[i] < arr[i - 1]) {
          [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        }
      }
      length -= 1;
    }
    return arr;
  }
console.log(bubbleSort([5, 2, 7, 1, 9])); 
