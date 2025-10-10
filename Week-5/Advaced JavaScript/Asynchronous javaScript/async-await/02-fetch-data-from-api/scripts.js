
// Fetching Data from an API


async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
  const user = await response.json();  // parse JSON response
  console.log(user);
}

getUser();

/*
Explanation:

* fetch() returns a Promise that resolves with a Response object.

* await fetch(...) pauses until the server sends a response.

* response.json() also returns a Promise that resolves to the parsed JSON data.

* The await keyword ensures we wait for that before proceeding. */
