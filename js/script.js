let sortArray = (array) => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
      let temp;
      for (let k = i + 1; k < len; k++) {
        if (array[k] < array[i]) {
          temp = array[i];
          array[i] = array[k];
          array[k] = temp;
        }
      }
    }
    return array;
  };
  
  console.log(sortArray([5, 2, 7, 1, 9])); 