
// DOM Selector - Single Element

// 1) document.getElementById()

// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id); // app-title
// console.log(document.getElementById('app-title').class);  // undefined
// console.log(document.getElementById('app-title').className); // returns nothing as there is no class name

console.log(document.getElementById('app-title').getAttribute('id')); // app-title

// Set Attributes 

// document.getElementById('app-title').id = 'new-id'; // This set new id 
// document.getElementById('app-title').title = 'Shopping List';
// document.getElementById('app-title').setAttribute('class', 'title'); // sets class attribute to 'title'

// If you have to use this selector more than once, we cn store variable

const title = document.getElementById('app-title');

// Get/Change content
console.log(title.textContent);  // Shopping List
title.textContent = 'Hello World'; // changes Shopping List to Hellow World
title.innerText = 'Hello Again';  // changes  to Hellow Again. most commenly used
title.innerHTML = '<trong>Shopping List</strong>';   // Changes to Shopping List. used a lot in js

// Change Styles

title.style.color = 'red';
title.style.backgroundColor = 'black';  // Always use camelCase for two words
title.style.borderRadius = '5px';

// ------------------------------------------------------------------------------------------

// 2) document.querySelector()
// ---------------------------

// we can select anything with document.querySelector() 
// only selects single element

console.log(document.querySelector('h1')); // only selects the first one if there are multiple on the page
console.log(document.querySelector('#app-title')); // select by id 
console.log(document.querySelector('.container')); // select by class
console.log(document.querySelector('input[type="text"]'));  // select attribute
console.log(document.querySelector('li:nth-child(2)').innerText);  // using seudo selecto. second child (Orange juice)

const secondItem  = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';  // Changes Orange juice to Apple Juice
secondItem.style.color = 'red';

// We can use these methods on other elements not only documents

const list = document.querySelector('ul');  // select the un ordered list
console.log(list);

const firstItem = list.querySelector('li');  // select the first element of ul
firstItem.style.color = 'blue';