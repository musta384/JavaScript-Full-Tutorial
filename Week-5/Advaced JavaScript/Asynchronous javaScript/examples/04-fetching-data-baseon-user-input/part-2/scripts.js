
async function fetchMultipleUsers() {

  const numberOfUsersInput = document.getElementById('numberOfUsers'); // 1. Get the desired number of users from the input
  const numberOfUsers = parseInt(numberOfUsersInput.value) || 1;  // Parse the value and ensure it's a number. Default to 1 if invalid.
  const outputElement = document.getElementById('output');

  // Clear previous output and show loading message
  outputElement.innerHTML = 'Loading users...';

  const fetchPromises = [];    // 2. Create an array of Promises for all fetch requests

  // The API uses IDs starting from 1 (or 0 for the first 10, but 1-10 is cleaner)
  for (let id = 1; id <= numberOfUsers; id++) {
    fetchPromises.push(          // Add each fetch promise to the array
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    );
  }

  try {
    const responses = await Promise.all(fetchPromises);     // 3. Wait for ALL fetch requests to complete (resolve or reject)
    const successfulResponses = responses.filter(response => response.ok);   // 4. Check all responses for errors

    if (successfulResponses.length === 0) {
      throw new Error('Could not fetch any user data.');
    }

    const jsonPromises = successfulResponses.map(response => response.json()); // 5. Convert all successful responses to JSON. This is an array of Promises

    const users = await Promise.all(jsonPromises); // 6. Wait for ALL JSON parsing to complete

    // 7. Generate all the HTML cards from the collected users
    const userDetailsHTML = users.map(user => `
            <div class="user-card">
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
            </div>
        `).join(''); // The .join('') is crucial here

    // 8. Update the DOM once with the complete HTML string
    outputElement.innerHTML = userDetailsHTML;

  } catch (error) {
    // Handle any errors during fetching or parsing
    outputElement.innerHTML = `<p style="color:red;">Error fetching users: ${error.message}</p>`;
  }
}

// Attach the main function to the button click event
document.getElementById('btn').addEventListener('click', fetchMultipleUsers);