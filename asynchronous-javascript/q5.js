async function getUser(id){
    try {
      const result = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json());
      console.log(result);  
    } catch (error) {
        console.error("error", error);
    }
}

getUser(1);