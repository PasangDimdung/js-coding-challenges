function getEvenNumbers(array)
{
   const result =  array.filter(x => 
        { 
            debugger; 
            return x % 2 == 0
        }
    );
    return result;
}

console.log(getEvenNumbers([2,3,4,6]))