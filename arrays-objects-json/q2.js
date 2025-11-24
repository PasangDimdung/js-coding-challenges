function getCity(user){
    return user.address?.current?.city ?? "Unknown";
}

const user1={
    address: {
        current: { city: "Kathmandu"}
    }
}
const user2 = {
    address: {}
};

console.log(getCity(user1));
console.log(getCity(user2));

