function filterAdults(users){
    const result = users.filter(x => x.age >= 18);
    return result;
}

const users = [
    { name: "A", age: 17},
    { name: "B", age: 18},
    { name: "C", age: 22}
]

console.log(filterAdults(users));