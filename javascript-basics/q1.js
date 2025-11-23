
function checkTypes(values){
    return values.map((item) => 
        (typeof item) // here ()-- returns without explicit return keyword
    ); 
}


var values = [1, "a", true, null, undefined]; 

console.log(checkTypes(values));