async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();   
  return data.map(x => x.name);
}

fetchUsers().then(names => console.log(names));

