
// Map chain Method

const squareDoubled = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2)   // This is the result of last map
// console.log(squareDoubled);

// or
const squareDoubled2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {  // sqrt is the result of last map
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) { // sqrtDoubled is the result of last map
    return sqrtDoubled * 2;
  })
// console.log(squareDoubled2);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Chaining different methods

const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log(evenDouble);
