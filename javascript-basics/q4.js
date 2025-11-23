function divide(a,b){

    const numerator = Number(a);
    const dinominator = Number(b) || 0;
    
    if(Number.isNaN(numerator) || dinominator === 0){
        return "Invalid";
    }

    return numerator/dinominator;
}

console.log(divide(100,50));
console.log(divide(100,0));
console.log(divide(100,"2"));
console.log(divide(100,"some value"));
console.log(divide(100,""));

console.log(divide("some value",100));
console.log(divide("100",100));
console.log(divide("100","0"));