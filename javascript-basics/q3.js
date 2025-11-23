function filterTruthy(arr){
    const result = [];
    arr.map((item) => {
        const value = typeof item;
        if (value != "object" || value != undefined)
        {
            if (value === "string" && item != "") return result.push(item)
            if (value === "number" && item != 0) return result.push(item)
        }
    });    
    return result; 
}

var values = [null, undefined, 0, 1, "", "0", -1, 5, "Pasang"];

console.log(filterTruthy(values));

