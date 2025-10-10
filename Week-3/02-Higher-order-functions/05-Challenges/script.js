
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Array Method Challenges
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// 1) Take the people array and create an array called youngPeople that stores objects
// with only name and email properties of all the people that are 25 and under. 
// The name property should have their firstname and lastname. 

const people = [
  {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-111',
    age: 30,
  },
  {
    firstname: 'Abdi',
    lastname: 'Kadi',
    email: 'abdi@gmail.com',
    phone: '222-222-222',
    age: 21,
  },
  {
    firstname: 'Ibrahim',
    lastname: 'Abdella',
    email: 'ibrahim01@gmail.com',
    phone: '333-333-333',
    age: 23,
  },
  {
    firstname: 'Bahar',
    lastname: 'Mohammed',
    email: 'bahar@gmail.com',
    phone: '111-111-111',
    age: 24,
  },
  {
    firstname: 'Kemer',
    lastname: 'Abdella',
    email: 'Kemer@gmail.com',
    phone: '555-555-555',
    age: 34,
  },
]

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((young) => ({
    name: young.firstname + ' ' + young.lastname,
    email: young.email,
  })
  );

console.dir(youngPeople);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Challenge 2
// -----------

// Add all the positive numbers in an array

const numbs = [2, -30, 50, 20, -12, -9, 7];

const positiceSum = numbs
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(positiceSum);  // 79

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Challenge 3
// -----------

// create a new array called capitalizedWords 
// with the words from the words array with the first letter of word capitalized.

const words = ['code', 'programmer', 'developer'];

const capitalizedWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
})
console.log(capitalizedWords);
