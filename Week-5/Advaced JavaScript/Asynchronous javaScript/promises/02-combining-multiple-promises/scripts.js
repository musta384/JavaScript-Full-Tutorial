/* Using Promise.all() with Fetch

 When you want to fetch multiple resources at once, use Promise.all().
 If any fetch fails, the whole Promise.all() rejects. */

/*
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });

*/

Promise.all([
  fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"),
  fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"),
  fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
])
  .then(([fetchPromise1, fetchPromise2, fetchPromise3]) => {
    console.log(`${fetchPromise1.url} : ${fetchPromise1.status}`);
    console.log(`${fetchPromise2.url} : ${fetchPromise2.status}`);
    console.log(`${fetchPromise3.url} : ${fetchPromise3.status}`);
  })
  .catch((error) => {
    console.error(`Error loading data: ${error}`);
  })

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Promise.allSettled() for Safer Multi - Fetch

// Unlike Promise.all, it waits for all requests, even if some fail.

Promise.allSettled([
  fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"),
  fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"),
  fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Success:', result.value);
      } else {
        console.log('Failed:', result.reason);
      }
    });
  });


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// Promise.any().
// Sometimes, you might need any one of a set of promises to be fulfilled,
// and don't care which one.
// it is fulfilled as soon as any of the array of promises is fulfilled,
// or rejected if all of them are rejected:

/*
Promise.any([
  fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  ),
  fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  )
])
  .then(([fetchPromise1, fetchPromise2]) => {
    console.log(`${fetchPromise1.url}: ${fetchPromise1.status}`);
    console.log(`${fetchPromise2.url}: ${fetchPromise2.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
  */