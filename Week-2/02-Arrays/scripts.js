
// Arrays

// An array is a type of object, which allows you to store multiple values.
// These values can be of all data types and one array can
// even contain different data types

//Topics to discuss

// • Arrays and their properties
// • Array methods
// • Multidimensional arrays
// • Objects in JavaScript
// • Working with objects and arrays

//___________________________________________________________

// Creating Arrays 

arr1 = ["black", "orenge", "pink"];
console.log(arr1);

arr2 = ["Hi", 5, false]; // contain different data types
// console.log(arr2);
// console.log(arr2[0]+ " is " + typeof arr2[0]);
// console.log(arr2[1]+ " is " + typeof arr2[1]);
// console.log(arr2[2]+ " is " + typeof arr2[2]);

const arr = ["hi there"];
arr[0] = "new value";  // You can change the values of a constant array
// console.log(arr[0]);
// arr = ['hi'];  // But not the Array it self, TypeError: Assignment to constant variable.
// ___________________________________________________________________

// Accesing elements of and Array

// We can do this by referencing the array's index

cars = ["Toyota", "Vitz", "Renault", "Volkswagan"];
cars[0]; // "Toyota"
cars[1]; // "Vitz"
cars[2]; // "Renault"
cars[3]; // "Volkswagan"

// console.log(cars);
// console.log(cars[-1]); // Undefined

// ___________________________________________________________

// Overwriting elements

cars[0] = "Tesla";
console.log(cars); // ["Tesla", "Vitz", "Renault", "Volkswagan"]

// _______________________________________________________________

// Array Methods

// Adding and replacing elements ( push() and splice())

// push(): The value gets added to the end of the array
// splice(): to add elements at a certain index

fruits = ["Orange", "Banana", "Lemon", "Lime"];
console.log(fruits)    // ["Orange", "Banana", "Lemon", "Lime"]
fruits.push('Grapes'); // Adds "Grapes" to fruits array
console.log(fruits);   // ["Orange", "Banana", "Lemon", "Lime", "Grapes"]

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 1, "square", "trapezoid"); // start inserting from index 2, delete 1 element (rectange)
console.log(arrOfShapes);

// concat(): add another array to your array.

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7); // [1,2,3,4,5,6]

// We can use it to add values as well.
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8); // [1,2,3,4,5,6,7,8,9]

// _______________________________________________________________

// Deleting Elements

// Pop(): Removes the last element
arr8.pop(); // Output: [1,2,3,4,5,6,7,8]

// shift(): Deletes the first element
arr8.shift(); // Output: [2,3,4,5,6,7,8]

// splice(): we can also use it to delete values.
arr8.splice(1,3) // splice(starting index, number of elements to delete)
console.log(arr8); // [2, 6, 7, 8] => 3, 4 and 5 are deleted.

// delete: not a method but you can use it
// to change the value of a certain position of the array to undefined:

delete arr8[0];
console.log(arr8); // [empty, 6, 7, 8]

// _______________________________________________________________

// Finding Elements

// find(): checks whether a value is present in an array. is actually a function.

// This function will be executed on every element in the array until it finds
// a match, and if it does not, then it will return undefined.

arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2); // will log 6 and undefined because it can find an element that matches for 6, 
// but not one that matches for 10.

// indexOf(): if you want to know what position it is on. returns
            // the index on which the value is found.
// If a value occurs in an array more than once, it will return the first occurrence. 
// If the value is not found, it will return -1:

arr8 = [ 2, 6, 7, 8 ];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
// let findIndex3 = arr8.indexOf(6, 2);  specifying from which position it should start searching:
console.log(findIndex, findIndex2); 

// lastIndexOf(): To find the index of the last occurrence of the element

let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");  // 4

// ________________________________________________________________

// Sorting

// sort(): It sorts numbers from small to high and strings A-Z.

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort(); // [ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ]

let ages = [18, 72, 33, 56, 40];
ages.sort(); // [18, 33, 40, 56, 72]

// _________________________________________________________________

// Reverting

// reverse(): It puts the last element first, and the first element last. It does not matter
            // whether the array is sorted or not; it just reverses the order.

names.reverse(); // ['Alicia', 'Bert', 'Fatiha', 'James', 'Maria']

// Practice exercise:

// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.
// 11. Your final list should look like this:
// ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]

let myShopping = [];
myShopping.push('Milk', 'Bread', 'Apples');  // ['Milk', 'Bread', 'Apples']
myShopping.splice(1, 1, 'Bananas', 'Eggs'); // ['Milk', 'Bananas', 'Eggs', 'Apples']
myShopping.pop();                           // ['Milk', 'Bananas', 'Eggs']
// console.log(myShopping);

myShopping.sort();                        // ['Bananas', 'Eggs', Milk']
milk_index = myShopping.indexOf('Milk');  // 2
// console.log(milk_index); 

myShopping.splice(1, 0, 'Carrots', 'Lettuce')  // ['Bananas', 'Carrots', 'Lettuce', 'Eggs', Milk']

shopping2 = ['Juice', 'Pop'];
let shopping1 = myShopping.concat(shopping2).concat(shopping2); // ['Bananas', 'Carrots', 'Lettuce', 'Eggs', Milk', 'Juice', 'Pop', 'Juice', 'Pop']
// console.log(shopping1.lastIndexOf('Pop')); // 8
console.log(shopping1);

// _______________________________________________________________________________________________________________________-

// Multidimensional arrays
// -----------------------

// Earlier, we established already that arrays can contain any data type. This means that
// arrays can also contain other arrays (which, in turn, can contain… other arrays!). This
// is called a multidimensional array. It sounds complicated, but it is just an array of
// arrays: a list of lists:

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];  // [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arrOfArrays);

let value1 = arrOfArrays[0][1]; // 2 = second value of first array
let value2 = arrOfArrays[2][2]; // 9 = third value of third array

// creating an array of our array of arrays

arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.dir(arrOfArraysOfArrays);
let middleValue = arrOfArraysOfArrays[1][1][1]; // 5 => second array of arrOfArraysOfArrays, 
                                                // then second array of arrOfArrays, then the second value of this array
console.log(middleValue);