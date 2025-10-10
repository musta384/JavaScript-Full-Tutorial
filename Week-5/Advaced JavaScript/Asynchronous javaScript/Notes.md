We will be studying:
* What is API?
* Clients and Servers
* Requests and Responses
* JSON Data
* The URLs we use to access APIs
* Fetching Data
* Handling Errors
* Promises


What is an API?
----------------

API stands for application Programming Interface
Is any tool that helps connec your program with someone else's progrma

API Examples

Getting Data from a server
  * The server hosts "an API" - exposed "endpoints" we can access for    gettig data from the server
  * Note that the server doesnt give us access to everrything, just the thigs they want us to have


Pre-written codes that does cool stuff
  * DOM API (.getElementById, e.g)
  * Array Methods API (.filter, .map)
  * 3rd - party packages  (BoredAPI) (getting data from server)



Requests and Resposes
---------------------

What is a Request?
* Whe device asks for a "resource" (data, image, HTML page, authentication token, etc)
* Requeires a connection to the internet somehow

What is a Response?
* The reply to the request
* Could contain the resource (HTML, JSON data, etc) asked for by client
* Could contain a response saying the client isn't authorized to receive the resource

Quiz
1) What are 3 things your computer (Client) might request from a server?
* JSON array of suggested videos
* Video stream
* HTML page

2) What is the main job of a server
* Receive a request from a client and return a response

3) What would the 3-digit server response code be if the server experience an internal server error?
* 500 Internal Server Error


JSON Review
-----------

# Async/await

## What Is `async/await`?

`async/await` is **syntactic sugar** built on top of **Promises**.
It allows you to write asynchronous code that **looks and behaves like synchronous code**, making it easier to read and debug.

## ⚙️ Basic Syntax

## Example 1: Simple `async` function

```js
async function greet() {
  return "Hello, world!";
}

greet().then(message => console.log(message));
```

**Explanation:**

* When you mark a function as `async`, it **automatically returns a Promise**.
* The value returned (`"Hello, world!"`) is **wrapped inside a Promise**.
* You use `.then()` to access the result.

## ⚡ Using `await`

`await` pauses the execution of an async function **until the Promise is resolved or rejected**.

## Example 2: Awaiting a Promise

```js
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
}

async function getData() {
  console.log("Fetching...");
  const data = await fetchData();  // waits here
  console.log(data);
  console.log("Done!");
}

getData();
```

**Output:**

```
Fetching...
(2 seconds later)
Data fetched!
Done!
```

**Explanation:**

* `await fetchData()` waits for the Promise to resolve.
* The function execution **pauses** until `fetchData()` returns `"Data fetched!"`.
* Code after `await` (`console.log(data)`) executes **only after the Promise resolves**.

---

## 🌍 Example 3: Fetching Data from an API

```js
async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();  // parse JSON response
  console.log(user);
}

getUser();
```

**Explanation:**

* `fetch()` returns a Promise that resolves with a **Response object**.
* `await fetch(...)` pauses until the server sends a response.
* `response.json()` also returns a Promise that resolves to the parsed JSON data.
* The `await` keyword ensures we wait for that before proceeding.

---

## 🧱 Example 4: Using Try/Catch for Error Handling

When using async/await, you can handle errors cleanly with `try...catch`.

```js
async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1000"); // invalid ID
    if (!response.ok) throw new Error("User not found!");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchUserData();
```

**Explanation:**

* If the `fetch()` fails (like a 404 or network error), the code inside `catch` executes.
* This is **much cleaner** than `.then().catch()` chains.

---

## 🔁 Example 5: Fetching Multiple Requests in Sequence

```js
async function getMultipleUsers() {
  const res1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user1 = await res1.json();
  
  const res2 = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const user2 = await res2.json();
  
  console.log(user1.name, "and", user2.name);
}

getMultipleUsers();
```

**Explanation:**

* Each `await` waits for the previous one to finish before moving to the next.
* This is **sequential** fetching.

---

## 🚀 Example 6: Fetching Multiple Requests in Parallel (Using `Promise.all`)

Sequential fetching can be slow. Let’s make them run **in parallel**.

```js
async function getUsersInParallel() {
  const [res1, res2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/users/2")
  ]);

  const [user1, user2] = await Promise.all([
    res1.json(),
    res2.json()
  ]);

  console.log("Users:", user1.name, "and", user2.name);
}

getUsersInParallel();
```

**Explanation:**

* `Promise.all()` runs both `fetch()` calls **simultaneously**.
* It waits until **both** Promises resolve.
* This makes your app faster.

---

## 🧠 Example 7: Combining Async Functions

You can call one async function inside another.

```js
async function fetchUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.json();
}

async function showUser() {
  const user = await fetchUser(3);
  console.log("Fetched user:", user.name);
}

showUser();
```

**Explanation:**

* `fetchUser()` itself is async and returns a Promise.
* `showUser()` awaits that Promise.

---

## ⏳ Example 8: Using async/await with Simulated Delays

```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function processSteps() {
  console.log("Step 1: Start");
  await delay(1000);
  
  console.log("Step 2: Processing...");
  await delay(2000);
  
  console.log("Step 3: Done!");
}

processSteps();
```

**Explanation:**

* `delay()` simulates an async operation (like waiting for server response).
* Each `await` pauses for the given milliseconds.

---

## 🧩 Example 9: Using `await` inside Loops (Sequentially)

```js
async function fetchUsersSequentially() {
  for (let id = 1; id <= 3; id++) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    console.log(user.name);
  }
}

fetchUsersSequentially();
```

**Explanation:**

* Each iteration **waits** for the previous one to finish before starting the next.
* This is useful when **order matters**.

---

## ⚡ Example 10: Using `await` in Loops (Parallel Version)

```js
async function fetchUsersInParallel() {
  const promises = [];

  for (let id = 1; id <= 3; id++) {
    promises.push(fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json()));
  }

  const users = await Promise.all(promises);
  console.log(users.map(u => u.name));
}

fetchUsersInParallel();
```

**Explanation:**

* Instead of awaiting inside the loop, we store all Promises first.
* `Promise.all()` runs them in parallel, making it much faster.

---

## 💥 Example 11: Handling Rejections in Parallel Requests

```js
async function safeFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Request failed!");
    return await res.json();
  } catch (err) {
    console.error("Error fetching:", err.message);
    return null; // return safe value
  }
}

async function main() {
  const results = await Promise.all([
    safeFetch("https://jsonplaceholder.typicode.com/users/1"),
    safeFetch("https://invalid-url.example.com")
  ]);

  console.log("Results:", results);
}

main();
```

**Explanation:**

* Each fetch is protected with `try/catch`.
* If one fails, it logs the error and returns `null`, so the program keeps running.

---




