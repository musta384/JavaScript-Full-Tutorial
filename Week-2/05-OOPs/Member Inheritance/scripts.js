// Memeber Inheritance

// 1) Classical Inheritance
// 2) Prototypal Inheritance
// 3) Deep Copy 
// 4) Mixin

//Creating Objects with a Constructor
// -------------------------------------

var WildMaineBlueberry = function(blueberries, vanilla) {
this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
};

WildMaineBlueberry.prototype = {
heavyCream: [1, "cup", "Organic Valley"],
halfHalf: [1, "cup", "Organic Valley"],
sugar: [5/8, "cup"],
yolks: [6],
freshLemonJuice: [2, "tsp"]
};

var wildMaineBlueberry = new WildMaineBlueberry();
console.log(wildMaineBlueberry);

// Examples

var ArsenalFc = function(onion, chilli) {
  this.onion = [2, 'kilos'];
  this.chilli = [1/2, 'kilos'];
}

ArsenalFc.prototype = {
  orange: [1, 'kilos'],
  banana: [2, 'kilos'],
  cabage: [1, 'kilos'],
  tomato: [1/2, 'kilos'],
}

var arsenalFc = new ArsenalFc();
console.log(arsenalFc);


//_________________________________________________________
// 1) Classical Inheritance
// ---------------------------------------------------------

var VanillaBean = function(vanilla, cinnamon) {
  this.vanilla = [1, 'bean', vanilla ? vanilla: 'Madagaskar Bourbon'];
  cinnamon && (this.cinnamon = [1, 'stick', 'Saigon']);
}

VanillaBean.prototype = {
  heavyCream: [1, 'cup', 'Organic Valley'],
  halfHalf: [2, 'cup', 'Organic Valley'],
  sugar: [5/8, 'cup'],
  yolks: [6]
}

// var vanilla = new VanillaBean('Ethiopian', true);
// console.log(vanilla);

// Now let’s create a Coffee() constructor that will inherit from VanillaBean(). Unless otherwise
// specified in an optional coffee parameter, we’ll steep coarsely ground Starbucks Espresso with a
// Madagascar Bourbon vanilla bean.

var Coffee = function(coffee) {
  this.coffee = coffee || [1, 'cup', 'Starbucks Spresso'] // if value of coffee is not provided it will take the default.
}

Coffee.prototype = new VanillaBean(); 
// Note that Coffee.prototype contains just one member, vanilla, which contains [1, "bean",
// "Madagascar Bourbon"], because we didn’t supply the optional cinnamon parameter to the Vanilla()
// constructor.

// Coffee.prototype = new VanillaBean('Ethiopian', true); 
// // This one contains two member as 'Ethiopian', true is passed for vanilla and cinnamon resplly.

// let’s create a Coffee() instance named coffee, verifying our work with Figure 5–5.
// Note that coffee has its own coffee member but inherits other members from Coffee.prototype and
// VanillaBean.prototype.

// var coffee = new Coffee([1, 'cup', 'Ethiopian']); coffee value is provided as [1, 'cup', 'Ethiopian']
// var coffee = new Coffee(); // takes default coffee value which is [1, 'cup', 'Starbucks Spresso']
// console.log(coffee);

// Let's create Chocolate constructow now, 

var Chocolate = function(cocoa, bittersweet) {  // Optional parameters
  this.cocoa = cocoa || [3/16, 'cup', 'Callebaut']; 
  this.bittersweet = bittersweet || [1+1/2, 'cup', 'Callebaut']; // Optional
}

Chocolate.prototype = new VanillaBean(); // Chocolate inherits members of VanillaBean
Chocolate.prototype.yolks = [4] // Override yolks quantity in VanillaBean

var chocolate = new Chocolate();
console.log(chocolate);


// Sharing a Prototype but Forgoing the Chain
// ----------------------------------------------

// One drawback of chaining prototypes is that own members turn into inherited members.
//One way around this bugaboo would be to have two constructors share a prototype object, thereby
// dispensing with the chain link.

var Berry = function() {}
Berry.prototype = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [3],
  vanilla: [1, "bean", "Madagascar Bourbon"]
};

var Blueberry = function(blueberry, lemon) {
  this.blueberry = [2, "cup", blueberry ? blueberry : "Maine wild blueberries"];
  this.freshLemonJuice = [2, "tsp", lemon ? lemon : "Meyer"];
};
Blueberry.prototype = Berry.prototype;

var Strawberry = function(strawberry) {
  this.strawberry = [2, "cup", strawberry ? strawberry : "fraises des bois"];
};
Strawberry.prototype = Berry.prototype;

var blueberry = new Blueberry();
var strawberry = new Strawberry();
console.log(blueberry);
console.log(strawberry);

// Now for the bad. Since Blueberry.prototype and Strawberry.prototype are
// the same object, there’s no way to add, delete, or modify inherited members for Strawberry() without
// identically changing inherited embers for Blueberry(), and vice versa.


// _________________________________________________________
// 2) Prototypal Inheritance
// --------------------------------------------------------
// clones from prototypes, rather than using inheritance such as that we saw earlier

var clone = function (donor) {  // clone() works with one parameter named donor, which contains the object you want to clone.
  var Proxy = function () {};   // create an empty constructor function named Proxy().
  Proxy.prototype = donor;      // we’ll set Proxy.prototype to donor rather than to donor.prototype
  return new Proxy();           // return an empty object, which will inherit both own and inherited members from donor.
                                // We’ll then add whatever additional members we need to the empty object.
};

var banana = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [9/16, "cup"],
  yolks: [3],
  banana: [1 + 1/2, "cup, puréed"],
  coconutMilk: [1/4, "cup"],
  lemon: [2, "tsp", "freshly juiced Meyer lemon"],
  vanilla: [1, "bean", "Madagascar Bourbon"]
};

var chunkyMonkey = clone(banana);
chunkyMonkey.walnuts = [3/4, "cup, coarsely chopped"];
chunkyMonkey.bittersweet = [1, "cup, coarsely chopped", "Callebaut"];
console.log(banana);
console.log(chunkyMonkey);

// Adding members in prototypal inheritance
// What if we have optional second parameter which is an object containing members to add to the clone.

var emulate = function (donor, more) {  // Does shallow Copy, members of the object type are copied by reference),
  var Proxy = function () {}, child, m;
  Proxy.prototype = donor;
  child = new Proxy();
  for (var m in more) {
    child[m] = more[m];
  }
  return child;
};

var chocolate = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6],
  cocoa: [3/8, "cup", "Callebaut, Dutch process"],
  vanilla: [1, "bean", "Madagascar Bourbon"]
};

var newYorkSuperFudgeChunk = emulate(chocolate, {
  pecans: [1/4, "cup, coarsely chopped"],
  walnuts: [1/4, "cup, coarsely chopped"],
  almonds: [1/4, "cup, coarsely chopped"],
  whiteChocolate: [1/3, "cup, coarsely chopped", "Callebaut"],
  bittersweetChocolate: [1/3, "cup, coarsely chopped", "Callebaut"]
});

console.log(chocolate);
console.log(newYorkSuperFudgeChunk);


// ____________________________________________________________
// 3) Cloning Members/ Deep Copy
// -------------------------------------------------------------

// a deep copy recursively clones those.

// will clone an object by doing a deep copy of its members,

var cloneMembers = function (donor, donee) {   // Declares two parameters, donor(source) and donee(target) 
  donee = donee || {};           // If donee is not provided (undefined, null, etc.), it defaults to an empty object {}.
  for (var m in donor) {         // Loops through all enumerable properties (m) in the donor object. Each property will be copied over.
    if (typeof donor[m] === "object" && donor[m] !== null) {  // Checks if the current property (donor[m]) is an object (arrays is objects in JS) and ensures it’s not null
      donee[m] = typeof donor[m].pop === "function" ? [] : {}; // whether the property should be cloned into an array ([]) or an object ({}):
      cloneMembers(donor[m], donee[m]);  // Recursively calls cloneMembers to copy nested objects/arrays inside the current property.
    } else {
      donee[m] = donor[m];  // If the property is not an object (e.g., number, string, boolean, function, undefined), copy its value directly.
    }
  }
  return donee;    // Returns the cloned object (or array).
};

var vanillaHeathBarCrunch = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6],
  heathBars: [4, "bars, coarsely chopped"],
  vanilla: [1, "bean", "Madagascar Bourbon"]
};

var coffeeHeathBarCrunch = cloneMembers(vanillaHeathBarCrunch);
coffeeHeathBarCrunch.coffee = [1/4, "cup, coarsely ground", "Starbucks Espresso"];
console.log(vanillaHeathBarCrunch);
console.log(coffeeHeathBarCrunch);


// ________________________________________________________
// 4) Mixins
// ----------------------------------------------------------

// Finally, we can create an object by doing a deep copy of the members of two or more objects.
// So, we’ll write a merge() function that takes an array of mixins named mixins and
// optionally a donee to clone members to. Note that merge() will have cloneMembers() do the deep copy.

var cloneMembers = function (donor, donee) {
  donee = donee || {};
  for (var m in donor) {
    if (typeof donor[m] === "object" && donor[m] !== null) {
      donee[m] = typeof donor[m].pop === "function" ? [] : {};
      cloneMembers(donor[m], donee[m]);
    } else {
      donee[m] = donor[m];
    }
  }
  return donee;
};

var merge = function (mixins, donee) {  // it takes mixins(an array of objects you want to merge) and donee: the target object (optional).
  var i, j, donee = donee || {};        // i & j for looping. if donee is not provided, default it to an empty object {}.
  for (i = 0, j = mixins.length; i < j; i ++) {   // Loops through every object inside the mixins array.
    cloneMembers(mixins[i], donee);    // For each object in the mixins array: Calls our deep clone helper (cloneMembers) to copy its properties into donee.
  }
  return donee;  // Returns the merged object.
};

// This means all properties from all objects in the array are merged into one target object.
// If two mixins have the same property name, the later one will overwrite the earlier one.
// Mixins below

var french = {
  heavyCream: [1, "cup", "Organic Valley"],
  halfHalf: [2, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};

var philly = {
  heavyCream: [2, "cup", "Organic Valley"],
  halfHalf: [1, "cup", "Organic Valley"],
  sugar: [5/8, "cup"]
};
var gelato = {
  halfHalf: [3, "cup", "Organic Valley"],
  sugar: [5/8, "cup"],
  yolks: [6]
};

var vanilla = {
  vanilla: [1, "bean", "Madagascar Bourbon"]
};

var heathBar = {
  heathBars: [4, "bars, coarsely chopped"]
};

var coffee = {
  coffee: [1/4, "cup, coarsely ground", "Starbucks Espresso"]
};

var coffeeHeathBarCrunch = merge([gelato, vanilla, coffee, heathBar]); // Merges gelato, vanilla, coffee, heathBar 
console.log(coffeeHeathBarCrunch);
var coffee = merge([philly, vanilla, coffee]); // Merges philly, vanilla, coffee
console.log(coffee);
var vanillaHeathBarCrunch = merge([french, vanilla, heathBar]);
console.log(vanillaHeathBarCrunch);
