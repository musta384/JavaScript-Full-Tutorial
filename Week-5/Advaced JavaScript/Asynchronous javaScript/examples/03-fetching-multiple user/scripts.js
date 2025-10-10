async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const userCards = users.map(user => `
          <div class="card">
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
          </div>
        `).join("");

    document.getElementById("users").innerHTML = userCards;
  } catch (error) {
    document.getElementById("users").innerHTML = `<p style="color:red;">Error loading users: ${error.message}</p>`;
  }
}

fetchUsers();