var gobalVar = 200;

function MainFunction(){
    var varVal = 10;
    const constVal = 100;
    let letVal = 1000;

    console.log("Can be accessed from Block scope and function scope inside this function", varVal);
    console.log("Can be accessed from Block scope and function scope inside this function", constVal);
    console.log("Can be accessed from Block scope and function scope inside this function", letVal);

    console.log("Can be accessed from anywhere ",gobalVar); 

    if(true == true){
        var ifScopeVar = 100;
        console.log("Can be accessed from Block scope only.", ifScopeVar); 
        console.log("Can be accessed from Block scope and function scope.", varVal);  
        console.log("Can be accessed from Block scope and function scope.", gobalVar); 
    }

    console.log("Can be accessed from Block scope only.", ifScopeVar); 
}

console.log("Can be accessed from function scope only.", varVal); 
console.log("Can be accessed from function scope only.", constVal);
console.log("Can be accessed from function scope only.", letVal);

console.log("Can be accessed from Block scope and function scope.", gobalVar); 

MainFunction();

