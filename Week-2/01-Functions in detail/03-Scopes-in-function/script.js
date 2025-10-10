
// Variable scope in functions
//----------------------------

// Local variables in functions

// Local variables are only in scope within the function they are defined.
//  This is true for let variables and var variables.
// The function parameters (they do not use let or var) are also local variables.

function testAvailability(x) {
  console.log("Available here:", x);  // x is available here
}
testAvailability("Hi!");
// console.log("Not available here:", x); // ReferenceError: x is not defined, 
// x is not available outside function scope

// Let's have a look at a variable defined inside a function:

function testAvailability() {
  let y = "Local variable!";
  console.log("Available here:", y); // y is available here, bcs it's local variable
}
testAvailability();
// console.log("Not available here:", y);  // ReferenceError: y is not defined

// But with return you can make their values available outside the function.
// The key word here is values! You cannot return the variable itself.

function testAvailability() {
  let y = "I'll return";
  console.log("Available here:", y);  // Available here: I'll return
  return y;
}
let z = testAvailability();
console.log("Outside the function:", z); // Outside the function: I'll return
// console.log("Not available here:", y);  // ReferenceError: y is not defined


// let versus var variables
// ------------------------

// The difference between let and var is that var is function-scoped,
// let is actually not function-scoped but block-scoped. A
// block is defined by two curly braces { }.

function doingStuff() {
  if (true) {
    var x = "local";
  }
  console.log(x);
}
doingStuff();  // local

// If we use var, the variable becomes function-scoped and is available anywhere in the
// function block (even before defining with the value undefined). Thus, after the if
// block has ended, x can still be accessed.

// Here is what happens with let:
function doingStuff() {
  if (true) {
    let x = "local"; // only available in this if block if {};
  }
  console.log(x);
}
// doingStuff();  // ReferenceError: x is not defined

// A final difference between let and var relates to the order of declaration in a script.
// variables declared with let cannot be accessed before being defined, 
// even within the same block.

function doingStuff() {
  if (true) {
    console.log(x); // accessing before it's declared/defined
    let x = "local"; // then declaring 
  }
}
// doingStuff(); // This will give a ReferenceError that x is not initialized

// What do you think will happen for a var declaration like this?

function doingStuff() {
  if (true) {
    console.log(x);
    var x = "local";
  }
}
doingStuff(); // This time, we won't get an error

// When we use a var variable before the define statement, we simply get undefined. 
// This is due to a phenomenon called hoisting,
// which means using a var variable before it's been declared results in the variable
// being undefined rather than giving a ReferenceError.


// const scope
// --------------

// Constants are block-scoped, just like let. 
// This is why the scope rules here are similar to those for let

function doingStuff() {
  if (true) {
    const X = "local";
  }
  console.log(X);
}
doingStuff(); // ReferenceError: X is not defined
// Using a const variable before having defined it will also give a ReferenceError, 
// just as it does for a let variable.

// ________________________________________________________________________________________-

// Global variables
// ----------------

// global variables are variables declared outside a
// function and not in some other code block
// are accessible in the scope (either function or block) 
// where they're defined, plus any "lower" scopes

let globalVar = "Accessible everywhere!";
console.log("Outside function:", globalVar); // Outside function: Accessible everywhere!
function creatingNewScope(x) {
  console.log("Access to global vars inside function.", globalVar); // Access to global vars inside function. Accessible everywhere!
}
creatingNewScope("some parameter");
console.log("Still available:", globalVar); // Still available: Accessible everywhere!

// you can hide their accessibility inside a
// function by specifying a new variable with the same name inside that scope; this can
// be done for let, var, and const. (This is not changing the value of the const variable

let x = "global";
function doingStuff() {
  let x = "local";
  console.log(x);  // local
}
doingStuff();
console.log(x); // global
