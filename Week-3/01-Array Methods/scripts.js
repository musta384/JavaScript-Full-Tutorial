// Array Methods

// Performing a certain action for every item

// forEach() method.

// is a built-in method that you can use to execute a function for
// every element in the array.

let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
  // console.log("Printing stuff:", element, "on array position:", index);
}
arr.forEach(printStuff);

// it called the printStuff() function for every element in the array.
// and prints the element of an Array and it's position


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Checking a condition for all elements

// every() method
// used to see whether something is true for all elements in the array.

console.log(arr.every(checkString)); // false, since not all elements are of type string in the array.


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Replacing part of an array with another part of the array

// copyWithin() method
// can be used to replace a part of the array with another part of the array.

arr2 = ["apple", 4, "hello", 5.6, false];
arr2.copyWithin(1, 2, 4);
// copyWithin(target position, start of what to copy, end of sequence that will be copied)
console.log(arr2);

