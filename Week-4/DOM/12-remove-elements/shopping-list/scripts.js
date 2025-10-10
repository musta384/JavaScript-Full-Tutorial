
// Remove element

// Using remove()
function removeClearBtn() {
  document.querySelector('#clear').remove();
}



// Removing Child 
function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}

// Removing Specific Item
function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);   // passing in item we want to remove
  ul.removeChild(li);
}

// or
function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll(`li`)[itemNumber - 1];   // passing in item we want to remove
  ul.removeChild(li);
}

// or
function removeItem3(itemNumber) {
  const li = document.querySelectorAll(`li`);
  li[itemNumber - 1].remove();   // passing in item we want to remove
}

// or Short form
const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();


removeClearBtn();  // Removes clear button
// removeFirstItem();  // Removes Apple
// removeItem(2);  // Removes Second Item
// removeItem(3);  // Removes third Item
// removeItem2(2);
// removeItem3(3);    // Removes third item
removeItem4(4);       // Removes 4th item

