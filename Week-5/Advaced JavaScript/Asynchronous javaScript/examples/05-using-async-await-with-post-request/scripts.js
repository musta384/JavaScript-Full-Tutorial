
// Using async / await with POST Requests

// Let’s send data to the server using fetch() and await.

async function createPost() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {  // A fake REST API for testing
      method: "POST",                                 // Used for creating new resources
      headers: { "Content-Type": "application/json" }, // Sets content type to JSON
      body: JSON.stringify({ title, body, userId: 1 }) // Converts JavaScript object to JSON string with: title, body, userId: 1(Hardcoded user ID (for demo purposes)
    });

    const result = await response.json();
    document.getElementById('result').innerHTML = `
      <p>Post created with ID: ${result.id}</p>
      <p><strong>Title:</strong> ${result.title}</p>
      <p> ${result.body}</p>
    `;
  } catch (error) {
    document.getElementById('result').innerHTML = `<p style="color:red;">Error: ${error.message}</p>`
  };
}

document.getElementById('send').addEventListener('click', createPost);


/*
Explanation

* Uses fetch() with method POST and a JSON body.

* Awaits both the response and.json() parsing.

* Displays confirmation on success. */