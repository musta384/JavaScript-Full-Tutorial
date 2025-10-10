
// Handling Rejections in Parallel Requests

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

/*
Explanation:

* Each fetch is protected with try/catch.

* If one fails, it logs the error and returns null, 
so the program keeps running. */