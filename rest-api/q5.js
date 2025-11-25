function getPostsAndComments(){

    const page1Promise = fetch("https://jsonplaceholder.typicode.com/posts?_page=1")
        .then(res => res.json());

    const page2Promise = fetch("https://jsonplaceholder.typicode.com/posts?_page=2")
        .then(res => res.json());

    Promise
    .all([page1Promise, page2Promise])
    .then(([page1Result, page2Result]) => {
        console.log([...page1Result, ...page2Result]);
    });
}


getPostsAndComments();