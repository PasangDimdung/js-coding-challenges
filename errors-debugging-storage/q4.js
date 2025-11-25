function setLocalStorage(key, value){
    localStorage.setItem(key, value);
}


function setSessionStorage(key, value){
    sessionStorage.setItem(key, value);
}


const user = { theme: "dark", logged: true };


setLocalStorage("localexample", JSON.stringify(user));
setSessionStorage("sessionexample", JSON.stringify(user));