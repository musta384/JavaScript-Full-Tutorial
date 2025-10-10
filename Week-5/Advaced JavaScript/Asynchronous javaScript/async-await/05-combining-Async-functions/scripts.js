
// Combining Async Functions

// You can call one async function inside another.

async function fetchUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);  // using template literal
    if (!response.ok) throw new Error('User not found');
    return response.json();
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

async function showUser() {
  const user = await fetchUser(1);
  console.log('Fetched user:', user.name);
}

showUser();

/*
Explanation:

* fetchUser() itself is async and returns a Promise.

* showUser() awaits that Promise. */