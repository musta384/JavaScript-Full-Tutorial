
// Using await inside Loops (Sequentially)

async function fetchUserSeq() {
  for (let id = 1; id <= 3; id++) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    console.log(`User ${id}: `, user.name);
  }
}

fetchUserSeq();

/*
Explanation:

* Each iteration waits for the previous one to finish before starting the next.

* This is useful when order matters.*/

//********************************************************************** */


/* Using await in Loops(Parallel Version) */

async function fetchUserInParallel() {
  const promises = [];  // to store promises

  for (let id = 1; id <= 3; id++) {
    promises.push(fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())); // store all Promises first
  }

  const users = await Promise.all(promises); // runs alla Promises in parallel
  console.log(users.map(user => user.name));
}

fetchUserInParallel();

/*
Explanation:

* Instead of awaiting inside the loop, we store all Promises first.
* Promise.all() runs them in parallel, making it much faster. */