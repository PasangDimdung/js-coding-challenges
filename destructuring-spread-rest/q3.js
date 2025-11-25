function sum(...nums){
    const result = nums.flat().reduce((ac,cur) => ac+cur, 0);
    return result;
}

console.log(sum([10,20,30]))

