

// Rest Parameter

// Collects individual elements or arguments into a single array
// Allows a function to accept un indefinite number of arguments as an array

// Examples

function sum(...numbers) {   // ...numbers collects all passed arguments into an array called numbers
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45

// In above example, ...number collects all passed arguments into an array 
// named numbers. 

// Example 2

function somefunction(...param1) {
  console.log(param1);
}
somefunction("Hi", "there! ", "How are you?"); // ["Hi", "there! ", "How are you?"]

// Example 3

function otherFuction(param1, ...param2) { // One normal parameter and one rest parameter
  console.log(param1, param2);
}
otherFuction("Hi", "there! ", "How are you?"); // Hi ["there! ", "How are you?"]

// As you can see, the second parameter has changed into an array, containing our
// second and third arguments.
// This can be useful whenever you are not sure what number of arguments you will get. 
// Using the rest parameter allows you to process
// this variable number of arguments, for example, using a loop

// Extracting specifi elemts from an array

const [first, ...rest] = [1, 2, 3, 4];
console.log(first);  // 1
console.log(rest);   // [2, 3, 4]