
// Arrow Functions:

// are useful whenever you want to write an implementation on the
// spot, such as inside another function as an argument.
// most often used for functions that consist of only one statement.


function doingStuff(x) {
  console.log(x);
}

// Syntax

// (param1, param2) => body of the function;
let addTwoNumber = (x, y) => console.log(x + y);
addTwoNumber(5, 3);

// or for no parameters
// () => body of the function
let sayHi = () => console.log("hi");
sayHi();

// or for one parameter (no parentheses are needed here):
// param => body of the function
var doingStuff = x => console.log(x);  // arrow function of above line of code
doingStuff('Great'); // invoking the function

// or for a multiline function with two parameters:
// (param1, param2) => {
//   // line 1
//   // any number of lines
// }

// we can combine the arrow function with certain built-in methods.
// For example, we can use the foreach() method on an array. 

const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));    // This method executes a certain function for every element in the array. 
