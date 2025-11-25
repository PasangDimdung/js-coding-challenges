function getAvatar(user){
    return user.profile?.avatar?.url ?? "No Avatar";
}

const input1 = { profile: { avatar: { url : "https://www.google.com"}}  }
const input2 = { profile: { avatar: { }  }};

console.log(getAvatar(input1));
console.log(getAvatar(input2));