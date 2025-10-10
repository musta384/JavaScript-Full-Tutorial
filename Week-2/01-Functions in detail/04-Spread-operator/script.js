
// Spread Operator

// it spreads out the arguments or elements of an array.
// Expands an array/iterables into indivudual elements

let spread = ["so", "much", "fun"];
let message = ["Javascript", "is", ...spread, "and", "very", "powerful"];
console.log(message);  // ["Javascript", "is", "so", "much", "fun", "and", "very", "powerful"]

// It can also be used to send multiple arguments to a function

// Function calls
function addTwoNumbers(x, y) {
  console.log(x + y);
}
let numbers = [5, 9];
addTwoNumbers(...numbers);  // 14, is same as calling addTwoNumbers(5, 9)

// This operator avoids having to copy a long array or string into a function, which
// saves time and reduces code complexity.

// You can call a function with multiple spread operators. 
// It will use all the elements of the arrays as input.

// Array literals => creating new arrays by spreading existing arrays or adding indivudual elements
function addFourNumbers(x, y, z, a) {
  console.log(x + y + z + a);
}
let arr11 = [5, 9];
let arr12 = [6, 7];
addFourNumbers(...arr11, ...arr12); // 27, is same as addFourNumbers(5, 9, 6, 7)

// Adding element to array
const ar1 = [1, 2];
const ar2 = [3, 4];
const newArray = [0, ...ar1, ...ar2, 5] // [0, 1, 2, 3, 4, 5]

// Copying an array
const original = [1, 2, 3, 4];
const copy = [...original]; // [1, 2,3, 4]

// Object literals => creating new objects by spreading properties from existing object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };  // {a: 1, b: 2, c: 3, d: 4 }
const newObject = { ...obj1, b: 5 };        // {a: 1, b: 5}, b is overridden

//______________________________________________________________________________
