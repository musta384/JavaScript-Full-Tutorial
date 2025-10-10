// Creating an object Literal using string

// var icecream = {
//   'cars' : 4*20,
//   'tracks' : 5*20
// };

// icecream['cars'] = 2*20;
// console.log(icecream["cars"] + " cars are available")
// console.log(icecream)
// icecream['suv'] = 3*20;
// console.log(icecream);

// delete icecream['cars'];

// console.log(icecream)
// console.log(icecream["cars"] + " cars are available")


// Creating Object Literal using identifier

var icecream ={
  chocolate: 98,
  halfBaked: 100,
  mudPie: 260,
  cinnamonBuns: 270
};

console.log(icecream.halfBaked  + ' calories per pint');
console.log(icecream);
icecream.cherryGarcia = 300;     //Adding member
icecream.mudPie = 150;           // Changing members value
delete icecream.cinnamonBuns;    // Deleting Object member
console.log(icecream);

// Creating an Array Literal,

// if we wanted to simply create a top-ten list of flavors, an
// object wouldn’t do. For that we’d need an array,
// you just list values in an array from first to last; JavaScript takes
// care of the numbering.
// Note that numbered values are referred to as elements rather than members.
// Array is an Object subtype

var myCars =[
  'Audi',
  'Toyota',
  'Tata',
  'Vitz',
  'Yaris',
  'Hilux'
];

console.log(myCars[0]);
console.log(myCars[3])
myCars[2] = 'Landcruser';   //Replacing an element
delete myCars[1];           // Deleting and element

console.log(myCars);

// The above Code is same as below in the face of JavaScript
// The [] operator converts the number you put in there to a string.

var myCars ={
  '0': 'Audi',
  '1': 'Toyota',
  '2': 'Tata',
  '3': 'Vitz',
  '4': 'Yaris',
  '5': 'Hilux'
};

console.log(myCars['3']); // is same as myCars[3]


// Creating Function Literals

//In addition to being able to contain members or
// elements, functions can also contain statements. used for code reuse.

var myCars =[
  'Audi',
  'Toyota',
  'Tata',
  'Vitz',
  'Yaris',
  'Hilux'
];

var myFavourite  = function(car) {
  for (var i = myCars.length; i--;){
    if (myCars[i]=== car) {
      return car + ' is your number '+ (i+1)+ ' favourite car.';
    }
  }
  return car + ' is not my top 6.';
};

console.log(myFavourite('Hilux'));

console.log(myFavourite('Audi'));


// Type Conversion

// To convert a string, number, or boolean to a wrapper object, JavaScript invokes String(), Number(), or
// Boolean(). Those are referred to as constructor functions. To reverse the conversion, that is, to convert a
// wrapper object back to a string, number, or boolean, JavaScript invokes valueOf() on the wrapper.

// Understanding the three ways to use the return value of any String method is as vital as knowing
// what it does. Here’s a recap:
// • You can save the return value to a new variable.
// • You can replace the string in the original variable with the return value.
// • You can immediately use the return value as an operand for an operator such as ===.

// String.charAt()
// String.charCodeAt()
// String.concat()
// String.fromCharCode() => Except this, String should be replaced by string literal or name of a variable( member, element or parameter)
// String.indexOf()      => Locating a substring within a string. e.g 'man' in 'Batman'
// String.lastIndexOf()  => searches upstream, from the end of a string to the beginning.
// String.length
// String.localeCompare()
// String.match()
// String.replace()      => replacing a substring
// String.search()       => returns the index of the first match of a RegExp object.
// String.slice()        => clipping a substring
// String.split()        => Splitting a String into an Array of Smaller Strings
// String.substring()
// String.substr()
// String.toLocaleLowerCase()
// String.toLocaleUpperCase()
// String.toLowerCase()
// String.toUpperCase()
