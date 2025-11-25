async function createPost(title, body) {
  await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
    userId: 2,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization': "Bearer 12345"
  },
})
.then((response) => response.json())
.then((json) => console.log(json));

}

createPost();

