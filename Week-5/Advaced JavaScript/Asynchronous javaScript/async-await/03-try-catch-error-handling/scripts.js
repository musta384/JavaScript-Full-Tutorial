
// Using Try / Catch for Error Handling

async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/10");
    if (!response.ok) {
      throw new Error('User not found');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchUserData();

/*
Explanation:

* If the fetch() fails(like a 404 or network error), the code inside catch executes.

* This is much cleaner than.then().catch() chains. */