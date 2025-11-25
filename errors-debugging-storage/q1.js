function validateAge(age){
    if(age<0){
        throw new InvalidAgeError("Please enter valid age.");
    }
}

class InvalidAgeError extends Error {
    constructor(msg)
    { 
        super(msg); 
        this.name = "InvalidAgeError" 
    }
}


validateAge(-1);