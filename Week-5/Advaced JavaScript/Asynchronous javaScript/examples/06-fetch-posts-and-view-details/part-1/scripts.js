
// Mini Real - World App — Fetch Posts and View Details

// This example combines multiple async operations.

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const list = posts.slice(0, 5).map(post => `  
        <div class="post" data-id="${post.id}">
          <h3>${post.title}</h3>
          <p>${post.body.substring(0, 50)}...</p>
        </div>
      `).join("");

  document.getElementById("posts").innerHTML = list;

  document.querySelectorAll(".post").forEach(post => {
    post.addEventListener("click", async () => {
      const id = post.dataset.id;
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const details = await res.json();
      document.getElementById("details").innerHTML = `
            <div class="details">
              <h3>${details.title}</h3>
              <p>${details.body}</p>
            </div>
          `;
    });
  });
}

fetchPosts();

/*
What’s happening:

* We first fetch 100 posts(and show only 5).

* Each post has a click event listener.

* When clicked, it fetches post details and shows them below.

* All asynchronous logic is managed with clean async / await. */