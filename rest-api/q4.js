function getPostsAndComments(){

    const postPromise = fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => res.json());

    const commentPromise = fetch("https://jsonplaceholder.typicode.com/comments/1")
        .then(res => res.json());

    Promise
    .all([postPromise, commentPromise])
    .then(([postResult, commentResult]) => {
        console.log({posts: postResult, comments: commentResult});
    });
}


getPostsAndComments();