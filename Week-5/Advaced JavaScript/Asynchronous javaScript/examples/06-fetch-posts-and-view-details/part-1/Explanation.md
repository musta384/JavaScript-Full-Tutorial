Function Overview
This function fetches posts from an API, displays a list of them, and adds click handlers to show detailed views when posts are clicked.

Code Breakdown
1. Function Declaration
javascript
async function fetchPosts() {
async keyword enables asynchronous operations using await

This function will handle API calls without blocking the main thread

2. Fetching Posts from API
javascript
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();
Line 1: Makes a GET request to the JSONPlaceholder API (a testing API)

await pauses execution until the HTTP request completes

Line 2: Converts the response body from JSON to a JavaScript array of post objects

3. Creating HTML List from Posts
javascript
const list = posts.slice(0, 5).map(p => `
  <div class="post" data-id="${p.id}">
    <h3>${p.title}</h3>
    <p>${p.body.substring(0, 50)}...</p>
  </div>
`).join("");


Step-by-step breakdown:

posts.slice(0, 5): Takes only the first 5 posts from the array

.map(p => ...): Transforms each post object into an HTML string

Template string creates HTML for each post:

data-id="${p.id}": Stores the post ID as a data attribute for later use

${p.title}: Inserts the post title

${p.body.substring(0, 50)}...: Shows first 50 characters of body with ellipsis

.join(""): Combines all the HTML strings into one single string

4. Displaying the Posts List
javascript
document.getElementById("posts").innerHTML = list;
Finds an HTML element with ID "posts"

Replaces its content with the generated list of posts

5. Adding Click Event Listeners
javascript
document.querySelectorAll(".post").forEach(post => {
  post.addEventListener("click", async () => {
document.querySelectorAll(".post"): Selects all elements with class "post"

.forEach(): Loops through each post element

Adds a click event listener to each post element

The click handler is also an async function

6. Fetching Post Details on Click
javascript
const id = post.dataset.id;
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
const details = await res.json();
What happens when a post is clicked:

post.dataset.id: Gets the post ID from the data-id attribute

Makes another API call to fetch the specific post by ID

Converts the response to a JavaScript object

7. Displaying Post Details
javascript
document.getElementById("details").innerHTML = `
  <div class="details">
    <h3>${details.title}</h3>
    <p>${details.body}</p>
  </div>
`;
Finds an element with ID "details"

Inserts the full post content (title and complete body)

8. Function Execution
javascript
fetchPosts();
Immediately calls the function when the script loads

Complete Data Flow
Initial Load: Fetch all posts → Display first 5 as previews

User Interaction: Click on a post → Fetch that specific post → Show full details

UI Updates: Dynamically update different sections of the page