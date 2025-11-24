function doShallowCopy(arr){
    return {...arr};
}

function doDeepCopy(arr){
    const deepCopy =  JSON.parse(JSON.stringify(arr));
    return structuredClone(deepCopy);
}

const user1 = {
    name: "Pasang",
    adress: { city: "Kathmandu" }
}


const shallowCopyresult =  doShallowCopy(user1);
shallowCopyresult.name = "Bishal";
shallowCopyresult.adress.city = "Laliptur";

console.log(shallowCopyresult);
console.log(user1);  //name remains unchanged of original array but nested object point to same memory address as copied one. 


const user2 = {
    name: "Japsana",
    adress: { city: "Kathmandu" }
}

const deepCopyresult = doDeepCopy(user2);
deepCopyresult.name = "Bishal";
deepCopyresult.adress.city = "Laliptur";
console.log(deepCopyresult);
console.log(user2); //original array unaffected.






