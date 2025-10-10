
// Object literal syntax (most common)

const person = {
  firstName: "John", // property 'firstName' storing value "John"
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "coding"], // array as a value
  "favorite color": "blue", // multi-word key name needs quotes
  greet: function() { // function as a value (method)
    console.log(`Hello, my name is ${this.firstName}.`); // 'this' refers to the object
  }
};

// Accessing properties
console.log(person.firstName); // "John" (dot notation)
console.log(person["lastName"]); // "Doe" (bracket notation - necessary for multi-word keys)
console.log(person["favorite color"]); // "blue"

// Adding/Modifying properties
person.location = "USA";
person.age = 31;

console.log(person);

// Calling a method
person.greet(); // "Hello, my name is John."

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// ES6 Features
// Object Destructuring
// Unpack values from arrays or properties from objects into distinct variables.

const { firstName, age } = person;
console.log(firstName); // "John"
console.log(age); // 31

// Array Destructuring
const [firstHobby, secondHobby] = person.hobbies;
console.log(firstHobby); // "reading"

// Spread Operator (Arrays)
// (...): Expands an iterable (like an array) into individual elements. 
// Great for copying arrays/objects and merging them.

const newHobbies = [...person.hobbies, "gaming"]; // ['reading', 'coding', 'gaming']
// const copiedFruits = [...fruits]; // Creates a true copy of the 'fruits' array

// Spread Operator (Objects) - to copy and update properties
const updatedPerson = { ...person, location: "Canada", age: 32 }; // Copies person and updates location/age

// Rest Parameter (in function arguments)
function sumAll(...numbers) { // numbers becomes an array of all arguments
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// console.log(newHobbies);
// // console.log(copiedFruits);
// console.log(updatedPerson);
// console.log(sumAll(1, 2, 3, 4)); // 10