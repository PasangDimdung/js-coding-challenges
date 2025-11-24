function delayedHello(){
    console.log("Hello");
}

setInterval(()=>{
    delayedHello();
}, 2000)