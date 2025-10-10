
// Fetching Multiple Requests in Sequence

async function getMultipleUser() {
  const response1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user1 = await response1.json();

  const response2 = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const user2 = await response2.json();

  console.log(user1.name, 'and', user2.name);
}

getMultipleUser();

/*
Explanation:

* Each await waits for the previous one to finish before moving to the next.

* This is sequential fetching. */


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// Fetching Multiple Requests in Parallel(Using Promise.all)

async function getUsersInParallel() {
  const [res1, res2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/users/2")
  ]);

  const [user1, user2] = await Promise.all([
    res1.json(),
    res2.json()
  ]);

  console.log("Users:", user1.name, "and", user2.name);
}

getUsersInParallel();


/*
Explanation:

* Promise.all() runs both fetch() calls simultaneously.

* It waits until both Promises resolve.

* This makes your app faster. */