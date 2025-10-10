// Functions

// 1) Function Declaration, Expression, Arrow functions

// Function Declaration
function greet(name) {
  return 'Hello ' + name;
}
console.log(greet('Musa'));


// Function Expression
const hi = function(name) {
  return 'Hi '+ name;
}
console.log(hi('Abdi'));


// Arrow function
const morning = (name) => {
  return 'Good Morning ' + name;
}
console.log(morning('Qamar'));

//If it's a one-liner, you can simplify:
const evening = (name) => 'Good evening '+ name;
console.log(evening('Ibrahim'));

// /#######################################################

// // 2. Parameters & Default Parameters (ES6)

// Parameters are variables listed in the function's definition. 
// Arguments are the actual values passed to the function.

function calculateArea(width, height = 10) { // height defaults to 10
  return width*height;
}
console.log(calculateArea(5)); //50 (used default height = 10)
console.log(calculateArea(5,3)); //15 uses given values


// #######################################################

// 3) Scope
// Scope determines the accessibility (visibility) of variables.
    // 1) Global Scope
    // 2) Function Scope (var)
    // 3) Block Scoped  (let and const)


let glovalVar = "I'm global"; //Global scope

function myFunction () {
  var functionScopedVar  = "I'm function scoped"; // Accessible anywhere in this function
  let blocScopedVar  = "I'm block scoped"; // Accessible only in this function block

  if (true) {
    var stillAccessible = 'Yes!'; // Accessible in whole function
    let notAccessible = 'Nope!';  // Accessible only in this if block
  }
  console.log(stillAccessible); // "Yes!"
  console.log(notAccessible); // Error: 
}
// console.log(functionScopedVar); // Error: functionScopedVar is not defined

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// 4) Hoisting

// JavaScript's default behavior of moving declarations to the top of their scope
// var declarations are hoisted and initialized with undefined.
// let and const are hoisted but not initialized (Temporal Dead Zone). 
// You cannot use them before declaration.
// Function declarations are hoisted and can be called before they are defined.


console.log(hoistedVar); // undefined (var is hoisted)
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
var hoistedVar = "value";
let hoistedLet = "value";

sayHello(); // "Hello!" (function declaration is hoisted)
function sayHello() {
  console.log("Hello!");
}
// sayGoodbye(); // Error: sayGoodbye is not a function (var is hoisted as undefined)
var sayGoodbye = function() { 
  console.log("Goodbye!"); 
};