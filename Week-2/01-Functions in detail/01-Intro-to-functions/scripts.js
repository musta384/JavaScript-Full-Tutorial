
//  Functions

// Invoking Functions

// nameOfFunction();  // no argument
// functionThaTakesInput("the input", 5, true);   // with arguments

// Writing Functions

function funcName() {
  // content of the function
}

funcName(); // function can be called like this

// Let's write a function that asks for your name and then greets you:

function greetMe() {
  let you = prompt("What's your name? ");
  console.log("Hello ", you + "!");
}
// greetMe();  // Hello Mustefa!

// functions can contain variables and also variables can contain functions.

let varContainingFunction = function () {    // Variable containing function
  let varInFunction = "I'm in a function."; // Variable in function 
  console.log("hi there!", varInFunction);
};
varContainingFunction();

// Variables contain a certain value and are something; they do not do anything.
// Functions are actions.

// Exercise

function addNumer(a, b) {
  return a + b;
};
console.log(addNumer(10, 25));

// Exercise 2

arr9 = ["orange", "grapes", "banana", "mango"];
function fruitChoice() {
  // let yourChoice = prompt("What's your favourite fruit? ");
  let randomlySelected = Math.random();
  console.log("Your choice is ", yourChoice, ", Randomly selected is ", randomlySelected);
};

// fruitChoice();

// ________________________________________________________________________---_______

// Special functions and operators
// Arrow functions
// spread operators
// rest operators


// _____________________________________________________________________________________



// Recursive Function
// Anonymous functions
// Function callbacks