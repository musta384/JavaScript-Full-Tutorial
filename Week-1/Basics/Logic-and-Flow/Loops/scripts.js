// Types of loops

// 1) While loop
// 2) Do while loop
// 3) For loop
// 4) For in loop

// #########################################################

// 1) While Loop

// Syntax
// while (Boolean(expression)) path

 var arsenalPlayer = [
  'Saka',
  'Rice',
  'Zubimendi',
  'Martinelli',
  'Raya',
  'Saliba',
  'Gabriel',
  'Jesus'
 ];

 var position;
 var i = 0;

 while (i < arsenalPlayer.length) {
  if (arsenalPlayer[i] === 'Martinelli') {
    position = arsenalPlayer[i] + ' is Left Winger,';
    break;   // A break statement tells JavaScript to totally abort a loop.
  }
  i++;
 }

 player = position + ' and he is Arsenal Player';

 console.log(player);

// Aborting an Iteration but Not the Loop

// continue is used to abort an iteration when a variable 
// contains an undesirable value such as undefined or "".

var arsenalFc = [
  'Timber',
  "",
  'White',
  'Calafiori',
  ,
  'Skelly',
  'Madueke'
];

var defender;
var i = 0;

while (i < arsenalFc.length) {
  if (arsenalFc[i] === 'Madueke') {
    defender = 'Madueke is not a defender, ';
    break;
  } else if (! arsenalFc[i]) {
    arsenalFc.splice(i, 1);
    continue;
  } else {
    i++;
  }
}

players = defender + ' he is Midfielder';

console.log(players)
console.log(arsenalFc);


// Replacing Break with Return in a Function

var arsePlayers = [
  'Mosquera',
  "",
  'Hincapie',
  'Zubimendi',
  ,
  'Dowman',
  'Jesus'
];

function findTeenage(teenage) {
  var i =0;
  while (i < arsePlayers.length) {
    if (arsePlayers[i] === teenage) {
      return 'Dowman is teenage Player';
    } else if (! arsePlayers[i]) {
      arsePlayers.splice(i, 1);
      continue;
    } else {
      i++;
    }
  }
return 'Wohoo';
}

console.log(findTeenage('Dowman'));


// ######################################################

// 2) do while loop

// if the while loop expression equates to false when it is first evaluated, 
// then the path will not run at all. Now what if you want to make
// sure the path runs at least one time? do while loops come in handy. 

// Syntax 

// do path while (expression);

var vegs = [
  'onion',
  'potato',
  'tomato',
  'green chilli',
  'cabage',
];

var availableVegs = true;
var i = 0;

do {
  if (vegs[i] === 'cabage') {
    availableVegs = false;
    break;
  }
  i++;
} while (i < vegs.length);
console.log((availableVegs) ? "No can do!" : "Go Ahead!");



//############################################################

// 3) For Loop

// For is a third kind of looping statement, for, 
// which puts the initialization to the left of
// the boolean expression and the increment to the right. 
// Note that semicolons separate the initialization,
// boolean, and increment expressions.

// For Loops
// for: Best when you know how many times to iterate.

// for (let i = 0; i < 5; i++) {
//   console.log('Itererate number' + i);
// }



var bestCities = [
  'Finfinnee',
  'Adama',
  'Dire Dawa',
  'Hawasa',
  'Jigjiga',
  'Robe',
  'Assela',
  'Jimma'
];

var city = 'Adama';

for(i = 0, j = 0; i < bestCities.length; i ++) {
  if (bestCities[i] === city) {
    j = i + 1;
    break;
  }
}

cityName = city + (j > 0 ? ' is the '+ j + 'nd city in the country': ' is not in the list.');

console.log(cityName);


//############################################################

// 4) For in Loop

// for in, provides a way to enumerate the members of an object.
// Used for ojects, not recommended for arrays.

// Syntax

// for (member in object) path

// Enumerating Members with a for in Loop

// Let's differenciate top performers in class

var topStudents = {
  'Abdi': 92,
  'Ahmed': 88,
  'Qamar': 95,
  'Ibrahim': 99,
  'Kamal': 75,
  'Abdu': 87,
  'Bilal': 88
}

var classToppers = [];
for(student in topStudents) {
  if (topStudents[student] >= 90) {
    classToppers.push(student);
  }
}

console.log(classToppers);

// for in loops are the only one that can enumerate unknown object members, 
// in other words, members you do not know the name of.


// GOOD JOB!

// TIPS

//Snappier Conditionals

// One simple thing you can do is favor switch over if else 
// whenever coding five or more paths for JavaScript to conditionally take.

// replacing the if else or switch with an array or object 
// member query will result in an extraordinary speed gain,

// Example

var squadList = {
  '7': 'Bukayo Saka',
  '8': 'Martin Odegard',
  '10': 'Eberechi Eze',
  '11': 'Gabriel Martinelli',
  '12': 'Jurien Timber',
  '2' : 'William Saliba',
  '3': 'Mosquera',
  '4': 'Ben White',
  '6': 'Gabriel Magalaes',
  '1': 'David Raya',
  '36': 'Martin Zubimendi'
};

function playerName (player) {
  return 'Number ' + player + ' is '+(squadList[player] ? squadList[player]: ' not worn by any player.');
}

console.log(playerName(37));


// Snappier Loops




// Exercise: FizzBuzz

// Write a program that prints numbers from 1 to 100.
  // For multiples of 3, print "Fizz" instead of the number.
  // For multiples of 5, print "Buzz".
  // For numbers which are multiples of both 3 and 5, print "FizzBuzz".


oneToHun = [];
mult3 = [];
mult5 = [];
mult35 = [];

for(i = 1; i <= 100; i++){
  oneToHun.push(i);
}

for(j in oneToHun) {
  if (oneToHun[j]%3 === 0) {
    mult3.push(oneToHun[j]);
  }
}

for(j in oneToHun) {
  if (oneToHun[j]%5 === 0) {
    mult5.push(oneToHun[j]);
  }
}

for(j in oneToHun) {
  if (oneToHun[j]%3 === 0 && oneToHun[j]%5 === 0) {
    mult35.push(oneToHun[j]);
  }
}

console.log(oneToHun);
console.log(mult3);
console.log(mult5);
console.log(mult35);


