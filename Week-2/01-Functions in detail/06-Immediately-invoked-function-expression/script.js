
// Immediately invoked function expression

// The immediately invoked function expression (IIFE) is a way of expressing a
// function so that it gets invoked immediately. 
// It is anonymous, it doesn't have a name, and it is self-executing.
// It is also used in many design patterns, for example, 
// to create private and public variables and functions.
// If you have an IIFE in the top-level scope, 
// whatever is in there is not accessible from outside even though it is top level.

// Here is how to define it:
(function () {
  console.log("IIFE!");
})();

// (); executes the unnamed function—this must be done immediately following a
// function declaration
// If your function were to require a parameter, you would pass it
// in within these final brackets.
// could use an arrow function here to make the function even more concise:

(() => {
  console.log("Run away");
})();   // We use (); to invoke the function we created.

// If your function were to require a parameter, you would pass it
// in within these final brackets.

let iifeVar = "1000";
(function () {
  let iifeVar = "10";
  console.log(iifeVar);
})();

// Example

// Step 1
let value = "1000";
console.log("Step 1:", value);  // Step 1: "1000"

// Step 2
(function () {
  let value = "Local Value in IIFE";
  console.log("Step 2:", value);  // Step 2: "Local Value in IIFE"
})();

// Step 3
let result = (function () {
  let value = "Returned Local Value";
  return value;
})();
console.log("Step 3: result =", result, "| outer value =", value); // Step 3: result = "Returned Local Value" | outer value = "1000"

// Step 4
let assignValue = function (newValue) {
  value = newValue;
  console.log(`Step 4: The variable 'value' is now: ${value}`);
};
assignValue("Updated by Anonymous Function"); // Step 4: The variable 'value' is now: Updated by Anonymous Function
