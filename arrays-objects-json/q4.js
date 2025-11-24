function safeParse(jsonStr){
    try {
        let parsedJson = JSON.parse(jsonStr);
        return parsedJson;
    } catch (error) {
        return "Invalid JSON";
    }
}

const validJsonStr = `{"user_id":1,"user_name":"Pasang","user_age":"18"}`;
const invalidJsonStr = `"user_id":1,"user_name":"Pasang","user_age":"18"}`;

console.log(safeParse(validJsonStr))
console.log(safeParse(invalidJsonStr))