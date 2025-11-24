function createCounter(){
    let counter = 0;
    
    return function increment(){
        counter++;
        console.log(counter);
    }
}

get = () => createCounter(); 
const getcounter = get();

getcounter();
getcounter();
getcounter();
getcounter();
getcounter();
getcounter();
getcounter();
getcounter();
getcounter();



