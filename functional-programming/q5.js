function sumOfSquares(arr){
    
    const result = arr.map(x => x ** 2)
    .filter(x => x % 2 == 0)
    .reduce((acc, cur) => acc + cur, 0)
   
    return result;
}
const input = [1,2,3,4,5,6];
console.log(sumOfSquares(input))