function reverseArray(arr) {
    const result = [];
     let counter = arr.length - 1;

    for (let item of arr) {
       result.push(arr[counter]);
       counter--;
    }

    return result;
}

console.log(reverseArray([1, 2, 3, 4, 5]));