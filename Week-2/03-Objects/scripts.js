
// Objects

// They have properties and they can perform actions, methods.
// An object is a chance to group multiple variables into one. 
// This is done with curly brackets: { and }.

// *objectname(dog)* has a(n) *property name(dogName)*

let dog = {        // created a variable, dog, and we gave this an object as a value.
  dogName: "Buchi", 
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true
};

// Accessing properties by name of the property, to get the value, not index:

let dogColor1 = dog["color"]; // Using square brackets or,
let dogColor2 = dog.color;    // Using dot. 

// Updating Objects

dog["color"] = "blue";  // Using square brackets or,
dog.weight = 2.3;       // Using dot.

console.log(dog);

// Exercise

myCar = {
  make: "Toyota",
  model: "Corolla",
  year: 2025,
  color: "Red"
};

var propName = "color";
myCar.propName = "Silver";

var propName = "forSale";
myCar.propName = true;

console.log("Make: ", myCar.make);
console.log("Model: ", myCar.model);
console.dir("For Sale ", myCar.forSale);

// _____________________________________________________________________-

// Working with objects and arrays

// Objects in objects

var company = {
  companyName: "Healty Candy",
  activity: "food manufacturing",
  address: {               // object within an object
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  yearOfEstablishment: 2021,
};

// To access or modify the properties

company.address.city;          // "Miami"
company["address"]["city"];   // "Miami"
company.address.number = 2233;  // "number" updated to 2233
company["address"]["zipcode"] = 1234; // zipcode updated to 1234

// _______________________________________________________________________

// Arrays in objects

var company = {
  companyName: "Healty Candy",
  activity: ["food manufacturing", 
    "improving kid's health", "manufacturing toys"], // Arrays in objects
  address: {               // object within an object
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  yearOfEstablishment: 2021,
};

console.log(company.activity[1]); // "improving kid's health" 

// _______________________________________________________________________________

// Objects in arrays

let address = [{
  street: "2nd street",
  number: "123",
  zipcode: "33116",
  city: "Miami",
  state: "Florida"
},
{
street: "1st West avenue",
number: "5",
zipcode: "75001",
city: "Addison",
state: "Texas"
}
]

let streetName = address[1].street; // index for array then dot for onject
console.log(streetName);    // "1st West avenue",
// _________________________________________________________________-______________

// Objects in arrays in objects

var  company = {
  companyName: "Healthy Candi",
  activity: ["food manufacturing", 
    "improving kid's health", "manufacturing toys"], // Arrays in objects
  address: [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
  }],
  yearOfEstablishment: 2021
};

let addNumber = company.address[0].number;
console.log(addNumber); // 123

// ______________________________________________________________________________--

// Exercise

// 1. Create an object named people that contains an empty array that is called friends.
// 2. Create three variables, each containing an object, that contain one of your
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console.

people = {
  friend: []
};

let abdi = {
  name: "Abdi",
  lastName: "Kadi",
  id: "123"
};

let ibrahim = {
  name: "Ibrahim",
  lastName: "Abdella",
  id: "321"
};

let bahar = {
  name: "Baharudin",
  lastName: "Mohammed",
  id: "213"
};

people.friend.push(abdi, ibrahim, bahar);  
console.dir(people);

// _________________________________________________________________________

// Exercise 2

// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and quantity.
// 3. Add all three objects to the main array using an array method, and then log the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console. Experiment by adding and accessing more elements 
// within your data structure.

let storItems = [

];

item1 = {
  name: "Toyota",
  model: "Corolla",
  cost: "2,000,000 Birr",
  quantity: "12",
};
item2 = {
  name: "Toyota",
  model: "Hilux",
  cost: "5,000,000 Birr",
  quantity: "9",
};
item3 = {
  name: "Toyota",
  model: "Vitz",
  cost: "2,500,000 Birr",
  quantity: "15",
};

storItems.push(item1, item2, item3);
console.dir(storItems);

console.dir("The number of " + item3.model + " available is " + storItems[2].quantity);
