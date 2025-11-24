function addAsync(a,b){
    return new Promise(
        () => setTimeout(() => console.log(a+b), 1000)
    )
}


addAsync(10,20);

