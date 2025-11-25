function getUsersAndPosts(){

    const userPromise = fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json());

    const postPromise = fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json());

    Promise
    .all([userPromise, postPromise])
    .then(([userResult, postResult]) => {
        console.log([...userResult, ...postResult]);
    });
}


getUsersAndPosts();