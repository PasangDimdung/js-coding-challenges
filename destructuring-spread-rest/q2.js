function objectDestructure(arr){
    const { firstName: name, address:{city} } = arr;
    console.log(name, city);
}

let input = { firstName: "John", address:{ city: "Kathmandu"} };

objectDestructure(input)