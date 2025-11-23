function filterTruthy(arr){
    const result = [];
    arr.map((item) => {
        const value = typeof item;
        if (value != "object" || value != undefined || value != NaN)
        {
            if (value === "string" && item != "") return result.push(item)
            if (value === "number" && item != 0) return result.push(item)
            if (value === "boolean" && item === true) return result.push(item)
        }
    });    
    return result; 
}

var values = [null, undefined, 0, 1, "", "0", -1, 5, "Pasang", true, false, NaN];

console.log(filterTruthy(values));

