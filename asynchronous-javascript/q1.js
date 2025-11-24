function delayedHello(){
    console.log("Hello");
}

setTimeout(()=>{
    delayedHello();
}, 2000)