
// Closure = A function defined inside of another function, the inner function 
//            has access to the variables ans scope of the outer function.
//            Allow for private variable and state maintenance
//            Used frequently in JS frameworks: React, Vue, Angular


function outer() {

  let message = 'Hello World'; // this variable is not accessible outside outer() function

  function inner() {  // has access to the variables ans scope of the outer function.
    console.log(message);
  }

  inner();  // we have to make inner() function available for outer function

}

// message = 'Goodbye'; // we cannot access message variable outside function

outer();



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// A closure can maitaince the state of variable and makes it private

// Let's create a counter program


function createCounter() {

  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  // Let's create additional function to return our count
  function getCount() {
    return count;
  }

  return { increment, getCount };  // return object method

}

const counter = createCounter();
counter.increment();  // Count increased to 1
counter.increment();  // Count increased to 2
counter.increment();  // Count increased to 3
// Note: It is not resetting everytime we call a method

console.log(`The current count is : ${counter.getCount()}`);  // The current count is : 3


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is: ${game.getScore()}pts`);

