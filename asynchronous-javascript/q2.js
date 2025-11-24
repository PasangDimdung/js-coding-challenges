function intervalCounter(){
    let number = 0;
    return function counter()
    {
        number++;
        console.log(number);
    }
}
const startCounter = intervalCounter();

let intervalId = setInterval(() => startCounter(), 1000);

setTimeout(() => clearInterval(intervalId), 5000);


