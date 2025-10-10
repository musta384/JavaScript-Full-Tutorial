// Data Types 

// String 

let a = "55"
let b = 'Hello'
let c = "55hello"
console.log(typeof c);

// Number => Integers and float

let d = 42;
let e  = 2.44;

console.log(typeof d);
console.log(typeof e);

// Boolean 

let isTrue  = true;
console.log(typeof isTrue);


// Type Conversion and Coercion

// Conversion => Manual Conversion (Explicit)

let input = "123";
let num = Number(input); // Converts string to number -> 123
let str = String(123);   //Conversts number to string -> "123"
let bool = Boolean(1); // Converts to true (0 to false)

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);


// Automatic Coercion (Implicit)

"5" + 1;     // + with a string triggers string concatenation -> "51"
"5" - 1;     // - is only for numbers, so "5" is coerced to 5 -> 4
"5" == 5;    // loose equality, coerces types -> true
"5" === 5;   // strict equality, checks type AND value -> false (ALWAYS use ===)


// Exercise

const pi = 3.14159;
let radius = 5;

let area = pi*radius*radius;
console.log(area);
