
// Multiple Selectors

// 1) querySelectorAll()

// Is the most used selector

const listItems = document.querySelectorAll('.item'); // All list with class='item'. gives a NodeList
console.log(listItems);
console.log(listItems[0]);    // first list
console.log(listItems[1].innerText); // Orange Juice

// listItems.style.color = 'red'; // Uncaught TypeError: Cannot set properties of undefined (setting 'color')

// listItems[0].style.color = 'red';  // possible


// // To change style for each item at once
// listItems.forEach((item) => {
//   item.style.color = 'red';
// })

// // or 
// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if(index === 0) {
//     item.remove();  // removes the first item
//   }

//   if(index === 1) {
//     item.innerHTML = 'Apple Juice';  // Changes second element to Apple Juice
//   }
// })

//----------------------------------------------------------------------------------------------

// 2) document.getElementsByClassName()
// ------------------------------------

// This is restrictive as it can only be used for classes

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2);   // This gives us an html Collecion , we need to change into Array to use forEach() method

console.log(listItems2.innerText);  // Undefined
console.log(listItems2[2].innerText); // Oreos

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);  // logs each element
})

//-------------------------------------------------------------------------------------------------

// 3) getElementsByTagName()
// -------------------------

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);    // Logs HTMLCollections
console.log(listItems3[2]);  // logs third list
console.log(listItems3[2].innerText);  // Oreos => second list text 

