function arrayDestructure(arr){

    const [a = 0, _, c = 0] = arr;
    return console.log(a,c)
}

arrayDestructure([1,5,2]);
arrayDestructure([1,5,]);