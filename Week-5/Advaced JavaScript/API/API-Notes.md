
# API


We’ll go deep into **how APIs work**, **how to use them in JavaScript**, and **how to handle data, errors, and edge cases**.

Let’s build this step by step — just like a developer would in real-world projects.

---

## 🌍 1. What is an API?

**API** = **Application Programming Interface**
It’s a set of rules that allows **two software systems** to communicate.

In web development:

> A **Web API** lets your JavaScript code talk to a **remote server** over the internet.

You use APIs to:

* Get data (weather, news, users, etc.)
* Send data (form submission, authentication)
* Update or delete data (PUT / DELETE requests)
* Connect with external services (payment gateways, AI APIs, etc.)

---

## ⚙️ 2. The Tools: `fetch()` and `axios`

You mainly use:

* **`fetch()`** — built-in in browsers
* **`axios`** — third-party library (more powerful, but optional)

We’ll focus on `fetch()` first because it’s native and promise-based.

---

## 🧩 3. Basic Structure of a Fetch Request

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json()) // convert response to JSON
  .then(data => console.log("✅ Data:", data))
  .catch(error => console.error("❌ Error:", error));
```

### 🔍 What happens here:

1. `fetch(url)` → makes a network request and returns a **Promise**
2. `response.json()` → parses the raw HTTP response into usable JSON
3. `.then()` → handles the resolved data
4. `.catch()` → handles errors like network failures

---

## 🧠 4. Same Example Using `async/await` (Cleaner Syntax)

```js
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

    const data = await response.json();
    console.log("✅ Post:", data);
  } catch (error) {
    console.error("❌ Error fetching post:", error.message);
  }
}

getPost();
```

### ✅ Benefits:

* Easier to read (looks synchronous)
* Easier error handling with `try...catch`

---

## 📦 5. Types of HTTP Methods

| Method        | Purpose                 | Example           |
| ------------- | ----------------------- | ----------------- |
| **GET**       | Retrieve data           | Get list of users |
| **POST**      | Send or create new data | Add new user      |
| **PUT/PATCH** | Update existing data    | Edit user info    |
| **DELETE**    | Remove data             | Delete user       |

Let’s look at all of them 👇

---

## 📬 6. GET Request (Fetching Data)

```js
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log("👤 Users:", users);
}

fetchUsers();
```

---

## ✉️ 7. POST Request (Sending Data)

When you send data, you must include:

* `method: "POST"`
* `headers` with content type
* `body` with stringified JSON

```js
async function createPost() {
  const newPost = {
    title: "Learning API in JS",
    body: "This is an example post",
    userId: 1,
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });

  const data = await response.json();
  console.log("🆕 Post Created:", data);
}

createPost();
```

💡 **Note:** `JSON.stringify()` converts JavaScript objects into text to send over the network.

---

## ✏️ 8. PUT / PATCH Request (Updating Data)

```js
async function updatePost() {
  const updatedData = {
    title: "Updated Title",
    body: "Updated post content",
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT", // or "PATCH"
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });

  const result = await response.json();
  console.log("✏️ Post Updated:", result);
}

updatePost();
```

💡 **PUT** = replace the entire object
💡 **PATCH** = update only specific fields

---

## 🗑️ 9. DELETE Request (Deleting Data)

```js
async function deletePost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });

  if (response.ok) console.log("🗑️ Post deleted successfully!");
  else console.error("❌ Failed to delete post");
}

deletePost();
```

---

## ⚡ 10. Handling API Errors Gracefully

You must always check the **HTTP status code** — even if the network didn’t fail.

```js
async function safeFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Server returned ${res.status}`);
    }
    const data = await res.json();
    console.log("✅ Data:", data);
  } catch (err) {
    console.error("❌ Fetch failed:", err.message);
  }
}

safeFetch("https://jsonplaceholder.typicode.com/unknown-endpoint");
```

---

## 🧠 11. Query Parameters (Dynamic Requests)

Sometimes you need to pass filters or queries to the API.

```js
const userId = 1;
const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

fetch(url)
  .then(res => res.json())
  .then(data => console.log("📋 Posts by user:", data));
```

---

## ⚙️ 12. Chaining Multiple API Calls

Example: Fetch a user → then fetch their posts.

```js
async function getUserAndPosts() {
  try {
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await userRes.json();

    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postRes.json();

    console.log("👤 User:", user.name);
    console.log("📝 Posts:", posts.length);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

getUserAndPosts();
```

---

## 🧩 13. API + UI Integration Example

Here’s a real mini project: Fetch posts and display them in the browser.

```html
<body>
  <h2>📬 Posts</h2>
  <ul id="postList"></ul>

  <script>
    async function loadPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const posts = await response.json();

      const list = document.getElementById("postList");
      posts.forEach(post => {
        const li = document.createElement("li");
        li.textContent = `${post.title}`;
        list.appendChild(li);
      });
    }

    loadPosts();
  </script>
</body>
```

💡 **Real-world:** Similar logic powers dashboards, news feeds, or product lists.

---

## 🧩 14. Summary

| Concept            | Description                         | Example                      |
| ------------------ | ----------------------------------- | ---------------------------- |
| **GET**            | Fetch data                          | `.fetch(url)`                |
| **POST**           | Send data                           | `method: "POST"`             |
| **PUT/PATCH**      | Update data                         | `method: "PUT"`              |
| **DELETE**         | Delete data                         | `method: "DELETE"`           |
| **Error handling** | Use `try...catch` + `response.ok`   | `if (!res.ok) throw Error()` |
| **Chaining calls** | Use `await` for sequential requests | Fetch user → posts           |
| **UI integration** | Display fetched data                | Append to DOM                |

---
