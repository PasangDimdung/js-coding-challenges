function sumAll(...num)
{
    let flattenNumbers = num.flat();

    return flattenNumbers.reduce((accumulator, currentValue) => 
    { 
        return accumulator += currentValue
    }, 0);
}

console.log(sumAll([1,2,3]))