function createUser(id, name, age){
   const user = {};
   user["user_id"] = id;
   user["user_name"] = name;
   user["user_age"] = age;

   return user;
}

console.log(JSON.stringify(createUser(1, "Pasang", "18")));