
// Promises

/*
A promise is an object returned by an asynchronous function, 
which represents the current state of the operation.
At the time the promise is returned to the caller, 
the operation often isn't finished, but the promise object provides 
methods to handle the eventual success or failure of the operation.

With a promise-based API, the asynchronous function starts the operation 
and returns a Promise object. You can then attach handlers to this promise object, 
and these handlers will be executed when the operation has succeeded or failed.
*/

/*
A promise can be in one of three states:
  * pending: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. 
    This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.
  * fulfilled: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.
  * rejected: the asynchronous function has failed. When a promise is rejected, its catch() handler is called.
*/

/* Promise handlers

  * .then() - handles successful response (status 200-299)
  * .catch() - handles network or parsing errors
  * .finally  - cleanup (runs anyways)
*/

// fetch()
//  is a built-in JavaScript API for making HTTP requests — 
// it returns a Promise.

// const responsePromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
// console.log(responsePromise);  // Promise Object

/*
fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
  .then(response => response.json())  // Converts to JSON
  .then(data => console.log(data))   // Handle parsed data
  .catch(error => console.error('Fetch failed', error))  // Handles error
  .finally(() => console.log('Request Completed'));
*/


// Basic Syntax

const myPromise = new Promise((resolve, reject) => {
  // Do something asynchronous
  let success = true;

  if (success) {
    resolve("Operation successful!");  // used when the task succeeds
  } else {
    reject("Something went wrong!");   // used when the task fails
  }
});


// Consuming a Promise:
// You use.then() and.catch() to handle results:

myPromise
  .then(result => {                  // If resolve() is called → .then() runs
    console.log("Success:", result);
  })
  .catch(error => {                   // If reject() is called → .catch() runs
    console.log("Error:", error);
  });


// Promise Chaining:
// You can chain.then() calls to perform multiple actions in sequence:

fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
  .then(response => {
    console.log('Status', response.status);  // status 200 if success
    return response.json();  // returns another Promise
  })
  .then(data => {
    console.log('User data:', data);
  })
  .catch(error => {  // handling errors
    console.log('Something is wrong: ', error);
  })
  .finally(() => {  // common use - Hide a loading spinner or re-enable a button when the fetch completes.
    console.log('Loading finished');
  });


/* 
Promise chaining in fetch()

You can chain multiple.then() calls for step - by - step operations.
Each.then() receives the return value of the previous.then() — 
even if it’s another promise. */


// Example: Simulating Async Operation

// Let’s simulate a network call using setTimeout:

const getUserData = new Promise((resolve, reject) => {
  console.log("Fetching user data...");

  setTimeout(() => {
    let success = true;
    if (success) {
      resolve({ name: "Mustefa", age: 24 });
    } else {
      reject("Failed to fetch data!");
    }
  }, 2000);
});

getUserData
  .then(user => {
    console.log("User fetched:", user);
    return user.name;
  })
  .then(name => console.log("Welcome,", name))
  .catch(error => console.error("Error:", error))
  .finally(() => console.log("Request finished."));



// Promise.all, Promise.allSettled, Promise.race, Promise.any

// Promise.all()

/*
Waits for all promises to resolve(or rejects if one fails):
Promise.all([
  fetch("/api/user"),
  fetch("/api/posts"),
  fetch("/api/comments")
])
  .then(responses => console.log("All done:", responses))
  .catch(error => console.error("At least one failed:", error));  */


// Promise.allSettled()

// Waits for all promises(even if some fail):
Promise.allSettled([
  Promise.resolve("A"),
  Promise.reject("B"),
  Promise.resolve("C")
]).then(results => console.log(results));


// Promise.race()

// Resolves or rejects as soon as one promise finishes(first one wins):
Promise.race([
  new Promise(res => setTimeout(res, 1000, "One")),
  new Promise(res => setTimeout(res, 500, "Two"))
])
  .then(value => console.log("Winner:", value)); // "Two"



// Promise.any()

// Resolves as soon as one promise succeeds(ignores rejections):
Promise.any([
  Promise.reject("Fail 1"),
  Promise.reject("Fail 2"),
  Promise.resolve("Success!")
])
  .then(value => console.log("First success:", value))
  .catch(err => console.error("All failed:", err));
