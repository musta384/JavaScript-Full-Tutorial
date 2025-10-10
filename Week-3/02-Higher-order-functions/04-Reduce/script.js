
// Reduce() method

//  executes a used-supplied "reducer" callback function on each element of the array, in order, 
// passing in the return value from the calculation on the preceeding element.
// The reducer walks through the array element-by-element, 
// at each step adding the current array value to the result from previous step
// until there are no more elements to add.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = nums.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;     // adds current value to previous vale
}, 0);  // Initial value set to 0

console.log(sum);  // 55

// or
// const sum2 = nums.reduce((acc, cur) => acc + cur, 0 );
// console.log(sum2);

// Using for loop
const sum3 = () => {
  let acc = 0;
  for (cur of nums) {
    acc += cur;
  }
  return acc;
}
console.log(sum3());


//  Shopping Cart

const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 175 },
]

// Find the total price of the items
const totalPrice = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);
console.log(totalPrice);  // 455