
// Classes

// they are actually an alternative syntax for defining objects using a
// constructor function.

// • Object-oriented programming
    // is a very important programming paradigm wherein code is structured in objects,
    // eading to more maintainable and reusable code. Working

// • Classes and objects
    // objects are a collection of properties and methods
    // Classes in JavaScript encapsulate data and functions that are part of that class

class ClassName {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
}
let obj = new ClassName("arg1", "arg2");

// The this keyword refers to the object it belongs to,
// so it is the first property of the instance of ClassName.

class Dog {
  constructor(dogName, weight, color, breed) { 
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
}
let dog = new Dog("Buchi", 10, "brown", "labrador");
console.log(dog.dogName, "is a", dog.breed, "and weights", dog.weight,"kg");
// the parameters of the constructor and the properties of the class
// have the same name.

// Constructors

// The constructor method is a special method that we use to initialize objects with
// our class blueprint. There can only be one constructor in a class. This constructor
// contains properties that will be set when initiating the class.

// Examples 

class Person {
  constructor (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

let friend = new Person("Abdi", "Kadi");
let friend2 = new Person("Ibrahim", "Abdella");

console.log("Hello", friend.firstname, friend.lastname);
console.log("Hello", friend2.firstname, friend2.lastname);


// // Methods

// In a class, we can specify functions. This means that our object can start doing things
// using the object's own properties—for example, printing a name. Functions on a
// class are called methods. When defining these methods, we don't use the function
// keyword. We start directly with the name:


class People {
  constructor (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hi there I am", this.firstname);
  }
  compliment(name, object) {
    return "That's a wonderful " + object + ", " + name;
  }
  
}
let p = new People("Abdi", "Kadi");
let compliment = p.compliment("Ibrahim", "hat");

p.greet();
console.log(compliment); 


// Exercise 

class Friends {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  fullname() {   //  Method to return full name of one person
    return this.firstname + " " + this.lastname;
  }

  static bothFullNames(person1, person2) {
    return person1.fullname() + " & " + person2.fullname();
  }
}

// Create two persons
const person1 = new Friends("Abdi", "Kadi");
const person2 = new Friends("Ibrahim", "Abdella");

// Print full names separately
console.log("Person 1 full name: ", person1.fullname());
console.log("Person 1 full name: ", person2.fullname());

// Print both full names together
console.log("Both person: ", Friends.bothFullNames(person1, person2));

// _______________________________________________________________________________-

// Properties
// ----------

// Properties, sometimes also called fields, hold the data of the class.
// This is how to add properties that aren't accessible from outside. We prefix them
// with a # symbol:

class Myfriends {
  #fname;
  #lname;
  constructor(fname, lname) {
    this.#fname = fname;
    this.#lname = lname;
  }
}
// Right now, the fname and lname properties cannot be accessed from outside
// the class.

let m = new Myfriends("Abdi", "Kadi");
console.log(m.firstname);  // undefined


// Getters and setters
// -------------------

// Getters and setters are special properties that we can use to get data from a class and
// to set data fields on the class.
// We call them accessors

class Worker {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }

  get firstname() {   // The getter is used to get the property. it doesn't take any parameters, returns the property.
    return this.#firstname;
  }

  set firstname(firstname) {  // it takes a parameter, assigns this new value to the property, and returns nothing
    this.#firstname = firstname;
  }

  get lastname() {
    return this.#lastname;
  }

  set lastname(lastname) {
    this.#lastname = lastname;
  }
}

let w = new Worker("Maria", "Saga");
console.log(w.firstname);

// _______________________________________________________________________
// Inheritance
// -----------

// It is the concept that classes can have child classes that inherit 
// the properties and methods from the parent class.

class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
    }

  move() {
    console.log("moving at", this.currentSpeed);
  }

  accelerate(amount) {
    this.currentSpeed += amount;
  }
}

class Motorcycle extends Vehicle {   // With the extends keyword we specify that a certain class is the child of another class.
  constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed); // The super word in the constructor is calling the constructor from the parent, Vehicle
    this.fuel = fuel;
  }

  doWheelie() {
    console.log("Driving on one wheel!");
  }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//  Project 1

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Create a class to track the employees of a company:
// 1. Use first names, last names, and the number of years worked as values in the
      // constructor.
// 2. Create two or more people with values for their first names, last names, and
      // the number of years they've worked at the company. Add the people into an
      // array.
// 3. Set up a prototype to return the details of the person's first and last names
      // and how long they've worked at the company.
// 4. Iterate the contents of the array to output the results into the console, adding
      // some text to make the output a full sentence.


let listOfEmployee = [];
class Employee {
  constructor(firstname, lastname, yOfExperience) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.yOfExperience = yOfExperience;
  }

  getDetails () {
    return `${this.firstname} ${this.lastname} has worked here for ${this.yOfExperience} years.`;
  }
}

emp1 = new Employee("Kemal", "Jemal", 5);
emp2 = new Employee("Ahmed", "Hasan", 4);
emp3 = new Employee("Abdi", "Mohammed", 7);

listOfEmployee.push(emp1, emp2, emp3);

console.table(listOfEmployee);

listOfEmployee.forEach(employee => {
  console.log(employee.getDetails());
});

// -----------------------------------------------------------------------------------------------------

// Menu items price calculator

// Create a class which will allow you to work out the combined price of a number of
// items, and interact with it to work out the total cost of different orders.

// 1. Create a class that contains the prices of two menu items as private field
      // declarations.
// 2. Use the constructor in the class to get the argument values (how many of
      // each item are being bought).
// 3. Create a method to calculate and return the total cost depending on how
      // many of each item the user selects.
// 4. Use a getter property to grab the value output by the calculation method.
// 5. Create two or three objects with different combinations of menu selections,
      // and output the total cost in the console.


class MenuCalculator {
  #item1Price;
  #item2Price;
  constructor(item1Price, item2Price) {   // two emnu items as a parameter
    this.#item1Price = item1Price;
    this.item2Price = item2Price;

    this.item1Qty = 0;        // default item quantity
    this.item2Qty = 0;        // how many of each item are being bought
  }

  setOrder(item1Qty, item2Qty){     // how many of each item the user selects.
    this.item1Qty = item1Qty;
    this.item2Qty = item2Qty;
  }

  calculateTotal() {
    return (this.#item1Price * this.item1Qty) + (this.item2Price * this.item2Qty); // calculate and return the total
  }

  get totalCost() {
    return this.calculateTotal()   // getter property to grab the value output by the calculateTotal() method.
  }
}

// Let's create few orders
let order1 = new MenuCalculator(5, 3);   // Item1 = $5, item2 = $3
order1.setOrder(2, 1);   // 2 burgers + 1 drink
console.log(`Order 1 total $${order1.totalCost}`);  // No parenthesis as getters are not functions

let order2 = new MenuCalculator(99, 120);        // Item1 = $5, item2 = $3
order2.setOrder(3, 6);                            // 3 item1 and 6 item2
console.log(`order 2 total $${order2.totalCost}`);