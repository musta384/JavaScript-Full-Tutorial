// Fetching Data Based on User Input

// Let’s make it interactive — enter a user ID, click a button,
// and fetch that user’s info.

async function getUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) throw new Error('User not found');
    const user = await response.json();

    document.getElementById('output').innerHTML = `
    <h3>${user.name}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>City:</strong> ${user.address.city}</p>
    `
  } catch (error) {
    document.getElementById('output').innerHTML = `<p style="color:red;"> ${error.message}</p>`
  }
}

document.getElementById('btn').addEventListener('click', () => {
  const id = document.getElementById('userId').value;
  if (id) getUser(id);
});

/*
Explanation:

* User inputs an ID.

* Button click triggers the async getUser() function.

* Displays data or an error message depending on the result. */

