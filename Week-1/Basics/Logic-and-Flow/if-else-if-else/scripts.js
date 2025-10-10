// Control Structures

// if / else if / else

let hour = 14;

if (hour < 12) {
  console.log('Good Morning Sir!');
} else if (hour < 18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Evening');
}
  
// Example
// Let's check what's available in the fridge and what's not


var fridge = {
  onion: false,
  potatoes: false,
  chilli: false,
  soda: true,
  apple: false
};

var items;

if (fridge.onion) {
  items = 'Onions are Available';
} else if (fridge.potatoes) {
  items = 'Potatoes are available';
} else if (fridge.chilli) {
  items = 'Chillis are available';
} else if (fridge.soda) {
  items = 'Soda is avilable';
} else if (fridge.apple) {
  items = 'Apple is available';  
} else 
  items = 'nothing is available';

console.log(items);

// Note: since all five paths are single child statements, 
// we may omit curly braces throughout:

// In the event that your if and else clauses contain single expression statements, 
// you may more elegantly
// control flow with a conditional expression using the ?: operator,

var fridge = {
  onion: false,
  potatoes: false,
  chilli: false,
  soda: false,
  apple: false
};
// Not recommended but good to know

var items = fridge.onion ? 'Onion is available':
(fridge.potatoes ? 'Potatoes are available' :
  (fridge.chilli ? 'Chillis are availavle' :
  (fridge.soda ? 'Soda is available' :
  (fridge.apple ? 'Apple is available' :
    'nothing is available'
))))

console.log(items);


// Switch (good for many concrete cases)

// Switch statements are used if all paths depend on the value of the same expression 
// and if that expression returns a string or number.

// Syntax

// if (expression) {
//   block
// }

// switch (expression) {
//   block
// }


// Example 1

let day = 'Friday';

switch (day) {
  case 'Monday':
    console.log("Today is Monday, Start of the week");
    break;   // 'break' is crucial to stop execution here
  case 'Tuesday':
    console.log("It's Tuesday");
    break;
  case 'Friday' :
    console.log('Today is Friday. go for Juma prayer!');
    break;
  default: 
    console.log("It's some other day");
}

// Example 2

// Let's check player name of Arsenal Fc based on jersey number

var jersey = 7, name = ''; //Using var bcs I want to update whenever i want

switch (jersey) {
  case 10:
    name = 'Eze';
    break;  // If there is no break, js just overwrites name value
  case 8:
    name = 'Odegard';
    break;
  case 2:
    name = 'Saliba';
    break;
  case 7:
    name = 'Bukayo Saka';
    break;
  case 41:
    name = 'Declan Rice';
    break;
  case 6:
    name = 'Gabriel Magalaes';
    break;
  case 11:
    name = 'Martinelli';
    break;
  default:
    name = 'Not worn by any player'
}

player = 'Number ' + jersey + ' is ' + name;

console.log(player);


// if a switch appears within a function, then you can end paths with a return
// disruptive statement instead of a break. Oftentimes, 
// the return statement not only marks the end of the
// path but also is the path itself


var jersey = 41, name = '';
function identifyPlayer() {
  switch (jersey) {
    case 8:
      return 'Odegard';
    case 41:
      return 'Declan Rice';
    case 11:
      return 'Martinelli';
    case 7:
      return 'Bukayo Saka';
    default:
      return 'Not worn by any player'
  }
}

player = 'Number ' + jersey + ' is ' + identifyPlayer()+'.';
console.log(player);
