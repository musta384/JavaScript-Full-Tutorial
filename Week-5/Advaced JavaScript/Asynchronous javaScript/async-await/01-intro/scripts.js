
/*

 async / await
 -------------

async / await is syntactic sugar built on top of Promises.
It allows you to write asynchronous code that looks and behaves like 
synchronous code, making it easier to read and debug.

*/

// Syntax

async function greet() {
  return 'Hello World';
}

// greet().then(message => console.log(message));

/*
* When you mark a function as async, it automatically returns a Promise.
* The value returned("Hello, world!") is wrapped inside a Promise.
* You use.then() to access the result.
*/

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data Fetched');
    }, 2000);
  })
}

async function getData() {
  console.log('Fetching...');
  const data = await fetchData(); // await fetchData() waits for the Promise to resolve.
  console.log(data);
  console.log('Done!');
}

getData();

/*
* await fetchData() waits for the Promise to resolve.
* The function execution pauses until fetchData() returns "Data fetched!".
* Code after await (console.log(data)) executes only after the Promise resolves.
*/