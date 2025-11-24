function findById(arr, id){
    return arr.find(x => x.id == id);
}

const input = [{id: 20, name: "Pasang"}, {id: 21, name: "Japsana"}, {id: 22, name: "Bishal"}]
console.log(findById(input, 22));