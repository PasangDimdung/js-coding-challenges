function arrayDestructure(arr){

    const [a = 0, b = 0, c = 0] = arr;
    console.log(a, b, c)
}

arrayDestructure([1,,2]);